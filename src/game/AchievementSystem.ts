import type { SaveSystem } from './SaveSystem';

export interface Achievement {
  id: string;
  name: string;
  gamerscore: number;
  description: string;
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: 'first-light',
    name: 'First Light',
    gamerscore: 50,
    description: 'Destroy your first hostile vector.'
  },
  {
    id: 'clean-arc',
    name: 'Clean Arc',
    gamerscore: 75,
    description: 'Reach a 5x multiplier.'
  },
  {
    id: 'saint-of-splinters',
    name: 'Saint of Splinters',
    gamerscore: 100,
    description: 'Destroy a splitter.'
  },
  {
    id: 'wave-runner',
    name: 'Wave Runner',
    gamerscore: 125,
    description: 'Reach wave 5.'
  },
  {
    id: 'ten-thousand-sparks',
    name: 'Ten Thousand Sparks',
    gamerscore: 125,
    description: 'Score 10,000 points.'
  },
  {
    id: 'bomb-doctrine',
    name: 'Bomb Doctrine',
    gamerscore: 100,
    description: 'Clear 8 enemies with one bomb.'
  },
  {
    id: 'true-vector',
    name: 'True Vector',
    gamerscore: 150,
    description: 'Reach a 10x multiplier.'
  },
  {
    id: 'hundred-fold',
    name: 'Hundred Fold',
    gamerscore: 125,
    description: 'Destroy 100 enemies in one run.'
  },
  {
    id: 'signal-saint',
    name: 'Signal Saint',
    gamerscore: 150,
    description: 'Score 50,000 points.'
  }
] as const;

export class AchievementSystem {
  readonly unlocked: Set<string>;

  constructor(private readonly saveSystem?: SaveSystem) {
    this.unlocked = saveSystem?.loadAchievements() ?? new Set();
  }

  get totalGamerscore(): number {
    return ACHIEVEMENTS.reduce((sum, achievement) => sum + achievement.gamerscore, 0);
  }

  resetRuntime(): void {
    // Unlocks persist; this hook exists so future per-run achievement state has a clear home.
  }

  tryUnlock(id: string): Achievement | undefined {
    if (this.unlocked.has(id)) return undefined;
    const achievement = ACHIEVEMENTS.find((item) => item.id === id);
    if (!achievement) return undefined;

    this.unlocked.add(id);
    this.saveSystem?.saveAchievements(this.unlocked);
    return achievement;
  }
}
