import * as THREE from 'three';
import { RENDER_TUNING, type GameSettings } from '../data/tuning';
import { skinReadableAccentColor, type PlayerSkin } from '../data/playerSkins';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { GameEvent } from '../game/GameEvents';
import { CameraController } from './CameraController';
import { GridRenderer } from './GridRenderer';
import { ensureVisibleNeonColor } from './Materials';
import { ParticleSystem } from './ParticleSystem';

interface Shockwave {
  mesh: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  active: boolean;
  age: number;
  life: number;
  maxRadius: number;
}

interface BeamFlash {
  group: THREE.Group;
  glow: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  core: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  spine: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  muzzle: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  impact: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  active: boolean;
  age: number;
  life: number;
  width: number;
}

interface RelicZoneVisual {
  mesh: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  active: boolean;
  age: number;
  life: number;
  radius: number;
}

export class Effects {
  private readonly shockwaves: Shockwave[] = [];
  private readonly beams: BeamFlash[] = [];
  private readonly relicZones: RelicZoneVisual[] = [];
  private readonly beamPosition = new THREE.Vector3();
  private readonly beamQuaternion = new THREE.Quaternion();
  private readonly beamEuler = new THREE.Euler(-Math.PI * 0.5, 0, 0);
  private flashOpacity = 0;

