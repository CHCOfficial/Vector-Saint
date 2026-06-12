import { SCORE_TUNING } from '../data/tuning';
import { addScaled, setVec2 } from '../utils/math';
import { Entity } from './Entity';

export type PickupType = 'scoreCell';

export class Pickup extends Entity {
  type: PickupType = 'scoreCell';
  value = SCORE_TUNING.pickupScore;
  ttl = 9;

  constructor() {
    super('pickup');
  }

  override reset(): void {
    super.reset();
    this.type = 'scoreCell';
    this.value = SCORE_TUNING.pickupScore;
    this.ttl = 9;
    this.radius = 0.7;
    this.color = 0xffc857;
  }

  spawn(x: number, y: number, value = SCORE_TUNING.pickupScore): void {
    this.active = true;
    this.value = value;
    setVec2(this.position, x, y);
    setVec2(this.velocity, 0, 0);
  }

  update(dt: number): void {
    if (!this.active) return;
    this.age += dt;
    this.ttl -= dt;
    this.velocity.x *= Math.max(0, 1 - dt * 2.5);
    this.velocity.y *= Math.max(0, 1 - dt * 2.5);
    addScaled(this.position, this.velocity, dt);
    if (this.ttl <= 0) {
      this.active = false;
    }
  }
}
