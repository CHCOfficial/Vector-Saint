import * as THREE from 'three';
import { ARENA_TUNING, type GameSettings } from '../data/tuning';
import { getBackground, type BackgroundDefinition, type BackgroundId } from '../data/backgrounds';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { GameEvent } from '../game/GameEvents';

export interface BackgroundRenderState {
  focusX: number;
  focusY: number;
  velocityX: number;
  velocityY: number;
  multiplier: number;
  healthRatio: number;
  wave: number;
  enemyCount: number;
}

export class BackgroundRenderer {
  readonly object = new THREE.Group();
  private readonly material: THREE.ShaderMaterial;
  private readonly mesh: THREE.Mesh;
  private current: BackgroundDefinition;
  private time = 0;
  private motionAmount = 0;
  private shotPulse = 0;
  private killPulse = 0;
  private bombPulse = 0;
  private dashPulse = 0;
  private pickupPulse = 0;
  private scorePulse = 0;
  private pulseScale = 1;

  constructor() {
    this.current = getBackground('neonCathedralGrid');
    this.material = this.createMaterial();
    const geometry = new THREE.PlaneGeometry(
      ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale * 1.08,
      ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale * 1.12,
      1,
      1
    );
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.5;
    this.mesh.position.y = -0.2;
    this.mesh.frustumCulled = false;
    this.object.add(this.mesh);
    this.applyBackground(this.current);
  }

  applySettings(settings: GameSettings): void {
    this.setBackground(settings.selectedBackground);
    const intensity = VISUAL_TUNING.backgroundIntensity[settings.backgroundIntensity];
    this.material.uniforms.opacity.value = 0.26 * this.current.opacityScale * intensity;
    this.pulseScale = settings.flashReduction ? 0.42 : 1;
  }

  setBackground(backgroundId: BackgroundId): void {
    const next = getBackground(backgroundId);
    if (next.id === this.current.id) return;
    this.current = next;
    this.applyBackground(next);
  }

  emit(event: GameEvent): void {
    const reactions = this.current.reactivity;
    if (event.type === 'shoot') {
      this.shotPulse = Math.min(1.2, this.shotPulse + 0.18 * reactions.shooting * this.pulseScale);
    } else if (event.type === 'beamFired') {
      this.shotPulse = Math.min(1.2, this.shotPulse + 0.26 * reactions.shooting * this.pulseScale);
    } else if (event.type === 'enemyKilled') {
      this.killPulse = Math.min(1.4, this.killPulse + 0.28 * reactions.kills * this.pulseScale);
      this.scorePulse = Math.min(1.3, this.scorePulse + 0.16 * reactions.multiplier * this.pulseScale);
    } else if (event.type === 'bomb') {
      this.bombPulse = Math.min(1.65, this.bombPulse + 1.05 * reactions.bombs * this.pulseScale);
    } else if (event.type === 'dash') {
      this.dashPulse = Math.min(1.2, this.dashPulse + 0.58 * reactions.dash * this.pulseScale);
    } else if (event.type === 'pickupCollected' || event.type === 'relicBonus') {
      this.pickupPulse = Math.min(1.15, this.pickupPulse + 0.46 * this.pulseScale);
    } else if (event.type === 'skinAbility' || event.type === 'relicZone') {
      this.scorePulse = Math.min(1.25, this.scorePulse + 0.3 * this.pulseScale);
    } else if (event.type === 'achievementUnlocked') {
      this.scorePulse = Math.min(1.6, this.scorePulse + 0.72 * this.pulseScale);
    }
  }

