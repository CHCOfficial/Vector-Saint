import type { EnemyTypeId } from './enemyTypes';

export interface WaveDefinition {
  wave: number;
  groupSize: number;
  types: EnemyTypeId[];
  burstChance: number;
}

export const WAVE_DEFINITIONS: readonly WaveDefinition[] = [
  {
    wave: 1,
    groupSize: 3,
    types: ['chaser'],
    burstChance: 0.05
  },
  {
    wave: 2,
    groupSize: 4,
    types: ['chaser', 'swarm', 'dasher'],
    burstChance: 0.12
  },
  {
    wave: 3,
    groupSize: 5,
    types: ['chaser', 'swarm', 'dasher', 'splitter'],
    burstChance: 0.18
  },
  {
    wave: 4,
    groupSize: 6,
    types: ['chaser', 'swarm', 'dasher', 'splitter', 'orbitMine'],
    burstChance: 0.22
  },
  {
    wave: 7,
    groupSize: 8,
    types: ['swarm', 'chaser', 'dasher', 'splitter', 'orbitMine'],
    burstChance: 0.3
  }
];
