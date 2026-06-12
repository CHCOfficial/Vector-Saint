import * as THREE from 'three';
import { skinReadableAccentColor, type PlayerSkin, type PlayerSkinId } from '../data/playerSkins';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { Player } from '../game/Player';
import { createNeonLineMaterial } from './Materials';

const playerShader = {
  uniforms: {
    time: { value: 0 },
    primary: { value: new THREE.Color() },
    secondary: { value: new THREE.Color() },
    accent: { value: new THREE.Color() },
    pulse: { value: 0 },
    facetStrength: { value: 0.4 },
    voidDistortion: { value: 0 },
    alpha: { value: 0.84 }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float time;
    uniform float pulse;
    uniform float voidDistortion;

    void main() {
      vUv = uv;
      vPos = position;
      vec3 p = position;
      float wave = sin((position.x + position.y) * 5.0 + time * 4.0) * voidDistortion * 0.06;
      p += normal * (pulse * 0.07 + wave);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 primary;
    uniform vec3 secondary;
    uniform vec3 accent;
    uniform float time;
    uniform float pulse;
    uniform float facetStrength;
    uniform float alpha;
    varying vec2 vUv;
    varying vec3 vPos;

    void main() {
      float bands = abs(sin((vPos.x * 3.7 + vPos.z * 5.1) + time * 2.0));
      float facet = smoothstep(0.18, 0.92, bands) * facetStrength;
      float center = 1.0 - smoothstep(0.0, 1.25, length(vPos.xz));
      vec3 color = mix(primary, secondary, facet);
      color = mix(color, accent, center * 0.34 + pulse * 0.32);
      gl_FragColor = vec4(color, alpha * (0.64 + center * 0.28 + pulse * 0.18));
    }
  `
};

export class PlayerVisualController {
  readonly object = new THREE.Group();
  private readonly fillMaterial: THREE.ShaderMaterial;
  private readonly outlineMaterial: THREE.LineBasicMaterial;
  private readonly haloMaterial: THREE.MeshBasicMaterial;
  private readonly accentMaterial: THREE.LineBasicMaterial;
  private readonly shieldMaterial: THREE.MeshBasicMaterial;
  private readonly redlineMaterial: THREE.LineBasicMaterial;
  private readonly fill: THREE.Mesh;
  private readonly outline: THREE.Line;
  private readonly halo: THREE.Mesh;
  private readonly shieldRing: THREE.Mesh;
  private readonly innerGlyph: THREE.LineSegments;
  private readonly redlineStreaks: THREE.LineSegments;
  private shootPulse = 0;
  private dashPulse = 0;
  private bombPulse = 0;
  private damagePulse = 0;
  private deathPulse = 0;
  private currentSkin: PlayerSkin;
  private geometrySkinId: PlayerSkinId;

  constructor(skin: PlayerSkin) {
    this.currentSkin = skin;
    this.geometrySkinId = skin.id;
    const skinGeometry = getPlayerSkinGeometry(skin.id);
    this.fillMaterial = new THREE.ShaderMaterial({
      ...playerShader,
      uniforms: THREE.UniformsUtils.clone(playerShader.uniforms),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.fill = new THREE.Mesh(createFillGeometry(skinGeometry.body), this.fillMaterial);

    this.outlineMaterial = createNeonLineMaterial(skin.secondaryColor, 0.98);
    this.outline = new THREE.Line(createOutlineGeometry(skinGeometry.body), this.outlineMaterial);

    this.haloMaterial = new THREE.MeshBasicMaterial({
      color: skin.secondaryColor,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.halo = new THREE.Mesh(createHaloGeometry(skinGeometry), this.haloMaterial);
    this.halo.rotation.x = -Math.PI * 0.5;
    this.halo.position.y = 0.05;
    this.halo.scale.setScalar(VISUAL_TUNING.player.haloScale);

    this.accentMaterial = createNeonLineMaterial(skin.accentColor, 0.68);
    this.innerGlyph = new THREE.LineSegments(createGlyphGeometry(skinGeometry.glyph), this.accentMaterial);

    this.shieldMaterial = new THREE.MeshBasicMaterial({
      color: 0xe8fdff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.shieldRing = new THREE.Mesh(new THREE.RingGeometry(1.18, 1.3, 96), this.shieldMaterial);
    this.shieldRing.rotation.x = -Math.PI * 0.5;
    this.shieldRing.position.y = 0.08;
    this.shieldRing.visible = false;

    this.redlineMaterial = createNeonLineMaterial(0xff2e66, 0);
    this.redlineStreaks = new THREE.LineSegments(createRedlineStreakGeometry(), this.redlineMaterial);
    this.redlineStreaks.visible = false;

    this.object.add(this.halo, this.shieldRing, this.fill, this.outline, this.innerGlyph, this.redlineStreaks);
    this.setSkin(skin);
  }

  setSkin(skin: PlayerSkin): void {
    this.currentSkin = skin;
    this.applySkinGeometry(skin.id);
    const accentColor = skinReadableAccentColor(skin);
    this.fillMaterial.uniforms.primary.value.setHex(skin.primaryColor);
    this.fillMaterial.uniforms.secondary.value.setHex(skin.secondaryColor);
    this.fillMaterial.uniforms.accent.value.setHex(accentColor);
    this.fillMaterial.uniforms.facetStrength.value = skin.shaderSettings?.facetStrength ?? 0.4;
    this.fillMaterial.uniforms.voidDistortion.value = skin.shaderSettings?.voidDistortion ?? 0;
    this.outlineMaterial.color.setHex(skin.secondaryColor);
    this.haloMaterial.color.setHex(skin.secondaryColor);
    this.accentMaterial.color.setHex(accentColor);
    this.redlineMaterial.color.setHex(skin.id === 'redlineMartyr' ? 0xff2e66 : accentColor);
    this.shieldMaterial.color.setHex(skin.id === 'glassSeraph' ? 0xe8fdff : accentColor);
  }

  update(player: Player, delta: number, time: number): void {
    this.object.position.set(
      player.position.x,
      1.06 + Math.sin(time * VISUAL_TUNING.player.hoverSpeed) * VISUAL_TUNING.player.hoverAmplitude,
      player.position.y
    );
    this.object.rotation.y = -player.facingAngle + Math.sin(time * 1.6) * 0.025;
    this.object.rotation.z = Math.sin(time * 1.2) * 0.03;

    this.shootPulse = Math.max(0, this.shootPulse - delta / VISUAL_TUNING.player.shootPulseDuration);
    this.dashPulse = Math.max(0, this.dashPulse - delta / VISUAL_TUNING.player.dashPulseDuration);
    this.bombPulse = Math.max(0, this.bombPulse - delta / VISUAL_TUNING.player.bombPulseDuration);
    this.damagePulse = Math.max(0, this.damagePulse - delta / VISUAL_TUNING.player.damagePulseDuration);
    this.deathPulse = Math.max(0, this.deathPulse - delta / VISUAL_TUNING.player.deathPulseDuration);

    const idle = (Math.sin(time * (this.currentSkin.shaderSettings?.pulseSpeed ?? 1.2)) + 1) * 0.5;
    const pulse = Math.max(this.shootPulse, this.dashPulse, this.bombPulse, this.damagePulse, this.deathPulse);
    this.fillMaterial.uniforms.time.value = time;
    this.fillMaterial.uniforms.pulse.value = pulse + idle * VISUAL_TUNING.player.idlePulse;
    this.fillMaterial.uniforms.alpha.value = this.currentSkin.id === 'glassSeraph' ? 0.62 : 0.84;
    this.haloMaterial.opacity = 0.12 + idle * 0.08 + pulse * 0.22;
    const scale = VISUAL_TUNING.player.haloScale + pulse * 0.42 + (player.dashTimer > 0 ? 0.36 : 0);
    this.halo.scale.setScalar(scale);
    this.innerGlyph.rotation.y = time * 0.65;

    const shieldAmount = Math.max(
      player.temporaryShieldHits > 0 ? 1 : 0,
      player.signatureChargeRatio * 0.68,
      player.signaturePulse
    );
    this.shieldRing.visible = shieldAmount > 0.04;
    this.shieldMaterial.opacity = shieldAmount > 0.04 ? 0.16 + shieldAmount * 0.5 : 0;
    this.shieldRing.scale.setScalar(1 + shieldAmount * 0.24 + Math.sin(time * 5.2) * 0.025);
    this.shieldRing.rotation.z = time * 0.9;

    const redlineAmount = player.redlineSurgeActive ? 0.52 + Math.sin(time * 17) * 0.1 : 0;
    this.redlineStreaks.visible = redlineAmount > 0.05;
    this.redlineMaterial.opacity = Math.max(0, redlineAmount);
    this.redlineStreaks.scale.setScalar(1 + Math.max(0, 1 - player.healthRatio) * 0.18);

    const flicker = player.invulnerableTimer > 0 && Math.sin(player.invulnerableTimer * 42) > 0.2;
    this.object.visible = player.active && !flicker;
  }

  onShoot(): void {
    this.shootPulse = 1;
  }

  onDash(): void {
    this.dashPulse = 1;
  }

  onBomb(): void {
    this.bombPulse = 1;
  }

  onDamage(): void {
    this.damagePulse = 1;
  }

  onDeath(): void {
    this.deathPulse = 1;
  }

  private applySkinGeometry(skinId: PlayerSkinId): void {
    if (this.geometrySkinId === skinId) return;
    const skinGeometry = getPlayerSkinGeometry(skinId);

    const previousFillGeometry = this.fill.geometry;
    this.fill.geometry = createFillGeometry(skinGeometry.body);
    previousFillGeometry.dispose();

    const previousOutlineGeometry = this.outline.geometry;
    this.outline.geometry = createOutlineGeometry(skinGeometry.body);
    previousOutlineGeometry.dispose();

    const previousHaloGeometry = this.halo.geometry;
    this.halo.geometry = createHaloGeometry(skinGeometry);
    previousHaloGeometry.dispose();

    const previousGlyphGeometry = this.innerGlyph.geometry;
    this.innerGlyph.geometry = createGlyphGeometry(skinGeometry.glyph);
    previousGlyphGeometry.dispose();

    this.geometrySkinId = skinId;
  }
}

type BodyPoint = readonly [x: number, z: number];
type GlyphSegment = readonly [x1: number, z1: number, x2: number, z2: number];

interface PlayerSkinGeometryDefinition {
  body: readonly BodyPoint[];
  glyph: readonly GlyphSegment[];
  haloInner: number;
  haloOuter: number;
}

const PLAYER_SKIN_GEOMETRY: Record<PlayerSkinId, PlayerSkinGeometryDefinition> = {
  vectorSaint: {
    body: [[1.38, 0], [-0.76, 0.94], [-0.42, 0], [-0.76, -0.94]],
    glyph: [[0.92, 0, -0.2, 0.48], [-0.2, 0.48, -0.2, -0.48], [-0.2, -0.48, 0.92, 0], [-0.56, 0.72, -0.56, -0.72]],
    haloInner: 0.95,
    haloOuter: 1.05
  },
  solarWarden: {
    body: [[1.34, 0], [0.28, 0.72], [-0.68, 0.86], [-0.38, 0.28], [-0.92, 0], [-0.38, -0.28], [-0.68, -0.86], [0.28, -0.72]],
    glyph: [[0.82, 0, 0.06, 0.42], [0.06, 0.42, -0.5, 0], [-0.5, 0, 0.06, -0.42], [0.06, -0.42, 0.82, 0], [-0.1, 0.64, -0.1, -0.64]],
    haloInner: 1,
    haloOuter: 1.14
  },
  voidChoir: {
    body: [[1.24, 0.02], [0.36, 0.66], [-0.96, 0.76], [-0.54, 0.18], [-1.05, 0], [-0.54, -0.18], [-0.96, -0.76], [0.36, -0.66]],
    glyph: [[0.72, 0, -0.1, 0.34], [-0.1, 0.34, -0.64, 0.16], [-0.1, -0.34, -0.64, -0.16], [0.72, 0, -0.1, -0.34], [-0.52, 0.48, -0.52, -0.48]],
    haloInner: 0.84,
    haloOuter: 1.08
  },
  glassSeraph: {
    body: [[1.46, 0], [0.32, 0.38], [-0.18, 0.98], [-0.92, 0], [-0.18, -0.98], [0.32, -0.38]],
    glyph: [[1, 0, 0.04, 0.3], [1, 0, 0.04, -0.3], [0.04, 0.3, -0.58, 0], [0.04, -0.3, -0.58, 0], [-0.18, 0.74, -0.18, -0.74]],
    haloInner: 0.9,
    haloOuter: 1.02
  },
  redlineMartyr: {
    body: [[1.48, 0], [0.52, 0.54], [-0.22, 0.48], [-0.86, 0.22], [-0.42, 0], [-0.86, -0.22], [-0.22, -0.48], [0.52, -0.54]],
    glyph: [[1.02, 0.18, -0.56, 0.18], [0.82, -0.18, -0.34, -0.18], [0.44, 0.46, -0.02, -0.46], [0.04, 0.46, -0.42, -0.46]],
    haloInner: 0.94,
    haloOuter: 1.08
  },
  prismGhost: {
    body: [[1.28, 0], [0.24, 0.9], [-0.98, 0.62], [-0.38, 0.16], [-0.94, 0], [-0.38, -0.16], [-0.98, -0.62], [0.24, -0.9]],
    glyph: [[0.86, 0, 0, 0.5], [0.86, 0, 0, -0.5], [0, 0.5, -0.62, 0.24], [0, -0.5, -0.62, -0.24], [-0.22, 0.62, -0.22, -0.62]],
    haloInner: 0.88,
    haloOuter: 1.12
  },
  ionChapel: {
    body: [[1.28, 0], [0.36, 0.42], [0.08, 0.9], [-0.82, 0.58], [-0.52, 0], [-0.82, -0.58], [0.08, -0.9], [0.36, -0.42]],
    glyph: [[0.88, 0, 0.04, 0.24], [0.04, 0.24, -0.56, 0.56], [0.04, -0.24, -0.56, -0.56], [0.88, 0, 0.04, -0.24], [-0.26, 0.7, -0.26, -0.7]],
    haloInner: 0.86,
    haloOuter: 1.06
  },
  neonRevenant: {
    body: [[1.36, 0.06], [0.54, 0.52], [0.06, 0.4], [-0.48, 0.96], [-0.88, 0.28], [-0.5, -0.06], [-0.92, -0.72], [-0.06, -0.48], [0.46, -0.74]],
    glyph: [[0.82, 0.08, 0.12, 0.36], [0.12, 0.36, -0.42, 0.72], [0.66, -0.16, -0.02, -0.4], [-0.02, -0.4, -0.54, -0.56], [-0.48, 0.3, -0.26, -0.3]],
    haloInner: 0.9,
    haloOuter: 1.16
  }
};

function getPlayerSkinGeometry(skinId: PlayerSkinId): PlayerSkinGeometryDefinition {
  return PLAYER_SKIN_GEOMETRY[skinId];
}

function createFillGeometry(points: readonly BodyPoint[]): THREE.ShapeGeometry {
  const shape = new THREE.Shape(points.map(([x, z]) => new THREE.Vector2(x, -z)));
  const geometry = new THREE.ShapeGeometry(shape);
  geometry.rotateX(-Math.PI * 0.5);
  return geometry;
}

function createOutlineGeometry(points: readonly BodyPoint[]): THREE.BufferGeometry {
  const outlinePoints = [...points, points[0]].map(([x, z]) => new THREE.Vector3(x, 0.18, z));
  return new THREE.BufferGeometry().setFromPoints(outlinePoints);
}

function createHaloGeometry(definition: PlayerSkinGeometryDefinition): THREE.RingGeometry {
  return new THREE.RingGeometry(definition.haloInner, definition.haloOuter, 96);
}

function createGlyphGeometry(segments: readonly GlyphSegment[]): THREE.BufferGeometry {
  const positions: number[] = [];
  for (const [x1, z1, x2, z2] of segments) {
    positions.push(x1, 0.24, z1, x2, 0.24, z2);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

function createRedlineStreakGeometry(): THREE.BufferGeometry {
  const positions = [
    -0.34, 0.24, 0.5, -2.7, 0.24, 0.76,
    -0.34, 0.24, -0.5, -2.7, 0.24, -0.76,
    -0.68, 0.2, 0.16, -3.18, 0.2, 0.2,
    -0.68, 0.2, -0.16, -3.18, 0.2, -0.2
  ];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}
