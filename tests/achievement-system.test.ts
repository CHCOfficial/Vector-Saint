import { describe, expect, it } from 'vitest';
import { ACHIEVEMENTS, AchievementSystem } from '../src/game/AchievementSystem';

describe('AchievementSystem', () => {
  it('defines a 1000G launch set and unlocks once', () => {
    const total = ACHIEVEMENTS.reduce((sum, item) => sum + item.gamerscore, 0);
    const system = new AchievementSystem();

    expect(total).toBe(1000);
    expect(system.totalGamerscore).toBe(1000);
    expect(system.tryUnlock('first-light')?.gamerscore).toBe(50);
    expect(system.tryUnlock('first-light')).toBeUndefined();
  });
});
