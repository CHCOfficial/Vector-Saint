export type EnemyTypeId = 'chaser' | 'dasher' | 'splitter' | 'orbitMine' | 'swarm';

export interface EnemyTypeDefinition {
  id: EnemyTypeId;
  label: string;
  radius: number;
  health: number;
  speed: number;
  score: number;
  color: number;
  sides: number;
  turnRate: number;
  spawnWeight: number;
  unlockWave: number;
  damage: number;
  splitOnDeath?: {
    type: EnemyTypeId;
    count: number;
  };
  dash?: {
    chargeTime: number;
    lungeTime: number;
    cooldown: number;
    speed: number;
  };
  beams?: {
    length: number;
    width: number;
    rotationSpeed: number;
  };
}

export const ENEMY_TYPES: Record<EnemyTypeId, EnemyTypeDefinition> = {
  chaser: {
    id: 'chaser',
    label: 'Chaser',
    radius: 1.15,
    health: 2,
    speed: 11.5,
    score: 100,
    color: 0xff3df2,
    sides: 4,
    turnRate: 7,
    spawnWeight: 10,
    unlockWave: 1,
    damage: 1
  },
  dasher: {
    id: 'dasher',
    label: 'Dasher',
    radius: 1.25,
    health: 3,
    speed: 7.5,
    score: 180,
    color: 0xffc857,
    sides: 3,
    turnRate: 4,
    spawnWeight: 4,
    unlockWave: 2,
    damage: 1,
    dash: {
      chargeTime: 0.55,
      lungeTime: 0.38,
      cooldown: 1.4,
      speed: 29
    }
  },
  splitter: {
    id: 'splitter',
    label: 'Splitter',
    radius: 1.75,
    health: 5,
    speed: 7.2,
    score: 320,
    color: 0x7dff63,
    sides: 6,
    turnRate: 5,
    spawnWeight: 2,
    unlockWave: 3,
    damage: 1,
    splitOnDeath: {
      type: 'swarm',
      count: 4
    }
  },
  orbitMine: {
    id: 'orbitMine',
    label: 'Orbit Mine',
    radius: 1.45,
    health: 4,
    speed: 4.2,
    score: 260,
    color: 0x39f5ff,
    sides: 12,
    turnRate: 2.2,
    spawnWeight: 2,
    unlockWave: 4,
    damage: 1,
    beams: {
      length: 8.5,
      width: 0.42,
      rotationSpeed: 2.1
    }
  },
  swarm: {
    id: 'swarm',
    label: 'Swarm',
    radius: 0.72,
    health: 1,
    speed: 17.5,
    score: 60,
    color: 0xff4c7d,
    sides: 3,
    turnRate: 12,
    spawnWeight: 8,
    unlockWave: 2,
    damage: 1
  }
};
