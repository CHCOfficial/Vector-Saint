import { SCORE_TUNING, type DifficultyAssist } from '../data/tuning';
import type { Enemy } from './Enemy';
import type { SaveSystem } from './SaveSystem';

export class ScoreSystem {
  score = 0;
  highScore = 0;
  multiplier: number = SCORE_TUNING.multiplierMin;
  kills = 0;
  weaponKillStreak = 0;
  timeSinceKill = 999;
  highestMultiplier: number = 1;
  multiplierDecayMultiplier = 1;

  constructor(private readonly saveSystem?: SaveSystem) {
    this.highScore = saveSystem?.loadHighScore() ?? 0;
  }

  reset(): void {
    this.score = 0;
    this.multiplier = SCORE_TUNING.multiplierMin;
    this.kills = 0;
    this.weaponKillStreak = 0;
    this.timeSinceKill = 999;
    this.highestMultiplier = 1;
    this.multiplierDecayMultiplier = 1;
    this.highScore = this.saveSystem?.loadHighScore() ?? this.highScore;
  }

  update(dt: number, assist: DifficultyAssist): void {
    this.timeSinceKill += dt;
    if (this.timeSinceKill <= SCORE_TUNING.multiplierDecayDelay) return;

    this.weaponKillStreak = 0;

    const decay =
      assist === 'forgiving' ? SCORE_TUNING.forgivingDecayRate : SCORE_TUNING.multiplierDecayRate;
    this.multiplier = Math.max(
      SCORE_TUNING.multiplierMin,
      this.multiplier - decay * this.multiplierDecayMultiplier * dt
    );
  }

  awardEnemy(enemy: Enemy, source: 'weapon' | 'bomb' = 'weapon', bonusMultiplier = 1): number {
    const awarded = Math.round(enemy.definition.score * this.multiplier * Math.max(1, bonusMultiplier));
    this.score += awarded;
    this.kills += 1;
    this.weaponKillStreak = source === 'weapon' ? this.weaponKillStreak + 1 : 0;
    this.timeSinceKill = 0;
    this.multiplier = Math.min(
      SCORE_TUNING.multiplierMax,
      this.multiplier + SCORE_TUNING.multiplierPerKill
    );
    this.highestMultiplier = Math.max(this.highestMultiplier, this.multiplier);
    this.persistHighScore();
    return awarded;
  }

  awardPickup(value: number): void {
    this.score += Math.round(value * Math.max(1, this.multiplier * 0.5));
    this.persistHighScore();
  }

  applyBombPenalty(): void {
    this.multiplier = Math.max(
      SCORE_TUNING.multiplierMin,
      this.multiplier * SCORE_TUNING.bombMultiplierPenalty
    );
  }

  private persistHighScore(): void {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.saveSystem?.saveHighScore(this.highScore);
    }
  }
}
