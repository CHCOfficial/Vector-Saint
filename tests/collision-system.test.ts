import { describe, expect, it } from 'vitest';
import { DEFAULT_SETTINGS } from '../src/data/tuning';
import { WEAPONS } from '../src/data/weapons';
import { CollisionSystem } from '../src/game/CollisionSystem';
import { EntityManager } from '../src/game/EntityManager';
import type { GameEvent } from '../src/game/GameEvents';
import { Player } from '../src/game/Player';
import { ScoreSystem } from '../src/game/ScoreSystem';
import { Random } from '../src/utils/random';

describe('CollisionSystem', () => {
  it('destroys enemies when bullets overlap and emits score events', () => {
    const manager = new EntityManager();
    const player = new Player();
    const score = new ScoreSystem();
    const collision = new CollisionSystem();
    const random = new Random(7);
    const events: GameEvent[] = [];

    player.reset('normal');
    const enemy = manager.spawnEnemy('swarm', 2, 0, 0, random);
    manager.spawnBullet(0.65, 0, 1, 0);

    expect(enemy).toBeDefined();
    collision.update(manager, player, score, (event) => events.push(event), random, DEFAULT_SETTINGS);

    expect(enemy!.active).toBe(false);
    expect(score.score).toBeGreaterThan(0);
    expect(events.some((event) => event.type === 'enemyKilled')).toBe(true);
  });

  it('bombs remove enemies inside the configured radius', () => {
    const manager = new EntityManager();
    const player = new Player();
    const score = new ScoreSystem();
    const collision = new CollisionSystem();
    const random = new Random(11);
    const events: GameEvent[] = [];

    player.reset('normal');
    manager.spawnEnemy('chaser', 2, 0, 0, random);
    manager.spawnEnemy('chaser', 50, 0, 0, random);

    const kills = collision.applyBomb(
      manager,
      player,
      score,
      (event) => events.push(event),
      random,
      DEFAULT_SETTINGS
    );

    expect(kills).toBe(1);
    expect(manager.activeEnemyCount).toBe(1);
    expect(events[0]?.type).toBe('bomb');
  });

  it('beam weapons damage enemies along their segment', () => {
    const manager = new EntityManager();
    const score = new ScoreSystem();
    const collision = new CollisionSystem();
    const random = new Random(17);
    const events: GameEvent[] = [];
    const enemy = manager.spawnEnemy('swarm', 8, 0.2, 0, random);

    const hits = collision.applyBeam(
      manager,
      0,
      0,
      1,
      0,
      WEAPONS.lanceBeam,
      score,
      (event) => events.push(event),
      random
    );

    expect(hits).toBe(1);
    expect(enemy?.active).toBe(false);
    expect(events.some((event) => event.type === 'beamFired')).toBe(true);
    expect(events.some((event) => event.type === 'enemyKilled')).toBe(true);
  });
});
