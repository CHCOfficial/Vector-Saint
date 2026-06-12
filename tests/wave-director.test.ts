import { describe, expect, it } from 'vitest';
import { ARENA_TUNING } from '../src/data/tuning';
import { EntityManager } from '../src/game/EntityManager';
import { WaveDirector } from '../src/game/WaveDirector';
import { Random } from '../src/utils/random';
import { vec2 } from '../src/utils/math';

describe('WaveDirector', () => {
  it('spawns enemies and advances wave pressure over time', () => {
    const director = new WaveDirector();
    const manager = new EntityManager();
    const random = new Random(42);
    const playerPosition = vec2(120, -80);

    for (let i = 0; i < 180; i += 1) {
      director.update(1 / 60, manager, random, 'normal', playerPosition);
    }

    expect(manager.activeEnemyCount).toBeGreaterThan(0);
    expect(director.difficulty).toBeGreaterThan(0);
    manager.enemies.forEachActive((enemy) => {
      expect(Math.abs(enemy.position.x - playerPosition.x)).toBeLessThanOrEqual(
        ARENA_TUNING.width * 0.5 + ARENA_TUNING.spawnMargin
      );
      expect(Math.abs(enemy.position.y - playerPosition.y)).toBeLessThanOrEqual(
        ARENA_TUNING.height * 0.5 + ARENA_TUNING.spawnMargin
      );
    });

    director.update(65, manager, random, 'normal', playerPosition);
    expect(director.wave).toBeGreaterThanOrEqual(3);
  });
});
