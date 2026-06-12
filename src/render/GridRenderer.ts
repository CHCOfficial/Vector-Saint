import * as THREE from 'three';
import { ARENA_TUNING, RENDER_TUNING } from '../data/tuning';
import { VISUAL_TUNING } from '../data/visualTuning';

interface GridRipple {
  x: number;
  y: number;
  age: number;
  life: number;
  strength: number;
}

export class GridRenderer {
  readonly object: THREE.LineSegments;
  private readonly positions: Float32Array;
  private readonly base: Float32Array;
  private readonly material: THREE.ShaderMaterial;
  private readonly ripples: GridRipple[] = [];
  private time = 0;

  constructor() {
    const halfWidth = ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale * 0.5;
    const halfHeight = ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale * 0.5;
    const spacing = RENDER_TUNING.grid.spacing;
    const vertices: number[] = [];

    for (let x = -halfWidth; x <= halfWidth + 0.01; x += spacing) {
      for (let z = -halfHeight; z < halfHeight - 0.01; z += spacing) {
        vertices.push(x, 0, z, x, 0, Math.min(z + spacing, halfHeight));
      }
    }

    for (let z = -halfHeight; z <= halfHeight + 0.01; z += spacing) {
      for (let x = -halfWidth; x < halfWidth - 0.01; x += spacing) {
        vertices.push(x, 0, z, Math.min(x + spacing, halfWidth), 0, z);
      }
    }

    this.positions = new Float32Array(vertices);
    this.base = new Float32Array(vertices);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x36dfff) },
        opacity: { value: 0.48 },
        time: { value: 0 },
        origin: { value: new THREE.Vector2() },
        halfSize: { value: new THREE.Vector2(halfWidth, halfHeight) },
        fadeStart: { value: VISUAL_TUNING.arena.gridFadeStart },
        fadeEnd: { value: VISUAL_TUNING.arena.gridFadeEnd },
        flowSpeed: { value: VISUAL_TUNING.arena.gridFlowSpeed },
        rgbWaveStrength: { value: VISUAL_TUNING.arena.gridRgbWaveStrength },
        rgbWaveScale: { value: VISUAL_TUNING.arena.gridRgbWaveScale },
        rgbWaveSpeed: { value: VISUAL_TUNING.arena.gridRgbWaveSpeed },
        motionAmount: { value: 0 },
        movingRgbStrength: { value: VISUAL_TUNING.arena.gridRgbMovingStrength },
        movingOriginInfluence: { value: VISUAL_TUNING.arena.gridRgbMovingOriginInfluence }
      },
      vertexShader: `
        uniform float fadeStart;
        uniform float fadeEnd;
        uniform float flowSpeed;
        uniform float rgbWaveScale;
        uniform float rgbWaveSpeed;
        uniform float rgbWaveStrength;
        uniform float opacity;
        uniform float time;
        uniform vec2 origin;
        uniform vec2 halfSize;
        varying vec2 vFloor;
        varying vec2 vWorld;

        void main() {
          vFloor = position.xz;
          vWorld = position.xz + origin;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float fadeStart;
        uniform float fadeEnd;
        uniform float flowSpeed;
        uniform float opacity;
        uniform float rgbWaveScale;
        uniform float rgbWaveSpeed;
        uniform float rgbWaveStrength;
        uniform float motionAmount;
        uniform float movingRgbStrength;
        uniform float movingOriginInfluence;
        uniform float time;
        uniform vec2 origin;
        uniform vec2 halfSize;
        uniform vec3 color;
        varying vec2 vFloor;
        varying vec2 vWorld;

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(fadeStart, fadeEnd, edge);
          vec2 stableWorld = vFloor + origin * movingOriginInfluence;
          vec2 waveSpace = mix(vWorld, stableWorld, motionAmount);
          float activeSpeed = rgbWaveSpeed * mix(1.0, 0.55, motionAmount);
          float activeStrength = rgbWaveStrength * mix(1.0, movingRgbStrength, motionAmount);
          float flow = 0.82 + 0.18 * sin(waveSpace.x * 0.11 + waveSpace.y * 0.075 + time * flowSpeed);
          float breath = 0.9 + 0.1 * sin((abs(waveSpace.x) + abs(waveSpace.y)) * 0.045 - time * flowSpeed * 0.7);
          float radialWaveStrength = mix(0.35, 0.11, motionAmount);
          float ribbon =
            sin((waveSpace.x + waveSpace.y * 0.62) * rgbWaveScale + time * activeSpeed * 6.28318) * 0.5 +
            sin(length(waveSpace) * rgbWaveScale * 0.78 - time * activeSpeed * 4.2) * radialWaveStrength +
            sin((waveSpace.x - waveSpace.y) * rgbWaveScale * 1.34 + time * activeSpeed * 2.7) * 0.15;
          float huePhase = ribbon * 2.3 + time * activeSpeed * 5.1;
          vec3 rgbWave = 0.52 + 0.34 * cos(huePhase + vec3(0.0, 2.094, 4.188));
          float waveMask = smoothstep(-0.42, 0.82, ribbon);
          vec3 finalColor = mix(color, rgbWave, activeStrength * waveMask);
          float motionFade = mix(1.0, 0.38, motionAmount);
          float alpha = opacity * edgeFade * flow * breath * motionFade;
          if (alpha < 0.006) discard;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.object = new THREE.LineSegments(geometry, this.material);
    this.object.frustumCulled = false;
  }

  setWorldOrigin(x: number, y: number): void {
    this.object.position.x = x;
    this.object.position.z = y;
    this.material.uniforms.origin.value.set(x, y);
  }

  setMotionAmount(amount: number): void {
    this.material.uniforms.motionAmount.value = THREE.MathUtils.clamp(amount, 0, 1);
  }

  addRipple(
    x: number,
    y: number,
    strength = 1,
    life: number = RENDER_TUNING.grid.rippleLife
  ): void {
    if (this.ripples.length >= RENDER_TUNING.grid.maxRipples) {
      this.ripples.shift();
    }
    this.ripples.push({ x, y, age: 0, life, strength });
  }

  setOpacity(opacity: number): void {
    this.material.uniforms.opacity.value = opacity;
  }

  setColor(color: number): void {
    this.material.uniforms.color.value.setHex(color);
  }

  update(dt: number): void {
    this.time += dt;
    this.material.uniforms.time.value = this.time;

    for (const ripple of this.ripples) {
      ripple.age += dt;
    }

    for (let i = this.ripples.length - 1; i >= 0; i -= 1) {
      if (this.ripples[i].age >= this.ripples[i].life) {
        this.ripples.splice(i, 1);
      }
    }

    for (let i = 0; i < this.positions.length; i += 3) {
      const x = this.base[i];
      const z = this.base[i + 2];
      const worldX = x + this.object.position.x;
      const worldZ = z + this.object.position.z;
      let height =
        Math.sin(worldX * VISUAL_TUNING.arena.gridWaveFrequency + this.time * VISUAL_TUNING.arena.gridWaveSpeed) *
        Math.sin(worldZ * VISUAL_TUNING.arena.gridWaveFrequency * 0.74 - this.time * VISUAL_TUNING.arena.gridWaveSpeed * 0.67) *
        VISUAL_TUNING.arena.gridWaveAmplitude;

      for (const ripple of this.ripples) {
        const dx = worldX - ripple.x;
        const dz = worldZ - ripple.y;
        const distance = Math.sqrt(dx * dx + dz * dz);
        const normalizedAge = ripple.age / ripple.life;
        const envelope = Math.exp(-distance * 0.06) * Math.pow(1 - normalizedAge, 1.7);
        height += Math.sin(distance * 1.35 - ripple.age * 18) * envelope * ripple.strength;
      }

      this.positions[i + 1] = height;
    }

    const attribute = this.object.geometry.getAttribute('position') as THREE.BufferAttribute;
    attribute.needsUpdate = true;
  }
}
