import type { PlayerSkinId } from './playerSkins';

export type SkinAbilityId =
  | 'vectorBaseline'
  | 'solarPiercer'
  | 'voidSlowField'
  | 'glassShield'
  | 'redlineSurge'
  | 'prismGhostBurst'
  | 'ionChain'
  | 'revenantSpark';

export interface SkinAbilityDefinition {
  id: SkinAbilityId;
  skinId: PlayerSkinId;
  name: string;
  summary: string;
}

export const SKIN_ABILITIES: Record<PlayerSkinId, SkinAbilityDefinition> = {
  vectorSaint: {
    id: 'vectorBaseline',
    skinId: 'vectorSaint',
    name: 'Pure Vector',
    summary: 'No gameplay modifier. Clean handling, clean reads, pure score chase.'
  },
  solarWarden: {
    id: 'solarPiercer',
    skinId: 'solarWarden',
    name: 'Solar Temper',
    summary: 'Kill streaks heat shots. Every twentieth hit primes one small piercing solar round.'
  },
  voidChoir: {
    id: 'voidSlowField',
    skinId: 'voidChoir',
    name: 'Null Wake',
    summary: 'Dashing leaves a brief violet slow field that hinders small hostiles most.'
  },
  glassSeraph: {
    id: 'glassShield',
    skinId: 'glassSeraph',
    name: 'Crystal Parry',
    summary: 'Near misses charge a fragile crystal fragment that can absorb one hit.'
  },
  redlineMartyr: {
    id: 'redlineSurge',
    skinId: 'redlineMartyr',
    name: 'Danger Line',
    summary: 'Low health adds a controlled movement boost and sharper redline streaks.'
  },
  prismGhost: {
    id: 'prismGhostBurst',
    skinId: 'prismGhost',
    name: 'Perfect Ghost',
    summary: 'A close dodge releases a stylish ghost-shot fan, then enters a short cooldown.'
  },
  ionChapel: {
    id: 'ionChain',
    skinId: 'ionChapel',
    name: 'Chapel Arc',
    summary: 'At high multiplier, occasional hits arc lightly to one nearby hostile.'
  },
  neonRevenant: {
    id: 'revenantSpark',
    skinId: 'neonRevenant',
    name: 'Revenant Spark',
    summary: 'Weapon kills can loose a spectral spark that hunts a nearby target.'
  }
};

export const SKIN_ABILITY_TUNING = {
  solar: {
    hitInterval: 20,
    killStreakWindow: 2.6,
    heatPerKill: 0.08,
    maxHeat: 0.42,
    pierceCount: 4,
    pierceRadiusScale: 1.16,
    pierceSpeedScale: 0.94,
    pierceColor: 0xfff0a3
  },
  void: {
    fieldLife: 0.6,
    radius: 7.2,
    smallEnemyMultiplier: 0.48,
    standardEnemyMultiplier: 0.68,
    specialEnemyMultiplier: 0.84,
    forgivingRadiusScale: 1.12,
    color: 0x9d4dff
  },
  glass: {
    nearMissRadius: 3.2,
    chargePerNearMiss: 0.26,
    chargeDecayPerSecond: 0.025,
    repeatCooldown: 0.8,
    maxShieldHits: 1,
    color: 0xe8fdff
  },
  redline: {
    healthThreshold: 0.5,
    maxBoost: 0.18,
    criticalHealthRatio: 0.25
  },
  prism: {
    nearMissRadius: 2.85,
    cooldown: 3.4,
    burstCount: 5,
    burstSpread: 0.82,
    damage: 1,
    speed: 34,
    life: 0.58,
    radius: 0.42,
    color: 0xff7cf7
  },
  ion: {
    multiplierThreshold: 8,
    chance: 0.18,
    range: 6.6,
    damage: 1,
    cooldown: 0.22,
    color: 0x5cffdd
  },
  revenant: {
    chance: 0.18,
    cooldown: 0.48,
    searchRange: 16,
    damage: 1,
    speed: 38,
    life: 0.62,
    radius: 0.4,
    color: 0x0aff9d
  }
} as const;

export function getSkinAbility(skinId: PlayerSkinId): SkinAbilityDefinition {
  return SKIN_ABILITIES[skinId];
}
