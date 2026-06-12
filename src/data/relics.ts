export type RelicId =
  | 'martyrCircuit'
  | 'glassHeart'
  | 'redlineEngine'
  | 'solarCore'
  | 'prismEcho';

export type RelicCategory = 'safe' | 'risky' | 'score';

export interface RelicDefinition {
  id: RelicId;
  category: RelicCategory;
  name: string;
  effect: string;
  downside?: string;
  color: number;
  maxStacks: number;
}

export const RELICS: Record<RelicId, RelicDefinition> = {
  martyrCircuit: {
    id: 'martyrCircuit',
    category: 'risky',
    name: 'Martyr Circuit',
    effect: '+20% weapon damage.',
    downside: 'Dash recharge takes longer.',
    color: 0xff4c7d,
    maxStacks: 1
  },
  glassHeart: {
    id: 'glassHeart',
    category: 'safe',
    name: 'Glass Heart',
    effect: 'Gain one temporary shield hit.',
    downside: 'Multiplier decay is faster.',
    color: 0xe8fdff,
    maxStacks: 1
  },
  redlineEngine: {
    id: 'redlineEngine',
    category: 'risky',
    name: 'Redline Engine',
    effect: 'Move faster.',
    downside: 'Acceleration and braking are looser.',
    color: 0xff284f,
    maxStacks: 1
  },
  solarCore: {
    id: 'solarCore',
    category: 'score',
    name: 'Solar Core',
    effect: 'Bombs leave scoring zones. Zone kills grant bonus score and Overdrive charge.',
    color: 0xffd35a,
    maxStacks: 3
  },
  prismEcho: {
    id: 'prismEcho',
    category: 'safe',
    name: 'Prism Echo',
    effect: 'Dash releases low-damage afterimage shots.',
    downside: 'Afterimage volley has its own cooldown.',
    color: 0xff7cf7,
    maxStacks: 1
  }
};

export const RELIC_ORDER: readonly RelicId[] = [
  'martyrCircuit',
  'glassHeart',
  'redlineEngine',
  'solarCore',
  'prismEcho'
];

export const RELIC_TUNING = {
  draftIntervalWaves: 3,
  safePauseInvulnerability: 1.25,
  martyrCircuit: {
    damageMultiplier: 1.2,
    dashCooldownMultiplier: 1.28
  },
  glassHeart: {
    shieldHits: 1,
    multiplierDecayMultiplier: 1.32
  },
  redlineEngine: {
    speedMultiplier: 1.12,
    accelerationMultiplier: 0.86,
    frictionMultiplier: 0.78
  },
  solarCore: {
    zoneRadius: 11.5,
    zoneLife: 6.5,
    scoreMultiplier: 1.45,
    radiusPerExtraStack: 0.08,
    scorePerExtraStack: 0.15,
    overdrivePerKill: 0.075,
    color: 0xffd35a
  },
  prismEcho: {
    cooldown: 0.92,
    shotCount: 5,
    spreadRadians: 0.72,
    damage: 1,
    speed: 31,
    life: 0.62,
    radius: 0.36,
    magnetRadius: 4.8,
    magnetStrength: 1.7,
    color: 0xff9dfb
  }
} as const;

export function getRelic(id: RelicId): RelicDefinition {
  return RELICS[id];
}
