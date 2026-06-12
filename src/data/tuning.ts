import type { PlayerSkinId } from './playerSkins';
import { DEFAULT_SKIN_ID } from './playerSkins';
import type { BackgroundId } from './backgrounds';
import { DEFAULT_BACKGROUND_ID } from './backgrounds';
import type {
  BackgroundIntensity,
  BloomRadiusPreset,
  BloomStrengthPreset,
  ChromaticAberrationLevel,
  ParticleDensity
} from './visualTuning';

export type BloomLevel = 'off' | 'low' | 'medium' | 'high';
export type ShakeLevel = 'off' | 'low' | 'medium' | 'high';
export type PaletteId = 'default' | 'high-contrast' | 'colourblind';
export type UiScale = 'small' | 'medium' | 'large';
export type DifficultyAssist = 'normal' | 'forgiving';
export type AntiAliasingMode = 'off' | 'fxaa' | 'smaa' | 'msaa-4x' | 'msaa-4x-smaa';

export interface GameSettings {
  bloom: BloomLevel;
  bloomStrength: BloomStrengthPreset;
  bloomRadius: BloomRadiusPreset;
  antiAliasing: AntiAliasingMode;
  shake: ShakeLevel;
  flashReduction: boolean;
  chromaticAberration: ChromaticAberrationLevel;
  backgroundIntensity: BackgroundIntensity;
  particleDensity: ParticleDensity;
  invertedControls: boolean;
  palette: PaletteId;
  uiScale: UiScale;
  difficultyAssist: DifficultyAssist;
  selectedSkin: PlayerSkinId;
  selectedBackground: BackgroundId;
}

export const DEFAULT_SETTINGS: GameSettings = {
  bloom: 'high',
  bloomStrength: 'balanced',
  bloomRadius: 'medium',
  antiAliasing: 'msaa-4x-smaa',
  shake: 'medium',
  flashReduction: false,
  chromaticAberration: 'low',
  backgroundIntensity: 'medium',
  particleDensity: 'high',
  invertedControls: true,
  palette: 'default',
  uiScale: 'small',
  difficultyAssist: 'normal',
  selectedSkin: DEFAULT_SKIN_ID,
  selectedBackground: DEFAULT_BACKGROUND_ID
};

export const ARENA_TUNING = {
  width: 76,
  height: 46,
  boundaryPadding: 2.4,
  spawnMargin: 4.5
} as const;

export const LOOP_TUNING = {
  fixedDelta: 1 / 60,
  maxFrameDelta: 0.1,
  maxFixedSteps: 5
} as const;

export const PLAYER_TUNING = {
  radius: 1.05,
  maxHealth: 4,
  forgivingMaxHealth: 6,
  speed: 25,
  acceleration: 130,
  friction: 14,
  fireInterval: 0.075,
  bulletSpeed: 48,
  bulletLife: 1.25,
  bulletRadius: 0.36,
  bulletDamage: 1,
  dashSpeed: 52,
  dashDuration: 0.13,
  dashCharges: 3,
  dashCooldown: 0.8,
  dashInvulnerable: 0.26,
  bombCooldown: 4.6,
  bombRadius: 15,
  forgivingBombRadius: 19,
  hitInvulnerable: 1.15,
  forgivingHitInvulnerable: 1.55
} as const;

export const PROJECTILE_TUNING = {
  magnetMinForwardDot: -0.08,
  magnetScoreForwardBias: 0.45,
  magnetTargetSmoothing: 7.5,
  magnetTurnScale: 0.62
} as const;

export const SCORE_TUNING = {
  multiplierMin: 1,
  multiplierMax: 25,
  multiplierPerKill: 0.16,
  multiplierDecayDelay: 2.0,
  multiplierDecayRate: 0.52,
  forgivingDecayRate: 0.34,
  bombMultiplierPenalty: 0.85,
  pickupScore: 125
} as const;

export const WAVE_TUNING = {
  waveDuration: 32,
  baseSpawnInterval: 2.15,
  minSpawnInterval: 0.42,
  difficultyRamp: 0.072,
  maxEnemies: 140,
  forgivingSpawnScale: 1.18,
  despawnDistance: 130
} as const;

export const POOL_TUNING = {
  bullets: 360,
  enemies: 180,
  pickups: 64
} as const;

export const RENDER_TUNING = {
  camera: {
    height: 51,
    depth: 48,
    fov: 48,
    followSpeed: 13,
    lookAhead: 0.025,
    snapDistance: 42
  },
  bloom: {
    low: { strength: 0.42, radius: 0.28, threshold: 0.34 },
    medium: { strength: 0.82, radius: 0.38, threshold: 0.22 },
    high: { strength: 1.28, radius: 0.52, threshold: 0.14 }
  },
  shake: {
    off: 0,
    low: 0.24,
    medium: 0.48,
    high: 0.86
  },
  particles: {
    maxParticles: 3600,
    enemyBurst: 34,
    bombBurst: 82,
    trailPerSecond: 70
  },
  grid: {
    spacing: 2,
    rippleLife: 1.25,
    bombRippleLife: 1.9,
    maxRipples: 10
  }
} as const;

export const INPUT_TUNING = {
  stickDeadzone: 0.18,
  uiRepeatDelay: 0.18,
  mouseAimMinimumDistance: 8
} as const;

export const SECRET_PILOT_TUNING = {
  dangerRadius: 14,
  emergencyRadius: 6.8,
  preferredRange: 17,
  fleeWeight: 1.9,
  strafeWeight: 0.78,
  chaseWeight: 0.18,
  pickupWeight: 0.28,
  idleDriftWeight: 0.18,
  shotgunRange: 9.8,
  beamRange: 40,
  beamClusterHits: 3,
  bombEnemyThreshold: 7,
  bombRadiusScale: 0.9,
  orbitBeamAvoidance: 3.8,
  spareChargeDashRadius: 10.5,
  weaponCycleDelay: 0.2,
  retryDelay: 1.1
} as const;