  update(dt: number, state: BackgroundRenderState): void {
    this.time += dt;
    const speed = Math.hypot(state.velocityX, state.velocityY);
    const targetMotion = THREE.MathUtils.smoothstep(speed, 1.5, 34);
    const motionBlend = 1 - Math.exp(-dt * 5.8);
    this.motionAmount += (targetMotion - this.motionAmount) * motionBlend;

    this.shotPulse *= Math.exp(-dt * 5.2);
    this.killPulse *= Math.exp(-dt * 3.1);
    this.bombPulse *= Math.exp(-dt * 1.85);
    this.dashPulse *= Math.exp(-dt * 4.2);
    this.pickupPulse *= Math.exp(-dt * 3.8);
    this.scorePulse *= Math.exp(-dt * 2.7);

    this.object.position.x = state.focusX;
    this.object.position.z = state.focusY;
    this.material.uniforms.time.value = this.time;
    this.material.uniforms.origin.value.set(state.focusX, state.focusY);
    this.material.uniforms.motionAmount.value = this.motionAmount;
    this.material.uniforms.velocity.value.set(state.velocityX, state.velocityY);
    this.material.uniforms.multiplier.value = state.multiplier;
    this.material.uniforms.healthRatio.value = state.healthRatio;
    this.material.uniforms.wave.value = state.wave;
    this.material.uniforms.enemyPressure.value = THREE.MathUtils.clamp(state.enemyCount / 90, 0, 1);
    this.material.uniforms.shotPulse.value = this.shotPulse;
    this.material.uniforms.killPulse.value = this.killPulse;
    this.material.uniforms.bombPulse.value = this.bombPulse;
    this.material.uniforms.dashPulse.value = this.dashPulse;
    this.material.uniforms.pickupPulse.value = this.pickupPulse;
    this.material.uniforms.scorePulse.value = this.scorePulse;
  }

  private applyBackground(background: BackgroundDefinition): void {
    this.material.uniforms.mode.value = background.mode;
    this.material.uniforms.baseColor.value.setHex(background.palette.base);
    this.material.uniforms.primaryColor.value.setHex(background.palette.primary);
    this.material.uniforms.secondaryColor.value.setHex(background.palette.secondary);
    this.material.uniforms.accentColor.value.setHex(background.palette.accent);
    this.material.uniforms.parallax.value = background.parallax;
    this.material.uniforms.movementReactivity.value = background.reactivity.movement;
    this.material.uniforms.multiplierReactivity.value = background.reactivity.multiplier;
  }

