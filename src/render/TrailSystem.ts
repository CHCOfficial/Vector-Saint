import * as THREE from 'three';
import { skinReadableAccentColor, type PlayerSkin } from '../data/playerSkins';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { Player } from '../game/Player';
import { distanceSq, type Vec2 } from '../utils/math';
import { createNeonLineMaterial } from './Materials';

export class TrailSystem {
  readonly object = new THREE.Group();
  private readonly positions = new Float32Array(VISUAL_TUNING.trail.length * 3);
  private readonly points: Vec2[] = Array.from({ length: VISUAL_TUNING.trail.length }, () => ({ x: 0, y: 0 }));
  private readonly line: THREE.Line;
  private readonly material: THREE.LineBasicMaterial;
  private readonly afterimages: THREE.Mesh[] = [];
  private readonly afterimageMaterial: THREE.MeshBasicMaterial;
  private initialized = false;
  private skin: PlayerSkin;

  constructor(skin: PlayerSkin) {
    this.skin = skin;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.material = createNeonLineMaterial(skin.secondaryColor, VISUAL_TUNING.trail.baseOpacity);
    this.line = new THREE.Line(geometry, this.material);
    this.line.frustumCulled = false;
    this.object.add(this.line);

    this.afterimageMaterial = new THREE.MeshBasicMaterial({
      color: skin.secondaryColor,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    const ghostGeometry = new THREE.RingGeometry(0.86, 0.94, 4);
    for (let i = 0; i < VISUAL_TUNING.trail.afterimageCount; i += 1) {
      const ghost = new THREE.Mesh(ghostGeometry, this.afterimageMaterial.clone());
      ghost.rotation.x = -Math.PI * 0.5;
      ghost.visible = false;
      this.afterimages.push(ghost);
      this.object.add(ghost);
    }

    this.setSkin(skin);
  }

  setSkin(skin: PlayerSkin): void {
    this.skin = skin;
    const accentColor = skinReadableAccentColor(skin);
    this.material.color.setHex(skin.secondaryColor);
    this.afterimageMaterial.color.setHex(accentColor);
    for (const image of this.afterimages) {
      (image.material as THREE.MeshBasicMaterial).color.setHex(skin.secondaryColor);
    }
  }

  update(player: Player, delta: number, time: number): void {
    if (!player.active) {
      this.line.visible = false;
      for (const image of this.afterimages) image.visible = false;
      return;
    }

    if (!this.initialized) {
      for (const point of this.points) {
        point.x = player.position.x;
        point.y = player.position.y;
      }
      this.initialized = true;
    }

    const head = this.points[0];
    if (
      distanceSq(head, player.position) >
      VISUAL_TUNING.trail.pointSpacing * VISUAL_TUNING.trail.pointSpacing
    ) {
      for (let i = this.points.length - 1; i > 0; i -= 1) {
        this.points[i].x = this.points[i - 1].x;
        this.points[i].y = this.points[i - 1].y;
      }
      head.x = player.position.x;
      head.y = player.position.y;
    }

    for (let i = 0; i < this.points.length; i += 1) {
      const point = this.points[i];
      const index = i * 3;
      const lift = 0.78 + Math.sin(time * 6 + i * 0.7) * 0.025;
      this.positions[index] = point.x;
      this.positions[index + 1] = lift;
      this.positions[index + 2] = point.y;
    }

    const speed = Math.hypot(player.velocity.x, player.velocity.y);
    const dash = player.dashTimer > 0 ? 1 : 0;
    const intensity = THREE.MathUtils.clamp(speed / 28, 0, 1);
    this.material.opacity = THREE.MathUtils.lerp(
      VISUAL_TUNING.trail.baseOpacity,
      VISUAL_TUNING.trail.dashOpacity,
      Math.max(intensity * 0.65, dash)
    );
    this.line.visible = true;
    (this.line.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;

    for (let i = 0; i < this.afterimages.length; i += 1) {
      const sourceIndex = Math.min(this.points.length - 1, 2 + i * 3);
      const point = this.points[sourceIndex];
      const image = this.afterimages[i];
      image.visible = intensity > 0.18 || dash > 0;
      image.position.set(point.x, 0.72, point.y);
      image.rotation.z = -player.facingAngle + i * 0.15;
      const material = image.material as THREE.MeshBasicMaterial;
      material.opacity = (0.16 - i * 0.018) * Math.max(intensity, dash);
      image.scale.setScalar(1 + i * 0.08 + dash * 0.24 + delta * 0);
    }
  }
}
