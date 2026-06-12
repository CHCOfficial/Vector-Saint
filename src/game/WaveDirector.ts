import { ARENA_TUNING, WAVE_TUNING, type DifficultyAssist } from '../data/tuning';
import { ENEMY_TYPES, type EnemyTypeId } from '../data/enemyTypes';
import { WAVE_DEFINITIONS, type WaveDefinition } from '../data/waveDefinitions';
import type { Vec2 } from '../utils/math';
import { Random } from '../utils/random';
import type { EntityManager } from './EntityManager';

export class WaveDirector {
  elapsed = 0;
  wave = 1;
  difficulty = 0;
  private spawnTimer = 0.35;

  reset(): void {
    this.elapsed = 0;
    this.wave = 1;
    this.difficulty = 0;
    this.spawnTimer = 0.35;
  }

  update(
    dt: number,
    manager: EntityManager,
    random: Random,
    assist: DifficultyAssist,
    playerPosition: Vec2
  ): void {
    this.elapsed += dt;
    this.wave = 1 + Math.floor(this.elapsed / WAVE_TUNING.waveDuration);
    this.difficulty = this.elapsed * WAVE_TUNING.difficultyRamp + this.wave * 0.8;
    this.spawnTimer -= dt;

    if (manager.activeEnemyCount >= WAVE_TUNING.maxEnemies) return;

    if (this.spawnTimer <= 0) {
      const definition = this.getCurrentDefinition();
      const groupSize = definition.groupSize + Math.floor(this.difficulty / 6);
      const burst = random.chance(definition.burstChance) ? random.int(2, 4) : 1;
      const cappedGroup = Math.min(groupSize * burst, WAVE_TUNING.maxEnemies - manager.activeEnemyCount);

      for (let i = 0; i < cappedGroup; i += 1) {
        const type = this.pickEnemyType(definition, random);
        const spawn = this.randomEdgePosition(random, playerPosition);
        manager.spawnEnemy(type, spawn.x, spawn.y, this.difficulty, random);
      }

      const assistScale = assist === 'forgiving' ? WAVE_TUNING.forgivingSpawnScale : 1;
      this.spawnTimer =
        Math.max(
          WAVE_TUNING.minSpawnInterval,
          WAVE_TUNING.baseSpawnInterval / (1 + this.difficulty * 0.115)
        ) * assistScale;
    }
  }

  private getCurrentDefinition(): WaveDefinition {
    let current = WAVE_DEFINITIONS[0];
    for (const definition of WAVE_DEFINITIONS) {
      if (definition.wave <= this.wave) {
        current = definition;
      }
    }
    return current;
  }

  private pickEnemyType(definition: WaveDefinition, random: Random): EnemyTypeId {
    const unlocked = definition.types.filter((type) => ENEMY_TYPES[type].unlockWave <= this.wave);
    const total = unlocked.reduce((sum, type) => sum + ENEMY_TYPES[type].spawnWeight, 0);
    let roll = random.range(0, total);

    for (const type of unlocked) {
      roll -= ENEMY_TYPES[type].spawnWeight;
      if (roll <= 0) return type;
    }

    return unlocked[0] ?? 'chaser';
  }

  private randomEdgePosition(random: Random, center: Vec2): { x: number; y: number } {
    const halfWidth = ARENA_TUNING.width * 0.5 + ARENA_TUNING.spawnMargin;
    const halfHeight = ARENA_TUNING.height * 0.5 + ARENA_TUNING.spawnMargin;
    const edge = random.int(0, 3);

    if (edge === 0) return { x: center.x + random.range(-halfWidth, halfWidth), y: center.y - halfHeight };
    if (edge === 1) return { x: center.x + halfWidth, y: center.y + random.range(-halfHeight, halfHeight) };
    if (edge === 2) return { x: center.x + random.range(-halfWidth, halfWidth), y: center.y + halfHeight };
    return { x: center.x - halfWidth, y: center.y + random.range(-halfHeight, halfHeight) };
  }
}
