import type { Vec2 } from '../utils/math';
import { setVec2, vec2 } from '../utils/math';

let nextEntityId = 1;

export type EntityKind = 'player' | 'enemy' | 'bullet' | 'pickup';

export abstract class Entity {
  readonly id = nextEntityId++;
  active = false;
  age = 0;
  radius = 1;
  health = 1;
  maxHealth = 1;
  color = 0xffffff;
  position: Vec2 = vec2();
  velocity: Vec2 = vec2();

  protected constructor(readonly kind: EntityKind) {}

  reset(): void {
    this.active = false;
    this.age = 0;
    this.radius = 1;
    this.health = 1;
    this.maxHealth = 1;
    this.color = 0xffffff;
    setVec2(this.position, 0, 0);
    setVec2(this.velocity, 0, 0);
  }

  damage(amount: number): boolean {
    this.health -= amount;
    if (this.health <= 0) {
      this.active = false;
      return true;
    }
    return false;
  }
}
