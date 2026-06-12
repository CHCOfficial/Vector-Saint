import { describe, expect, it } from 'vitest';
import { Random } from '../src/utils/random';
import { EntityManager } from '../src/game/EntityManager';
import { ScoreSystem } from '../src/game/ScoreSystem';

describe('ScoreSystem', () => {
  it('awards enemy points, grows multiplier, decays, and applies bomb penalty', () => {
    const manager = new EntityManager();
    const enemy = manager.spawnEnemy('chaser', 0, 0, 0, new Random(1));
    const score = new ScoreSystem();

    expect(enemy).toBeDefined();
    const awarded = score.awardEnemy(enemy!);

    expect(awarded).toBe(100);
    expect(score.score).toBe(100);
    expect(score.multiplier).toBeGreaterThan(1);

    score.update(5, 'normal');
    expect(score.multiplier).toBeLessThan(1.16);
    expect(score.weaponKillStreak).toBe(0);

    score.awardEnemy(enemy!);
    const beforePenalty = score.multiplier;
    score.applyBombPenalty();
    expect(score.multiplier).toBeLessThan(beforePenalty);
  });
});
