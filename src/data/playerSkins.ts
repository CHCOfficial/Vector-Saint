export type PlayerSkinId =
  | 'vectorSaint'
  | 'solarWarden'
  | 'voidChoir'
  | 'glassSeraph'
  | 'redlineMartyr'
  | 'prismGhost'
  | 'ionChapel'
  | 'neonRevenant';

export type TrailStyle =
  | 'sacred-ribbon'
  | 'ember'
  | 'void-rings'
  | 'crystal-thread'
  | 'redline'
  | 'prism-afterimage'
  | 'ion-arcs'
  | 'spectral-flame';

export type ProjectileStyle =
  | 'hardlight'
  | 'ember-core'
  | 'void-ring'
  | 'glass-lance'
  | 'redline-shard'
  | 'prism-split'
  | 'ion-bolt'
  | 'revenant-spark';

export interface PlayerSkin {
  id: PlayerSkinId;
  signatureAbilityId:
    | 'vectorBaseline'
    | 'solarPiercer'
    | 'voidSlowField'
    | 'glassShield'
    | 'redlineSurge'
    | 'prismGhostBurst'
    | 'ionChain'
    | 'revenantSpark';
  displayName: string;
  description: string;
  primaryColor: number;
  secondaryColor: number;
  accentColor: number;
  emissiveIntensity: number;
  trailStyle: TrailStyle;
  projectileStyle: ProjectileStyle;
  engineGlowStyle: string;
  shootPulseStyle: string;
  idleAnimationStyle: string;
  specialEffectStyle: string;
  unlockState: 'unlocked';
  shaderSettings?: {
    pulseSpeed: number;
    facetStrength: number;
    chromaShift: number;
    voidDistortion: number;
    afterimageStrength: number;
  };
}

