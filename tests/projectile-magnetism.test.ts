import { describe, expect, it } from 'vitest';
import { WEAPONS } from '../src/data/weapons';
import { EntityManager } from '../src/game/EntityManager';
import { Player } from '../src/game/Player';
import { Random } from '../src/utils/random';

describe('projectile magnetism', () => {
  it('gently bends projectile weapons toward nearby enemies', () => {
    const manager = new EntityManager();
    const player = new Player();
    const random = new Random(23);
    const projectile = WEAPONS.vectorBolt.projectile;

    player.reset('normal');
    manager.spawnEnemy('swarm', 8, 2.2, 0, random);
    const bullet = manager.spawnBullet(0, 0, 1, 0, {
      speed: projectile?.speed,
      life: projectile?.life,
      damage: projectile?.damage,
      radius: projectile?.radius,
      magnetRadius: projectile?.magnetRadius,
      magnetStrength: projectile?.magnetStrength,
      color: WEAPONS.vectorBolt.color,
      weaponId: 'vectorBolt'
    });

    expect(bullet).toBeDefined();
    expect(bullet!.velocity.y).toBe(0);

    manager.update(1 / 60, player);

    expect(bullet!.velocity.x).toBeGreaterThan(0);
    expect(bullet!.velocity.y).toBeGreaterThan(0);
    expect(Math.hypot(bullet!.velocity.x, bullet!.velocity.y)).toBeCloseTo(projectile!.speed, 1);
  });
});
