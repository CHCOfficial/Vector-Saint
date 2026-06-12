import { POOL_TUNING, PLAYER_TUNING, PROJECTILE_TUNING, WAVE_TUNING } from '../data/tuning';
import type { EnemyTypeId } from '../data/enemyTypes';
import { ObjectPool } from '../utils/pool';
import { Random } from '../utils/random';
import { fromAngle } from '../utils/math';
import { Bullet, type BulletSpawnOptions } from './Bullet';
import { Enemy } from './Enemy';
import { Pickup } from './Pickup';
import type { Player } from './Player';

export class EntityManager {
  readonly bullets = new ObjectPool(() => new Bullet(), POOL_TUNING.bullets);
  readonly enemies = new ObjectPool(() => new Enemy(), POOL_TUNING.enemies);
  readonly pickups = new ObjectPool(() => new Pickup(), POOL_TUNING.pickups);

  reset(): void {
    this.bullets.deactivateAll();
    this.enemies.deactivateAll();
    this.pickups.deactivateAll();
  }

  update(dt: number, player: Player): void {
    this.bullets.forEachActive((bullet) => {
      this.applyBulletMagnetism(bullet, dt);
      bullet.update(dt);
    });
    const despawnDistanceSq = WAVE_TUNING.despawnDistance * WAVE_TUNING.despawnDistance;
    this.enemies.forEachActive((enemy) => {
      enemy.update(dt, player.position);
      const dx = enemy.position.x - player.position.x;
      const dy = enemy.position.y - player.position.y;
      if (dx * dx + dy * dy > despawnDistanceSq) {
        enemy.active = false;
      }
    });
    this.pickups.forEachActive((pickup) => pickup.update(dt));
  }

  spawnBullet(
    x: number,
    y: number,
    aimX: number,
    aimY: number,
    options?: Partial<BulletSpawnOptions>
  ): Bullet | undefined {
    return this.bullets.acquire((bullet) => {
      const muzzleOffset = 1.35;
      const speed = options?.speed ?? PLAYER_TUNING.bulletSpeed;
      const vx = aimX * speed;
      const vy = aimY * speed;
      bullet.spawn(x + aimX * muzzleOffset, y + aimY * muzzleOffset, vx, vy, options);
    });
  }

  private applyBulletMagnetism(bullet: Bullet, dt: number): void {
    if (bullet.magnetRadius <= 0 || bullet.magnetStrength <= 0) return;

    const speed = Math.hypot(bullet.velocity.x, bullet.velocity.y);
    if (speed <= 0.001) return;

    const forwardX = bullet.velocity.x / speed;
    const forwardY = bullet.velocity.y / speed;
    const radiusSq = bullet.magnetRadius * bullet.magnetRadius;
    let bestDx = 0;
    let bestDy = 0;
    let bestScore = Number.POSITIVE_INFINITY;

    this.enemies.forEachActive((enemy) => {
      if (!enemy.active) return;

      const dx = enemy.position.x - bullet.position.x;
      const dy = enemy.position.y - bullet.position.y;
      const distSq = dx * dx + dy * dy;
      if (distSq <= 0.001 || distSq > radiusSq) return;

      const dist = Math.sqrt(distSq);
      const forwardDot = (dx * forwardX + dy * forwardY) / dist;
      if (forwardDot < PROJECTILE_TUNING.magnetMinForwardDot) return;

      const score = distSq * (1 - Math.max(0, forwardDot) * PROJECTILE_TUNING.magnetScoreForwardBias);
      if (score >= bestScore) return;

      bestScore = score;
      bestDx = dx;
      bestDy = dy;
    });

    if (!Number.isFinite(bestScore)) return;

    const targetDist = Math.hypot(bestDx, bestDy);
    if (targetDist <= 0.001) return;

    const desiredHeadingX = bestDx / targetDist;
    const desiredHeadingY = bestDy / targetDist;
    if (Math.hypot(bullet.magnetHeadingX, bullet.magnetHeadingY) <= 0.001) {
      bullet.magnetHeadingX = forwardX;
      bullet.magnetHeadingY = forwardY;
    }

    const headingBlend = 1 - Math.exp(-dt * PROJECTILE_TUNING.magnetTargetSmoothing);
    bullet.magnetHeadingX += (desiredHeadingX - bullet.magnetHeadingX) * headingBlend;
    bullet.magnetHeadingY += (desiredHeadingY - bullet.magnetHeadingY) * headingBlend;
    const headingLength = Math.hypot(bullet.magnetHeadingX, bullet.magnetHeadingY);
    if (headingLength <= 0.001) return;
    bullet.magnetHeadingX /= headingLength;
    bullet.magnetHeadingY /= headingLength;

    const targetX = bullet.magnetHeadingX * speed;
    const targetY = bullet.magnetHeadingY * speed;
    const turn = 1 - Math.exp(-bullet.magnetStrength * PROJECTILE_TUNING.magnetTurnScale * dt);
    const nextX = bullet.velocity.x + (targetX - bullet.velocity.x) * turn;
    const nextY = bullet.velocity.y + (targetY - bullet.velocity.y) * turn;
    const nextLength = Math.hypot(nextX, nextY);
    if (nextLength <= 0.001) return;

    bullet.velocity.x = (nextX / nextLength) * speed;
    bullet.velocity.y = (nextY / nextLength) * speed;
  }

  spawnEnemy(
    type: EnemyTypeId,
    x: number,
    y: number,
    difficulty: number,
    random: Random
  ): Enemy | undefined {
    return this.enemies.acquire((enemy) => enemy.spawn(type, x, y, difficulty, random));
  }

  spawnPickup(x: number, y: number, random: Random): Pickup | undefined {
    return this.pickups.acquire((pickup) => {
      pickup.spawn(x, y);
      fromAngle(pickup.velocity, random.range(-Math.PI, Math.PI), random.range(1.6, 4.2));
    });
  }

  get activeEnemyCount(): number {
    return this.enemies.countActive();
  }

  get activeBulletCount(): number {
    return this.bullets.countActive();
  }

  get activePickupCount(): number {
    return this.pickups.countActive();
  }
}