  private createMaterial(): THREE.ShaderMaterial {
    const halfWidth = ARENA_TUNING.width * VISUAL_TUNING.arena.infiniteGridScale * 1.08 * 0.5;
    const halfHeight = ARENA_TUNING.height * VISUAL_TUNING.arena.infiniteGridScale * 1.12 * 0.5;
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mode: { value: 0 },
        opacity: { value: 0.26 },
        parallax: { value: 0.06 },
        movementReactivity: { value: 0.6 },
        multiplierReactivity: { value: 0.7 },
        motionAmount: { value: 0 },
        multiplier: { value: 1 },
        healthRatio: { value: 1 },
        wave: { value: 1 },
        enemyPressure: { value: 0 },
        shotPulse: { value: 0 },
        killPulse: { value: 0 },
        bombPulse: { value: 0 },
        dashPulse: { value: 0 },
        pickupPulse: { value: 0 },
        scorePulse: { value: 0 },
        origin: { value: new THREE.Vector2() },
        velocity: { value: new THREE.Vector2() },
        halfSize: { value: new THREE.Vector2(halfWidth, halfHeight) },
        baseColor: { value: new THREE.Color(0x030813) },
        primaryColor: { value: new THREE.Color(0x67f8ff) },
        secondaryColor: { value: new THREE.Color(0xff4df4) },
        accentColor: { value: new THREE.Color(0xffffff) }
      },
      vertexShader: `
        varying vec2 vFloor;
        varying vec2 vUv;

        void main() {
          vFloor = position.xy;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float bombPulse;
        uniform float dashPulse;
        uniform float enemyPressure;
        uniform float healthRatio;
        uniform float killPulse;
        uniform float mode;
        uniform float motionAmount;
        uniform float movementReactivity;
        uniform float multiplier;
        uniform float multiplierReactivity;
        uniform float opacity;
        uniform float parallax;
        uniform float pickupPulse;
        uniform float scorePulse;
        uniform float shotPulse;
        uniform float time;
        uniform float wave;
        uniform vec2 halfSize;
        uniform vec2 origin;
        uniform vec2 velocity;
        uniform vec3 accentColor;
        uniform vec3 baseColor;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        varying vec2 vFloor;
        varying vec2 vUv;

        float lineMask(float value, float width) {
          float cell = abs(fract(value - 0.5) - 0.5);
          float aa = max(fwidth(value) * 1.8, 0.001);
          return 1.0 - smoothstep(width, width + aa, cell);
        }

        float gridMask(vec2 coord, float spacing, float width) {
          vec2 scaled = coord / spacing;
          return max(lineMask(scaled.x, width), lineMask(scaled.y, width));
        }

        float ringMask(vec2 coord, float radius, float width) {
          float distanceToCenter = length(coord);
          float aa = max(fwidth(distanceToCenter) * 2.0, 0.002);
          return 1.0 - smoothstep(width, width + aa, abs(distanceToCenter - radius));
        }

        mat2 rotate2d(float angle) {
          float s = sin(angle);
          float c = cos(angle);
          return mat2(c, -s, s, c);
        }

        vec3 paletteMix(float value) {
          float t = clamp(value, 0.0, 1.0);
          vec3 first = mix(primaryColor, secondaryColor, smoothstep(0.08, 0.7, t));
          return mix(first, accentColor, smoothstep(0.68, 1.0, t));
        }

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(0.76, 0.99, edge);
          float radialFade = 1.0 - smoothstep(0.78, 1.09, length(vFloor / halfSize));
          float fade = edgeFade * radialFade;

          vec2 motionDir = normalize(velocity + vec2(0.001, 0.0));
          float motionDrift = motionAmount * movementReactivity;
          vec2 stable = vFloor + origin * parallax;
          vec2 smoothWorld = mix(stable, vFloor + origin * parallax * 0.18, motionAmount * 0.72);
          vec2 flow = smoothWorld + motionDir * time * motionDrift * 3.2;
          float multiplierPulse = clamp((multiplier - 1.0) / 24.0, 0.0, 1.0) * multiplierReactivity;
          float dangerPulse = 1.0 - clamp(healthRatio, 0.0, 1.0);
          float eventPulse =
            shotPulse * 0.12 +
            killPulse * 0.28 +
            bombPulse * 0.48 +
            dashPulse * 0.18 +
            pickupPulse * 0.14 +
            scorePulse * 0.2 +
            multiplierPulse * 0.18 +
            enemyPressure * 0.08 +
            dangerPulse * 0.09;

          float mask = 0.0;
          float glow = 0.0;
          float colorPhase = 0.0;

          if (mode < 0.5) {
            vec2 cathedral = rotate2d(0.785398) * flow;
            float lattice = gridMask(cathedral, 9.0, 0.018) * 0.44;
            float fine = gridMask(flow, 18.0, 0.01) * 0.22;
            float ring = max(ringMask(flow, 30.0 + sin(time * 0.35) * 1.6, 0.18), ringMask(flow, 58.0, 0.14)) * 0.46;
            float spoke = pow(abs(sin(atan(flow.y, flow.x) * 6.0 + time * 0.25)), 24.0) * 0.28;
            mask = lattice + fine + ring + spoke;
            glow = 0.16 + eventPulse * 0.8 + multiplierPulse * 0.24;
            colorPhase = lattice + ring + multiplierPulse;
          } else if (mode < 1.5) {
            float sonar = lineMask(length(flow) * 0.052 - time * 0.16 + bombPulse * 0.12, 0.018) * 0.75;
            float cross = gridMask(rotate2d(0.16) * flow, 28.0, 0.009) * 0.18;
            float drift = pow(0.5 + 0.5 * sin(flow.x * 0.036 + flow.y * 0.052 - time * 0.9), 3.0) * 0.2;
            mask = sonar + cross + drift;
            glow = 0.13 + killPulse * 0.45 + pickupPulse * 0.28 + bombPulse * 0.42;
            colorPhase = sonar + drift;
          } else if (mode < 2.5) {
            vec2 furnace = rotate2d(-0.26) * flow;
            float heat = pow(0.5 + 0.5 * sin(furnace.x * 0.08 + sin(furnace.y * 0.045 + time) * 1.6 + time * 0.8), 3.4);
            float seam = gridMask(furnace, 16.0, 0.01) * 0.28;
            float corona = lineMask(length(furnace) * 0.035 - time * 0.1, 0.012) * 0.34;
            mask = heat * 0.32 + seam + corona;
            glow = 0.12 + shotPulse * 0.36 + killPulse * 0.42 + bombPulse * 0.58;
            colorPhase = heat + shotPulse * 0.35;
          } else if (mode < 3.5) {
            vec2 circuit = floor(flow / 7.5) * 7.5;
            vec2 local = abs(fract(flow / 7.5) - 0.5);
            float traces = ((1.0 - step(0.018, local.x)) + (1.0 - step(0.018, local.y))) * 0.18;
            float node = (1.0 - smoothstep(0.0, 0.055, length(local - 0.5))) * 0.34;
            float glitch = lineMask((circuit.x + circuit.y) * 0.019 + time * 0.22 + dashPulse * 0.2, 0.012) * 0.32;
            mask = traces + node + glitch;
            glow = 0.11 + dashPulse * 0.52 + killPulse * 0.32 + scorePulse * 0.26;
            colorPhase = glitch + node + dashPulse;
          } else if (mode < 4.5) {
            vec2 aurora = rotate2d(0.08) * flow;
            float curtain = pow(0.5 + 0.5 * sin(aurora.x * 0.045 + sin(aurora.y * 0.037 - time * 0.52) * 2.2 + time * 0.42), 4.0);
            float veil = smoothstep(0.44, 0.92, curtain) * (0.52 + 0.28 * sin(aurora.y * 0.026 + time));
            float graveLines = gridMask(rotate2d(-0.52) * aurora, 24.0, 0.007) * 0.18;
            mask = veil + graveLines;
            glow = 0.12 + killPulse * 0.4 + multiplierPulse * 0.34 + pickupPulse * 0.24;
            colorPhase = curtain + multiplierPulse;
          } else if (mode < 5.5) {
            vec2 monolith = rotate2d(0.03) * flow;
            float pillars = pow(lineMask(monolith.x / 18.0 + sin(monolith.y * 0.011) * 0.035, 0.045), 1.6);
            float gates = gridMask(monolith, 30.0, 0.006) * 0.28;
            float halo = ringMask(monolith, 44.0 + sin(time * 0.2) * 2.2, 0.16) * 0.22;
            mask = pillars * 0.28 + gates + halo;
            glow = 0.1 + shotPulse * 0.24 + killPulse * 0.32 + scorePulse * 0.28;
            colorPhase = pillars + halo;
          } else if (mode < 6.5) {
            vec2 horizon = flow;
            float yDepth = clamp((horizon.y / halfSize.y + 1.0) * 0.5, 0.0, 1.0);
            float bands = lineMask(pow(max(0.02, yDepth), 1.8) * 28.0 - time * (0.5 + motionAmount * 0.35), 0.018) * 0.72;
            float vanishing = max(lineMask((horizon.x / max(10.0, abs(horizon.y) + 12.0)) * 14.0, 0.01), 0.0) * 0.2;
            float skyline = smoothstep(0.46, 0.5, yDepth) * (1.0 - smoothstep(0.5, 0.56, yDepth)) * 0.58;
            mask = bands + vanishing + skyline;
            glow = 0.13 + dashPulse * 0.32 + shotPulse * 0.2 + multiplierPulse * 0.32;
            colorPhase = yDepth + motionAmount * 0.35 + dashPulse;
          } else {
            vec2 core = rotate2d(sin(time * 0.09) * 0.16) * flow;
            float veins = gridMask(core + sin(core.yx * 0.04 + time * 0.6) * 2.4, 14.0, 0.012) * 0.22;
            float cells = pow(0.5 + 0.5 * sin(core.x * 0.075 + sin(core.y * 0.09 - time * 0.7) * 2.4 + time * 0.38), 5.0);
            float pulseRing = lineMask(length(core) * 0.045 - time * 0.12 - killPulse * 0.08, 0.016) * 0.45;
            mask = cells * 0.26 + veins + pulseRing;
            glow = 0.12 + killPulse * 0.44 + enemyPressure * 0.22 + dangerPulse * 0.28 + multiplierPulse * 0.28;
            colorPhase = cells + dangerPulse * 0.4 + multiplierPulse;
          }

          float waveTint = 0.5 + 0.5 * sin(time * 0.16 + wave * 0.37 + colorPhase * 2.0);
          vec3 color = mix(baseColor * 0.42, paletteMix(waveTint), clamp(mask * 1.4 + eventPulse, 0.0, 1.0));
          color = mix(color, accentColor, clamp(bombPulse * 0.18 + pickupPulse * 0.08 + scorePulse * 0.08, 0.0, 0.36));
          float alpha = opacity * fade * clamp(mask * (0.34 + glow) + eventPulse * 0.08, 0.0, 0.9);
          if (alpha < 0.002) discard;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide
    });
  }
}