  constructor(
    private readonly scene: THREE.Scene,
    private readonly grid: GridRenderer,
    private readonly particles: ParticleSystem,
    private readonly camera: CameraController,
    private readonly flashLayer: HTMLElement
  ) {
    for (let i = 0; i < 56; i += 1) {
      const geometry = new THREE.RingGeometry(0.92, 1, 96);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI * 0.5;
      mesh.visible = false;
      this.scene.add(mesh);
      this.shockwaves.push({ mesh, active: false, age: 0, life: 1, maxRadius: 1 });
    }

    for (let i = 0; i < 12; i += 1) {
      const group = new THREE.Group();
      group.visible = false;

      const glow = new THREE.Mesh(createRailGeometry(), createBeamMaterial(0.34));
      const core = new THREE.Mesh(createRailGeometry(), createBeamMaterial(0.92));
      const spine = new THREE.Mesh(createRailGeometry(), createBeamMaterial(0.78));
      const muzzle = new THREE.Mesh(new THREE.RingGeometry(0.52, 0.72, 56), createBeamMaterial(0.64));
      const impact = new THREE.Mesh(new THREE.RingGeometry(0.44, 0.64, 56), createBeamMaterial(0.72));

      glow.renderOrder = 24;
      core.renderOrder = 26;
      spine.renderOrder = 27;
      muzzle.renderOrder = 28;
      impact.renderOrder = 28;
      group.add(glow, core, spine, muzzle, impact);
      this.scene.add(group);
      this.beams.push({
        group,
        glow,
        core,
        spine,
        muzzle,
        impact,
        active: false,
        age: 0,
        life: 0.12,
        width: 1
      });
    }

    for (let i = 0; i < 6; i += 1) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffd35a,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 112), material);
      mesh.rotation.x = -Math.PI * 0.5;
      mesh.position.y = 0.92;
      mesh.visible = false;
      this.scene.add(mesh);
      this.relicZones.push({ mesh, active: false, age: 0, life: 1, radius: 1 });
    }
  }

  emit(event: GameEvent, settings: GameSettings, skin: PlayerSkin): void {
    switch (event.type) {
      case 'shoot':
        this.particles.spawnBurst(
          event.x + event.aimX * 1.35,
          event.y + event.aimY * 1.35,
          event.color,
          Math.min(18, 4 + event.pelletCount * 2),
          event.pelletCount > 1 ? 0.52 : 0.34
        );
        this.spawnShockwave(
          event.x,
          event.y,
          event.color,
          event.weaponId === 'scatterCrown'
            ? VISUAL_TUNING.explosions.shootRingRadius * 1.24
            : VISUAL_TUNING.explosions.shootRingRadius,
          0.16,
          event.weaponId === 'scatterCrown' ? 0.46 : 0.34
        );
        this.camera.addShake(VISUAL_TUNING.shake.shootImpulse);
        break;
      case 'beamFired':
        this.spawnBeam(event);
        this.particles.spawnBurst(
          event.x + event.aimX * 1.45,
          event.y + event.aimY * 1.45,
          event.color,
          10,
          0.34
        );
        this.spawnShockwave(event.x, event.y, event.color, 2.2, 0.22, 0.42);
        this.camera.addShake(VISUAL_TUNING.shake.shootImpulse * 0.9);
        break;
      case 'enemyKilled':
        if (event.source === 'bomb') {
          this.particles.spawnBurst(
            event.x,
            event.y,
            skin.id === 'neonRevenant' ? skin.secondaryColor : event.color,
            Math.round(9 * VISUAL_TUNING.particleDensity[settings.particleDensity]),
            0.72
          );
          break;
        }
        this.particles.spawnBurst(
          event.x,
          event.y,
          skin.id === 'neonRevenant' ? skin.secondaryColor : event.color,
          Math.round(
            (skin.id === 'neonRevenant'
              ? VISUAL_TUNING.explosions.spectralBurstParticles
              : VISUAL_TUNING.explosions.enemyBurstParticles) *
              VISUAL_TUNING.particleDensity[settings.particleDensity]
          ),
          1
        );
        this.spawnShockwave(event.x, event.y, event.color, 4.4, 0.44, 0.72);
        this.grid.addRipple(event.x, event.y, 0.42);
        this.camera.addShake(VISUAL_TUNING.shake.killImpulse);
        this.flash(settings, 0.05);
        break;
      case 'bomb':
        this.particles.spawnBurst(
          event.x,
          event.y,
          skin.primaryColor,
          Math.round(RENDER_TUNING.particles.bombBurst * VISUAL_TUNING.particleDensity[settings.particleDensity]),
          1.18
        );
        this.spawnShockwave(
          event.x,
          event.y,
          skinReadableAccentColor(skin),
          event.radius * VISUAL_TUNING.explosions.bombRingScale,
          0.82,
          0.86
        );
        this.spawnShockwave(event.x, event.y, skin.secondaryColor, event.radius * 0.82, 0.64, 0.46);
        this.grid.addRipple(
          event.x,
          event.y,
          VISUAL_TUNING.arena.bombRippleStrength,
          RENDER_TUNING.grid.bombRippleLife
        );
        this.camera.addShake(VISUAL_TUNING.shake.bombImpulse);
        this.flash(settings, 0.24);
        break;
      case 'playerHit':
        this.particles.spawnBurst(event.x, event.y, 0xff4c7d, Math.round(84 * VISUAL_TUNING.particleDensity[settings.particleDensity]), 1.25);
        this.spawnShockwave(event.x, event.y, 0xff4c7d, 7, 0.5);
        this.grid.addRipple(event.x, event.y, 0.9);
        this.camera.addShake(VISUAL_TUNING.shake.damageImpulse);
        this.flash(settings, 0.28);
        break;
      case 'dash':
        this.particles.spawnBurst(event.x, event.y, skin.secondaryColor, 30, 0.8);
        this.spawnShockwave(event.x, event.y, skin.secondaryColor, VISUAL_TUNING.explosions.dashRingRadius, 0.25);
        this.grid.addRipple(event.x, event.y, VISUAL_TUNING.arena.dashRippleStrength);
        this.camera.addShake(VISUAL_TUNING.shake.dashImpulse);
        break;
      case 'pickupCollected':
        this.particles.spawnBurst(event.x, event.y, event.color, 22, 0.7);
        this.camera.addShake(0.06);
        break;
      case 'achievementUnlocked':
        this.flash(settings, 0.08);
        break;
      case 'skinAbility':
        this.spawnSkinAbility(event, settings, skin);
        break;
      case 'relicZone':
        this.spawnRelicZone(event.x, event.y, event.radius, event.life, event.color);
        this.spawnShockwave(event.x, event.y, event.color, event.radius, 0.72, 0.42);
        this.grid.addRipple(event.x, event.y, 0.6, 1.1);
        break;
      case 'relicBonus':
        this.particles.spawnBurst(
          event.x,
          event.y,
          event.color,
          Math.round(14 * VISUAL_TUNING.particleDensity[settings.particleDensity]),
          0.52
        );
        this.spawnShockwave(event.x, event.y, event.color, 2.2 + event.overdriveCharge * 1.6, 0.22, 0.34);
        break;
    }
  }

  update(dt: number): void {
    this.flashOpacity = Math.max(0, this.flashOpacity - dt * 3.6);
    this.flashLayer.style.opacity = this.flashOpacity.toFixed(3);

    for (const shockwave of this.shockwaves) {
      if (!shockwave.active) continue;
      shockwave.age += dt;
      const t = Math.min(1, shockwave.age / shockwave.life);
      const scale = THREE.MathUtils.lerp(0.01, shockwave.maxRadius, t);
      shockwave.mesh.scale.setScalar(scale);
      shockwave.mesh.material.opacity = (1 - t) * 0.72;

      if (t >= 1) {
        shockwave.active = false;
        shockwave.mesh.visible = false;
        shockwave.mesh.material.opacity = 0;
      }
    }

    for (const beam of this.beams) {
      if (!beam.active) continue;
      beam.age += dt;
      const t = Math.min(1, beam.age / beam.life);
      const fade = Math.pow(1 - t, 1.35);
      const flare = 1 + Math.sin(t * Math.PI) * 0.38;
      beam.glow.material.opacity = fade * 0.34;
      beam.core.material.opacity = fade * 0.92;
      beam.spine.material.opacity = fade * 0.72;
      beam.muzzle.material.opacity = fade * 0.58;
      beam.impact.material.opacity = fade * 0.68;
      beam.muzzle.scale.setScalar(beam.width * (1.55 + t * 1.2) * flare);
      beam.impact.scale.setScalar(beam.width * (1.35 + t * 1.55) * flare);

      if (t >= 1) {
        beam.active = false;
        beam.group.visible = false;
        beam.glow.material.opacity = 0;
        beam.core.material.opacity = 0;
        beam.spine.material.opacity = 0;
        beam.muzzle.material.opacity = 0;
        beam.impact.material.opacity = 0;
      }
    }

    for (const zone of this.relicZones) {
      if (!zone.active) continue;
      zone.age += dt;
      const t = Math.min(1, zone.age / zone.life);
      const pulse = 1 + Math.sin(zone.age * 8) * 0.025;
      const fade = Math.pow(1 - t, 0.42);
      zone.mesh.scale.setScalar(zone.radius * pulse);
      zone.mesh.material.opacity = fade * 0.28;

      if (t >= 1) {
        zone.active = false;
        zone.mesh.visible = false;
        zone.mesh.material.opacity = 0;
      }
    }
  }

  private spawnRelicZone(x: number, y: number, radius: number, life: number, color: number): void {
    const zone = this.relicZones.find((item) => !item.active);
    if (!zone) return;

    zone.active = true;
    zone.age = 0;
    zone.life = life;
    zone.radius = radius;
    zone.mesh.position.set(x, 0.92, y);
    zone.mesh.scale.setScalar(radius);
    zone.mesh.material.color.setHex(ensureVisibleNeonColor(color));
    zone.mesh.material.opacity = 0.28;
    zone.mesh.visible = true;
  }

  private spawnBeam(event: Extract<GameEvent, { type: 'beamFired' }>): void {
    const beam = this.beams.find((item) => !item.active);
    if (!beam) return;

    const angle = Math.atan2(event.aimY, event.aimX);
    const color = ensureVisibleNeonColor(event.color);
    this.beamPosition.set(
      event.x + event.aimX * event.range * 0.5,
      1.12,
      event.y + event.aimY * event.range * 0.5
    );
    this.beamEuler.set(-Math.PI * 0.5, 0, -angle);
    this.beamQuaternion.setFromEuler(this.beamEuler);

    beam.active = true;
    beam.age = 0;
    beam.life = event.visualLife;
    beam.width = event.width;
    beam.group.position.copy(this.beamPosition);
    beam.group.quaternion.copy(this.beamQuaternion);
    beam.glow.scale.set(event.range, event.width * 3.45, 1);
    beam.core.scale.set(event.range, event.width * 1.1, 1);
    beam.spine.scale.set(event.range * 1.04, event.width * 0.24, 1);
    beam.muzzle.position.set(-event.range * 0.5, 0, 0.01);
    beam.impact.position.set(event.range * 0.5, 0, 0.01);
    beam.muzzle.scale.setScalar(event.width * 1.55);
    beam.impact.scale.setScalar(event.width * 1.35);
    beam.glow.material.color.setHex(color);
    beam.core.material.color.setHex(0xffffff);
    beam.spine.material.color.setHex(color);
    beam.muzzle.material.color.setHex(color);
    beam.impact.material.color.setHex(color);
    beam.glow.material.opacity = 0.34;
    beam.core.material.opacity = 0.92;
    beam.spine.material.opacity = 0.72;
    beam.muzzle.material.opacity = 0.58;
    beam.impact.material.opacity = 0.68;
    beam.group.visible = true;
  }

  private spawnArc(
    x: number,
    y: number,
    x2: number,
    y2: number,
    color: number,
    width = 0.34,
    life = 0.16
  ): void {
    const beam = this.beams.find((item) => !item.active);
    if (!beam) return;

    const dx = x2 - x;
    const dy = y2 - y;
    const range = Math.hypot(dx, dy);
    if (range <= 0.01) return;

    const angle = Math.atan2(dy, dx);
    const visibleColor = ensureVisibleNeonColor(color);
    this.beamPosition.set(x + dx * 0.5, 1.2, y + dy * 0.5);
    this.beamEuler.set(-Math.PI * 0.5, 0, -angle);
    this.beamQuaternion.setFromEuler(this.beamEuler);

    beam.active = true;
    beam.age = 0;
    beam.life = life;
    beam.width = width;
    beam.group.position.copy(this.beamPosition);
    beam.group.quaternion.copy(this.beamQuaternion);
    beam.glow.scale.set(range, width * 2.25, 1);
    beam.core.scale.set(range, width * 0.68, 1);
    beam.spine.scale.set(range * 1.02, width * 0.18, 1);
    beam.muzzle.position.set(-range * 0.5, 0, 0.01);
    beam.impact.position.set(range * 0.5, 0, 0.01);
    beam.muzzle.scale.setScalar(width * 1.12);
    beam.impact.scale.setScalar(width * 1.18);
    beam.glow.material.color.setHex(visibleColor);
    beam.core.material.color.setHex(0xffffff);
    beam.spine.material.color.setHex(visibleColor);
    beam.muzzle.material.color.setHex(visibleColor);
    beam.impact.material.color.setHex(visibleColor);
    beam.glow.material.opacity = 0.2;
    beam.core.material.opacity = 0.78;
    beam.spine.material.opacity = 0.52;
    beam.muzzle.material.opacity = 0.36;
    beam.impact.material.opacity = 0.46;
    beam.group.visible = true;
  }

  private spawnSkinAbility(
    event: Extract<GameEvent, { type: 'skinAbility' }>,
    settings: GameSettings,
    skin: PlayerSkin
  ): void {
    const density = VISUAL_TUNING.particleDensity[settings.particleDensity];

    switch (event.ability) {
      case 'voidSlowField':
        this.spawnShockwave(event.x, event.y, event.color, event.radius ?? 7.2, 0.6, 0.34);
        this.spawnShockwave(event.x, event.y, skin.secondaryColor, (event.radius ?? 7.2) * 0.58, 0.42, 0.22);
        this.particles.spawnBurst(event.x, event.y, event.color, Math.round(24 * density), 0.9);
        this.grid.addRipple(event.x, event.y, 0.42, 0.76);
        break;
      case 'glassShieldReady':
        this.spawnShockwave(event.x, event.y, event.color, event.radius ?? 4, 0.38, 0.62);
        this.particles.spawnBurst(event.x, event.y, event.color, Math.round(26 * density), 0.54);
        this.flash(settings, 0.04);
        break;
      case 'glassShieldBreak':
        this.spawnShockwave(event.x, event.y, event.color, event.radius ?? 5, 0.36, 0.78);
        this.particles.spawnBurst(event.x, event.y, event.color, Math.round(42 * density), 0.88);
        this.camera.addShake(0.1);
        break;
      case 'prismGhostBurst':
        this.spawnShockwave(event.x, event.y, event.color, event.radius ?? 5, 0.3, 0.54);
        this.particles.spawnBurst(event.x, event.y, event.color, Math.round(20 * density), 0.7);
        break;
      case 'ionChain':
        if (event.x2 !== undefined && event.y2 !== undefined) {
          this.spawnArc(event.x, event.y, event.x2, event.y2, event.color, 0.3, 0.14);
          this.particles.spawnBurst(event.x2, event.y2, event.color, Math.round(8 * density), 0.38);
        }
        break;
      case 'revenantSpark':
        if (event.x2 !== undefined && event.y2 !== undefined) {
          this.spawnArc(event.x, event.y, event.x2, event.y2, event.color, 0.28, 0.18);
        }
        this.particles.spawnBurst(event.x, event.y, event.color, Math.round(12 * density), 0.48);
        break;
      case 'solarPierce':
        this.spawnShockwave(event.x, event.y, event.color, 2.4, 0.18, 0.36);
        break;
    }
  }

  private spawnShockwave(
    x: number,
    y: number,
    color: number,
    maxRadius: number,
    life: number,
    opacity = 0.75
  ): void {
    const shockwave = this.shockwaves.find((item) => !item.active);
    if (!shockwave) return;

    shockwave.active = true;
    shockwave.age = 0;
    shockwave.life = life;
    shockwave.maxRadius = maxRadius;
    shockwave.mesh.position.set(x, 0.95, y);
    shockwave.mesh.scale.setScalar(0.01);
    shockwave.mesh.material.color.setHex(ensureVisibleNeonColor(color));
    shockwave.mesh.material.opacity = opacity;
    shockwave.mesh.visible = true;
  }

  private flash(settings: GameSettings, amount: number): void {
    if (settings.flashReduction) return;
    this.flashOpacity = Math.max(this.flashOpacity, amount);
  }
}

function createRailGeometry(): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(
      [
        -0.5, 0, 0,
        -0.44, 0.5, 0,
        0.38, 0.5, 0,
        0.5, 0, 0,
        0.38, -0.5, 0,
        -0.44, -0.5, 0
      ],
      3
    )
  );
  geometry.setIndex([0, 1, 2, 0, 2, 5, 5, 2, 4, 4, 2, 3]);
  geometry.computeVertexNormals();
  return geometry;
}

function createBeamMaterial(opacity: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide
  });
}
