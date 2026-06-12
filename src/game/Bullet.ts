import { PLAYER_TUNING } from '../data/tuning';
import type { PlayerSkinId } from '../data/playerSkins';
import type { WeaponId } from '../data/weapons';
import { addScaled, setVec2 } from '../utils/math';
import { Entity } from './Entity';

export type BulletSignature =
  | 'none'
  | 'solarPierce'
  | 'ghostBurst'
  | 'ionArc'
  | 'revenantSpark';

export interface BulletSpawnOptions {
  speed: number;
  life: number;
  damage: number;
  radius: number;
  color: number;
  weaponId: WeaponId;
  magnetRadius: number;
  magnetStrength: number;
  pierceRemaining: number;
  signature: BulletSignature;
  sourceSkinId: PlayerSkinId;
}

export class Bullet extends Entity {
  ttl = 0;
  damageAmount: number = PLAYER_TUNING.bulletDamage;
  owner = 'player';
  weaponId: WeaponId = 'vectorBolt';
  magnetRadius = 0;
  magnetStrength = 0;
  magnetHeadingX = 0;
  magnetHeadingY = 0;
  pierceRemaining = 0;
  signature: BulletSignature = 'none';
  sourceSkinId: PlayerSkinId = 'vectorSaint';
  readonly hitEnemyIds = new Set<number>();

  constructor() {
    super('bullet');
  }

  override reset(): void {
    super.reset();
    this.ttl = 0;
    this.damageAmount = PLAYER_TUNING.bulletDamage;
    this.owner = 'player';
    this.radius = PLAYER_TUNING.bulletRadius;
    this.color = 0x39f5ff;
    this.weaponId = 'vectorBolt';
    this.magnetRadius = 0;
    this.magnetStrength = 0;
    this.magnetHeadingX = 0;
    this.magnetHeadingY = 0;
    this.pierceRemaining = 0;
    this.signature = 'none';
    this.sourceSkinId = 'vectorSaint';
    this.hitEnemyIds.clear();
  }

  spawn(x: number, y: number, vx: number, vy: number, options?: Partial<BulletSpawnOptions>): void {
    this.active = true;
    setVec2(this.position, x, y);
    setVec2(this.velocity, vx, vy);
    this.ttl = options?.life ?? PLAYER_TUNING.bulletLife;
    this.damageAmount = options?.damage ?? PLAYER_TUNING.bulletDamage;
    this.radius = options?.radius ?? PLAYER_TUNING.bulletRadius;
    this.color = options?.color ?? 0x39f5ff;
    this.weaponId = options?.weaponId ?? 'vectorBolt';
    this.magnetRadius = options?.magnetRadius ?? 0;
    this.magnetStrength = options?.magnetStrength ?? 0;
    this.magnetHeadingX = 0;
    this.magnetHeadingY = 0;
    this.pierceRemaining = options?.pierceRemaining ?? 0;
    this.signature = options?.signature ?? 'none';
    this.sourceSkinId = options?.sourceSkinId ?? 'vectorSaint';
    this.hitEnemyIds.clear();
  }

  update(dt: number): void {
    if (!this.active) return;

    this.age += dt;
    this.ttl -= dt;
    addScaled(this.position, this.velocity, dt);

    if (this.ttl <= 0) {
      this.active = false;
    }
  }
}