export const PLAYER_SKINS: readonly PlayerSkin[] = [
  {
    id: 'vectorSaint',
    signatureAbilityId: 'vectorBaseline',
    displayName: 'Vector Saint',
    description: 'White and cyan hard-light glyph with balanced sacred geometry bloom.',
    primaryColor: 0xf7fbff,
    secondaryColor: 0x39f5ff,
    accentColor: 0x9ffcff,
    emissiveIntensity: 1.05,
    trailStyle: 'sacred-ribbon',
    projectileStyle: 'hardlight',
    engineGlowStyle: 'balanced halo',
    shootPulseStyle: 'thin cyan mandala',
    idleAnimationStyle: 'calm breathing hover',
    specialEffectStyle: 'clean radial consecration',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.25,
      facetStrength: 0.34,
      chromaShift: 0.02,
      voidDistortion: 0,
      afterimageStrength: 0.12
    }
  },
  {
    id: 'solarWarden',
    signatureAbilityId: 'solarPiercer',
    displayName: 'Solar Warden',
    description: 'Molten gold hard-light shell with ember shots and a solar firing corona.',
    primaryColor: 0xfff0a3,
    secondaryColor: 0xff8f2f,
    accentColor: 0xffd35a,
    emissiveIntensity: 1.18,
    trailStyle: 'ember',
    projectileStyle: 'ember-core',
    engineGlowStyle: 'solar corona',
    shootPulseStyle: 'gold flare',
    idleAnimationStyle: 'slow heat shimmer',
    specialEffectStyle: 'ember sanctum burst',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.65,
      facetStrength: 0.22,
      chromaShift: 0.01,
      voidDistortion: 0,
      afterimageStrength: 0.08
    }
  },
  {
    id: 'voidChoir',
    signatureAbilityId: 'voidSlowField',
    displayName: 'Void Choir',
    description: 'Deep violet and magenta silhouette with subtle distortion and purple shot rings.',
    primaryColor: 0x161026,
    secondaryColor: 0x9d4dff,
    accentColor: 0xff3df2,
    emissiveIntensity: 1.28,
    trailStyle: 'void-rings',
    projectileStyle: 'void-ring',
    engineGlowStyle: 'negative halo',
    shootPulseStyle: 'violet pressure ring',
    idleAnimationStyle: 'low void thrum',
    specialEffectStyle: 'soft gravity bruise',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 0.9,
      facetStrength: 0.48,
      chromaShift: 0.06,
      voidDistortion: 0.22,
      afterimageStrength: 0.18
    }
  },
  {
    id: 'glassSeraph',
    signatureAbilityId: 'glassShield',
    displayName: 'Glass Seraph',
    description: 'Translucent pale blue crystal facets with elegant threadlike trails.',
    primaryColor: 0xe8fdff,
    secondaryColor: 0x8bdcff,
    accentColor: 0xffffff,
    emissiveIntensity: 0.92,
    trailStyle: 'crystal-thread',
    projectileStyle: 'glass-lance',
    engineGlowStyle: 'prismatic refraction',
    shootPulseStyle: 'thin glass ripple',
    idleAnimationStyle: 'faceted shimmer',
    specialEffectStyle: 'crystal hymn ring',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.05,
      facetStrength: 0.66,
      chromaShift: 0.035,
      voidDistortion: 0,
      afterimageStrength: 0.14
    }
  },
  {
    id: 'redlineMartyr',
    signatureAbilityId: 'redlineSurge',
    displayName: 'Redline Martyr',
    description: 'Red, white, and black racing-stripe energy with sharp angular shot pulses.',
    primaryColor: 0xffffff,
    secondaryColor: 0xff284f,
    accentColor: 0x111117,
    emissiveIntensity: 1.12,
    trailStyle: 'redline',
    projectileStyle: 'redline-shard',
    engineGlowStyle: 'overdriven stripe',
    shootPulseStyle: 'angular red snap',
    idleAnimationStyle: 'tense engine tremor',
    specialEffectStyle: 'martyr line fracture',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.9,
      facetStrength: 0.28,
      chromaShift: 0.015,
      voidDistortion: 0,
      afterimageStrength: 0.1
    }
  },
  {
    id: 'prismGhost',
    signatureAbilityId: 'prismGhostBurst',
    displayName: 'Prism Ghost',
    description: 'Translucent afterimages with shifting rainbow accents and chromatic edges.',
    primaryColor: 0xcffcff,
    secondaryColor: 0xff7cf7,
    accentColor: 0x87ff7a,
    emissiveIntensity: 1.08,
    trailStyle: 'prism-afterimage',
    projectileStyle: 'prism-split',
    engineGlowStyle: 'rainbow ghosting',
    shootPulseStyle: 'split-spectrum wink',
    idleAnimationStyle: 'chromatic phase drift',
    specialEffectStyle: 'triadic prism bloom',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.35,
      facetStrength: 0.5,
      chromaShift: 0.11,
      voidDistortion: 0.03,
      afterimageStrength: 0.26
    }
  },
  {
    id: 'ionChapel',
    signatureAbilityId: 'ionChain',
    displayName: 'Ion Chapel',
    description: 'Electric blue, silver, and cold teal with firing arcs and stronger grid response.',
    primaryColor: 0xd8f6ff,
    secondaryColor: 0x3b7dff,
    accentColor: 0x5cffdd,
    emissiveIntensity: 1.22,
    trailStyle: 'ion-arcs',
    projectileStyle: 'ion-bolt',
    engineGlowStyle: 'micro lightning',
    shootPulseStyle: 'ion chapel arc',
    idleAnimationStyle: 'electric breathing',
    specialEffectStyle: 'chapel grid resonance',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.75,
      facetStrength: 0.42,
      chromaShift: 0.035,
      voidDistortion: 0,
      afterimageStrength: 0.16
    }
  },
  {
    id: 'neonRevenant',
    signatureAbilityId: 'revenantSpark',
    displayName: 'Neon Revenant',
    description: 'Acid green and ghostly cyan with glitch-flame trail and spectral kill sparks.',
    primaryColor: 0xbaff57,
    secondaryColor: 0x0aff9d,
    accentColor: 0x7cfaff,
    emissiveIntensity: 1.24,
    trailStyle: 'spectral-flame',
    projectileStyle: 'revenant-spark',
    engineGlowStyle: 'glitch flame',
    shootPulseStyle: 'spectral snap',
    idleAnimationStyle: 'restless ghost flicker',
    specialEffectStyle: 'revenant spark inversion',
    unlockState: 'unlocked',
    shaderSettings: {
      pulseSpeed: 1.55,
      facetStrength: 0.32,
      chromaShift: 0.055,
      voidDistortion: 0.07,
      afterimageStrength: 0.2
    }
  }
];

export const DEFAULT_SKIN_ID: PlayerSkinId = 'vectorSaint';

export function getPlayerSkin(id: string | undefined): PlayerSkin {
  return PLAYER_SKINS.find((skin) => skin.id === id) ?? PLAYER_SKINS[0];
}

export function isPlayerSkinId(id: unknown): id is PlayerSkinId {
  return typeof id === 'string' && PLAYER_SKINS.some((skin) => skin.id === id);
}

export function skinColorToCss(color: number): string {
  return `#${color.toString(16).padStart(6, '0')}`;
}

export function skinReadableAccentColor(skin: PlayerSkin): number {
  return colorLuminance(skin.accentColor) < 0.28 ? skin.secondaryColor : skin.accentColor;
}

export function skinReadableAccentToCss(skin: PlayerSkin): string {
  return skinColorToCss(skinReadableAccentColor(skin));
}

function colorLuminance(color: number): number {
  const r = ((color >> 16) & 255) / 255;
  const g = ((color >> 8) & 255) / 255;
  const b = (color & 255) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
