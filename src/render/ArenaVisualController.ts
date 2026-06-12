import * as THREE from 'three';
import { ARENA_TUNING, RENDER_TUNING, type GameSettings } from '../data/tuning';
import { getBackground } from '../data/backgrounds';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { GameEvent } from '../game/GameEvents';
import { BackgroundRenderer, type BackgroundRenderState } from './BackgroundRenderer';
import { GridRenderer } from './GridRenderer';
import { createNeonLineMaterial } from './Materials';

export class ArenaVisualController {
  readonly object = new THREE.Group();
  readonly grid = new GridRenderer();
  private readonly background = new BackgroundRenderer();
  private readonly stars: THREE.Points;
  private readonly starMaterial: THREE.PointsMaterial;
  private readonly symbols = new THREE.Group();
  private readonly energyPlane: THREE.Mesh;
  private readonly energyPlaneMaterial: THREE.ShaderMaterial;
  private readonly motionGrid: THREE.Mesh;
  private readonly motionGridMaterial: THREE.ShaderMaterial;
  private time = 0;
  private previousFocusX = 0;
  private previousFocusY = 0;
  private motionAmount = 0;
  private motionInitialized = false;

  constructor() {
    this.object.add(this.background.object);
    this.object.add(this.grid.object);
    const starPositions = new Float32Array(VISUAL_TUNING.arena.starCount * 3);
    const starWidth = ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale * 0.72;
    const starHeight = ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale * 0.72;
    for (let i = 0; i < VISUAL_TUNING.arena.starCount; i += 1) {
      const index = i * 3;
      starPositions[index] = (Math.random() - 0.5) * starWidth;
      starPositions[index + 1] = -0.35 - Math.random() * 2.4;
      starPositions[index + 2] = (Math.random() - 0.5) * starHeight;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    this.starMaterial = new THREE.PointsMaterial({
      color: 0x6fb9ff,
      size: 0.085,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.stars = new THREE.Points(starGeometry, this.starMaterial);
    this.object.add(this.stars);

    this.energyPlaneMaterial = this.createEnergyPlaneMaterial();
    const planeGeometry = new THREE.PlaneGeometry(
      ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale,
      ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale,
      1,
      1
    );
    this.energyPlane = new THREE.Mesh(planeGeometry, this.energyPlaneMaterial);
    this.energyPlane.rotation.x = -Math.PI * 0.5;
    this.energyPlane.position.y = -0.14;
    this.energyPlane.frustumCulled = false;
    this.object.add(this.energyPlane);

    this.motionGridMaterial = this.createMotionGridMaterial();
    this.motionGrid = new THREE.Mesh(planeGeometry.clone(), this.motionGridMaterial);
    this.motionGrid.rotation.x = -Math.PI * 0.5;
    this.motionGrid.position.y = -0.12;
    this.motionGrid.frustumCulled = false;
    this.object.add(this.motionGrid);

    this.createFloorSymbols();
    this.object.add(this.symbols);
  }

  applySettings(settings: GameSettings): void {
    const background = getBackground(settings.selectedBackground);
    const intensity = VISUAL_TUNING.backgroundIntensity[settings.backgroundIntensity];
    this.background.applySettings(settings);
    this.starMaterial.color.setHex(background.palette.star);
    this.starMaterial.opacity = 0.34 * intensity * background.starOpacityScale;
    this.energyPlaneMaterial.uniforms.opacity.value =
      VISUAL_TUNING.arena.energyPlaneOpacity * intensity * background.opacityScale;
    this.energyPlaneMaterial.uniforms.baseColor.value.setHex(background.palette.base);
    this.energyPlaneMaterial.uniforms.primaryColor.value.setHex(background.palette.primary);
    this.energyPlaneMaterial.uniforms.secondaryColor.value.setHex(background.palette.secondary);
    this.energyPlaneMaterial.uniforms.accentColor.value.setHex(background.palette.accent);
    this.motionGridMaterial.uniforms.opacity.value =
      VISUAL_TUNING.arena.motionGridOpacity * intensity * background.motionGridScale;
    this.motionGridMaterial.uniforms.baseColor.value.setHex(background.palette.grid);
    this.motionGridMaterial.uniforms.primaryColor.value.setHex(background.palette.primary);
    this.motionGridMaterial.uniforms.secondaryColor.value.setHex(background.palette.secondary);
    this.motionGridMaterial.uniforms.accentColor.value.setHex(background.palette.accent);
    this.grid.setColor(background.palette.grid);
    this.grid.setOpacity(VISUAL_TUNING.arena.gridOpacity * intensity * background.gridOpacityScale);
    this.setSymbolStyle(
      background.palette.accent,
      VISUAL_TUNING.arena.symbolOpacity * intensity * background.symbolOpacityScale
    );
  }

  update(dt: number, state: BackgroundRenderState): void {
    const { focusX, focusY } = state;
    this.time += dt;
    this.updateMotionAmount(dt, focusX, focusY);
    const spacing = RENDER_TUNING.grid.spacing;
    const gridOriginX = Math.round(focusX / spacing) * spacing;
    const gridOriginY = Math.round(focusY / spacing) * spacing;

    this.grid.setWorldOrigin(gridOriginX, gridOriginY);
    this.grid.setMotionAmount(this.motionAmount);
    this.energyPlane.position.x = focusX;
    this.energyPlane.position.z = focusY;
    this.motionGrid.position.x = focusX;
    this.motionGrid.position.z = focusY;
    this.symbols.position.x = focusX;
    this.symbols.position.z = focusY;

    this.background.update(dt, state);
    this.grid.update(dt);
    this.energyPlaneMaterial.uniforms.time.value = this.time;
    this.energyPlaneMaterial.uniforms.origin.value.set(focusX, focusY);
    this.energyPlaneMaterial.uniforms.motionAmount.value = this.motionAmount;
    this.motionGridMaterial.uniforms.time.value = this.time;
    this.motionGridMaterial.uniforms.origin.value.set(focusX, focusY);
    this.motionGridMaterial.uniforms.motionAmount.value = this.motionAmount;
    this.stars.rotation.y = Math.sin(this.time * VISUAL_TUNING.arena.parallaxSpeed) * 0.04;
    this.stars.position.x = focusX + Math.sin(this.time * 0.032) * 0.44;
    this.stars.position.z = focusY + Math.cos(this.time * 0.028) * 0.36;
    this.symbols.rotation.y = Math.sin(this.time * 0.03) * 0.025;
    this.symbols.position.y = Math.sin(this.time * 0.7) * 0.025;
  }

  addRipple(x: number, y: number, strength = VISUAL_TUNING.arena.rippleStrength, life?: number): void {
    this.grid.addRipple(x, y, strength, life);
  }

  emit(event: GameEvent): void {
    this.background.emit(event);
  }

  private updateMotionAmount(dt: number, focusX: number, focusY: number): void {
    if (!this.motionInitialized) {
      this.previousFocusX = focusX;
      this.previousFocusY = focusY;
      this.motionInitialized = true;
      return;
    }

    const dx = focusX - this.previousFocusX;
    const dy = focusY - this.previousFocusY;
    const speed = Math.sqrt(dx * dx + dy * dy) / Math.max(0.001, dt);
    const target = THREE.MathUtils.smoothstep(
      speed,
      VISUAL_TUNING.arena.gridRgbMotionFadeStart,
      VISUAL_TUNING.arena.gridRgbMotionFadeEnd
    );
    const amount = 1 - Math.exp(-dt * VISUAL_TUNING.arena.gridRgbMotionSmoothing);
    this.motionAmount += (target - this.motionAmount) * amount;
    this.previousFocusX = focusX;
    this.previousFocusY = focusY;
  }

  private createFloorSymbols(): void {
    const symbolMaterial = createNeonLineMaterial(0x8eeaff, VISUAL_TUNING.arena.symbolOpacity);
    const radii = [4.6, 7.8, 11.2];
    for (const radius of radii) {
      const geometry = new THREE.RingGeometry(radius, radius + 0.035, 96);
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color: 0x8eeaff,
          transparent: true,
          opacity: VISUAL_TUNING.arena.symbolOpacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide
        })
      );
      mesh.rotation.x = -Math.PI * 0.5;
      mesh.position.y = 0.03;
      this.symbols.add(mesh);
    }

    for (let i = 0; i < 6; i += 1) {
      const angle = (i / 6) * Math.PI * 2;
      const length = 13.6;
      const points = [
        new THREE.Vector3(Math.cos(angle) * 2.2, 0.08, Math.sin(angle) * 2.2),
        new THREE.Vector3(Math.cos(angle) * length, 0.08, Math.sin(angle) * length)
      ];
      this.symbols.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), symbolMaterial));
    }
  }

  private setSymbolStyle(color: number, opacity: number): void {
    this.symbols.traverse((child) => {
      const material = (child as THREE.Mesh | THREE.Line).material;
      if (!material) return;
      const materials = Array.isArray(material) ? material : [material];
      for (const item of materials) {
        if ('color' in item && item.color instanceof THREE.Color) {
          item.color.setHex(color);
        }
        if ('opacity' in item && typeof item.opacity === 'number') {
          item.opacity = opacity;
        }
        if ('transparent' in item) {
          item.transparent = true;
        }
      }
    });
  }

  private createEnergyPlaneMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: VISUAL_TUNING.arena.energyPlaneOpacity },
        rgbWaveStrength: { value: VISUAL_TUNING.arena.gridRgbWaveStrength },
        rgbWaveScale: { value: VISUAL_TUNING.arena.gridRgbWaveScale },
        rgbWaveSpeed: { value: VISUAL_TUNING.arena.gridRgbWaveSpeed },
        motionAmount: { value: 0 },
        movingRgbStrength: { value: VISUAL_TUNING.arena.gridRgbMovingStrength },
        movingOriginInfluence: { value: VISUAL_TUNING.arena.gridRgbMovingOriginInfluence },
        movingOpacity: { value: VISUAL_TUNING.arena.energyPlaneMovingOpacity },
        origin: { value: new THREE.Vector2() },
        halfSize: {
          value: new THREE.Vector2(
            ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale * 0.5,
            ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale * 0.5
          )
        },
        baseColor: { value: new THREE.Color(0x061522) },
        primaryColor: { value: new THREE.Color(0x39f5ff) },
        secondaryColor: { value: new THREE.Color(0xff3df2) },
        accentColor: { value: new THREE.Color(0xffffff) }
      },
      vertexShader: `
        varying vec2 vFloor;
        varying vec2 vWorld;
        uniform vec2 origin;

        void main() {
          vFloor = position.xy;
          vWorld = position.xy + origin;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float opacity;
        uniform float rgbWaveScale;
        uniform float rgbWaveSpeed;
        uniform float rgbWaveStrength;
        uniform float motionAmount;
        uniform float movingRgbStrength;
        uniform float movingOriginInfluence;
        uniform float movingOpacity;
        uniform float time;
        uniform vec2 halfSize;
        uniform vec2 origin;
        uniform vec3 accentColor;
        uniform vec3 baseColor;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        varying vec2 vFloor;
        varying vec2 vWorld;

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(0.52, 0.96, edge);
          float radial = 1.0 - smoothstep(0.76, 1.08, length(vFloor / halfSize));
          vec2 stableWorld = vFloor + origin * movingOriginInfluence;
          vec2 waveSpace = mix(vWorld, stableWorld, motionAmount);
          float activeSpeed = rgbWaveSpeed * mix(1.0, 0.55, motionAmount);
          float activeStrength = rgbWaveStrength * mix(1.0, movingRgbStrength, motionAmount);
          float radialWaveStrength = mix(0.18, 0.025, motionAmount);
          float diagonalFlow =
            sin((waveSpace.x * 0.82 + waveSpace.y * 0.48) * rgbWaveScale + time * activeSpeed * 5.8) * 0.5 +
            sin((waveSpace.x * -0.34 + waveSpace.y * 0.96) * rgbWaveScale * 1.45 - time * activeSpeed * 3.7) * 0.32 +
            sin(length(waveSpace) * rgbWaveScale * 0.86 - time * activeSpeed * 4.6) * radialWaveStrength;
          float ribbon = smoothstep(-0.25, 0.86, diagonalFlow);
          float ribbonWhenMoving = mix(ribbon, ribbon * 0.24, motionAmount);
          float huePhase = diagonalFlow * 2.7 + time * activeSpeed * 4.9;
          float waveT = 0.5 + 0.5 * cos(huePhase);
          vec3 rgbWave = mix(primaryColor, secondaryColor, waveT);
          rgbWave = mix(rgbWave, accentColor, 0.16 + 0.1 * sin(huePhase * 0.5));
          vec3 base = baseColor * 0.38;
          vec3 fieldColor = mix(base, rgbWave, activeStrength * ribbonWhenMoving);
          float veil = mix(0.06 + ribbon * 0.1, 0.018 + ribbonWhenMoving * 0.018, motionAmount);
          float activeOpacity = opacity * mix(1.0, movingOpacity, motionAmount);
          gl_FragColor = vec4(fieldColor, activeOpacity * edgeFade * radial * veil);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
  }

  private createMotionGridMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: VISUAL_TUNING.arena.motionGridOpacity },
        motionAmount: { value: 0 },
        origin: { value: new THREE.Vector2() },
        halfSize: {
          value: new THREE.Vector2(
            ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale * 0.5,
            ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale * 0.5
          )
        },
        spacing: { value: RENDER_TUNING.grid.spacing },
        lineWidth: { value: VISUAL_TUNING.arena.motionGridLineWidth },
        majorLineWidth: { value: VISUAL_TUNING.arena.motionGridMajorLineWidth },
        parallax: { value: VISUAL_TUNING.arena.motionGridParallax },
        rgbStrength: { value: VISUAL_TUNING.arena.motionGridRgbStrength },
        baseColor: { value: new THREE.Color(0x0a475c) },
        primaryColor: { value: new THREE.Color(0x39f5ff) },
        secondaryColor: { value: new THREE.Color(0xff3df2) },
        accentColor: { value: new THREE.Color(0xffffff) }
      },
      vertexShader: `
        varying vec2 vFloor;

        void main() {
          vFloor = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float lineWidth;
        uniform float majorLineWidth;
        uniform float motionAmount;
        uniform float opacity;
        uniform float parallax;
        uniform float rgbStrength;
        uniform float spacing;
        uniform float time;
        uniform vec2 halfSize;
        uniform vec2 origin;
        uniform vec3 accentColor;
        uniform vec3 baseColor;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        varying vec2 vFloor;

        float gridLine(vec2 coord, float width) {
          vec2 cell = abs(fract(coord - 0.5) - 0.5);
          vec2 aa = max(fwidth(coord), vec2(0.0015));
          float xLine = 1.0 - smoothstep(width, width + aa.x * 1.65, cell.x);
          float yLine = 1.0 - smoothstep(width, width + aa.y * 1.65, cell.y);
          return max(xLine, yLine);
        }

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(0.66, 0.98, edge);
          vec2 world = vFloor + origin * parallax;
          vec2 coord = world / spacing;
          float minor = gridLine(coord, lineWidth) * 0.18;
          float major = gridLine(coord / 5.0, majorLineWidth) * 0.62;
          float lineMask = max(minor, major);
          if (lineMask < 0.004) discard;

          float lane =
            0.5 + 0.5 * sin(world.x * 0.047 + world.y * 0.081 + time * 0.92);
          float laneCross =
            0.5 + 0.5 * sin(world.x * -0.072 + world.y * 0.043 - time * 0.63);
          float huePhase = time * 0.5 + world.x * 0.018 - world.y * 0.014 + lane * 1.1;
          float colorT = 0.5 + 0.5 * cos(huePhase);
          vec3 rgbWave = mix(primaryColor, secondaryColor, colorT);
          rgbWave = mix(rgbWave, accentColor, laneCross * 0.22);
          vec3 base = baseColor * 0.52;
          vec3 color = mix(base, rgbWave, rgbStrength * (0.42 + laneCross * 0.45));
          float movingAlpha = mix(0.24, 1.0, smoothstep(0.04, 0.58, motionAmount));
          float pulse = 0.58 + lane * 0.16 + laneCross * 0.1;
          gl_FragColor = vec4(color, opacity * movingAlpha * edgeFade * lineMask * pulse);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
  }
}
