import * as THREE from 'three';
import { RENDER_TUNING, type GameSettings } from '../data/tuning';
import type { Player } from '../game/Player';

export class CameraController {
  readonly camera: THREE.PerspectiveCamera;
  private readonly basePosition = new THREE.Vector3(
    0,
    RENDER_TUNING.camera.height,
    RENDER_TUNING.camera.depth
  );
  private trauma = 0;
  private time = 0;
  private followX = 0;
  private followZ = 0;
  private readonly screenVector = new THREE.Vector3();

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(RENDER_TUNING.camera.fov, aspect, 0.1, 240);
    this.camera.position.copy(this.basePosition);
    this.camera.lookAt(0, 0, 0);
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  addShake(amount: number): void {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  update(dt: number, settings: GameSettings, player?: Player): void {
    this.time += dt;
    if (player) {
      const dx = player.position.x - this.followX;
      const dz = player.position.y - this.followZ;
      if (dx * dx + dz * dz > RENDER_TUNING.camera.snapDistance * RENDER_TUNING.camera.snapDistance) {
        this.followX = player.position.x;
        this.followZ = player.position.y;
      }
      const followAmount = 1 - Math.exp(-dt * RENDER_TUNING.camera.followSpeed);
      this.followX += (player.position.x - this.followX) * followAmount;
      this.followZ += (player.position.y - this.followZ) * followAmount;
    }
    const shakeScale = RENDER_TUNING.shake[settings.shake];
    const shake = this.trauma * this.trauma * shakeScale;
    const offsetX = Math.sin(this.time * 77.13) * shake;
    const offsetY = Math.cos(this.time * 93.41) * shake * 0.45;
    const offsetZ = Math.sin(this.time * 61.7) * shake;

    this.camera.position.set(
      this.basePosition.x + this.followX + offsetX,
      this.basePosition.y + offsetY,
      this.basePosition.z + this.followZ + offsetZ
    );
    this.camera.lookAt(
      this.followX + (player?.velocity.x ?? 0) * RENDER_TUNING.camera.lookAhead,
      0,
      this.followZ + (player?.velocity.y ?? 0) * RENDER_TUNING.camera.lookAhead
    );
    this.trauma = Math.max(0, this.trauma - dt * 1.85);
  }

  worldToScreen(
    simX: number,
    simY: number,
    width: number,
    height: number
  ): { x: number; y: number } {
    this.screenVector.set(simX, 0.8, simY);
    this.screenVector.project(this.camera);
    return {
      x: (this.screenVector.x * 0.5 + 0.5) * width,
      y: (-this.screenVector.y * 0.5 + 0.5) * height
    };
  }
}
