import {
  DEFAULT_SETTINGS,
  type AntiAliasingMode,
  type BloomLevel,
  type DifficultyAssist,
  type GameSettings,
  type PaletteId,
  type ShakeLevel,
  type UiScale
} from '../data/tuning';
import { isPlayerSkinId, type PlayerSkinId } from '../data/playerSkins';
import { isBackgroundId, type BackgroundId } from '../data/backgrounds';
import type {
  BackgroundIntensity,
  BloomRadiusPreset,
  BloomStrengthPreset,
  ChromaticAberrationLevel,
  ParticleDensity
} from '../data/visualTuning';
import {
  cloneControlBindings,
  DEFAULT_CONTROL_BINDINGS,
  resolveControlBindings,
  type ControlBindings
} from '../input/controlBindings';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface LeaderboardEntry {
  initials: string;
  score: number;
  wave: number;
  date: string;
}

export const LEADERBOARD_LIMIT = 10;
const SAVE_SCHEMA_VERSION = 2;
const SAVE_COOKIE_NAME = 'vectorSaintProfile';
const SAVE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365 * 5;
const SAVE_COOKIE_MAX_LENGTH = 3800;

const SAVE_KEYS = {
  profile: 'vector-saint.profile',
  settings: 'vector-saint.settings.v1',
  highScore: 'vector-saint.high-score.v1',
  achievements: 'vector-saint.achievements.v1',
  controls: 'vector-saint.controls.v1',
  leaderboard: 'vector-saint.leaderboard.v1',
  invertedDefaultMigration: 'vector-saint.inverted-controls-default.v2',
  defaultSettingsMigration: 'vector-saint.default-settings.v3'
} as const;

interface SaveProfile {
  schemaVersion: number;
  settings?: Partial<GameSettings>;
  highScore?: number;
  achievements?: string[];
  controls?: unknown;
  leaderboard?: unknown[];
  migrations?: {
    invertedDefault?: boolean;
    settingsDefaults20260611?: boolean;
  };
}

const bloomValues: readonly BloomLevel[] = ['off', 'low', 'medium', 'high'];
const bloomStrengthValues: readonly BloomStrengthPreset[] = ['soft', 'balanced', 'radiant'];
const bloomRadiusValues: readonly BloomRadiusPreset[] = ['tight', 'medium', 'wide'];
const antiAliasingValues: readonly AntiAliasingMode[] = ['off', 'fxaa', 'smaa', 'msaa-4x', 'msaa-4x-smaa'];
const shakeValues: readonly ShakeLevel[] = ['off', 'low', 'medium', 'high'];
const chromaticValues: readonly ChromaticAberrationLevel[] = ['off', 'low'];
const backgroundValues: readonly BackgroundIntensity[] = ['low', 'medium', 'high'];
const particleValues: readonly ParticleDensity[] = ['low', 'medium', 'high'];
const paletteValues: readonly PaletteId[] = ['default', 'high-contrast', 'colourblind'];
const uiScaleValues: readonly UiScale[] = ['small', 'medium', 'large'];
const difficultyValues: readonly DifficultyAssist[] = ['normal', 'forgiving'];

export class SaveSystem {
  constructor(private readonly storage: StorageLike | undefined = resolveStorage()) {}

  loadSettings(): GameSettings {
    const profile = this.loadProfile();
    const profileSettings = isRecord(profile.settings) ? profile.settings : undefined;
    const legacySettings = this.readJson(SAVE_KEYS.settings);
    const rawSettings = profileSettings ?? (isRecord(legacySettings) ? legacySettings : undefined);
    if (!rawSettings) {
      return { ...DEFAULT_SETTINGS };
    }

    const invertedControls = typeof rawSettings.invertedControls === 'boolean'
      ? rawSettings.invertedControls
      : DEFAULT_SETTINGS.invertedControls;
    const invertedMigrationDone =
      profile.migrations?.invertedDefault === true ||
      this.storage?.getItem(SAVE_KEYS.invertedDefaultMigration) === '1';
    const defaultSettingsMigrationDone =
      profile.migrations?.settingsDefaults20260611 === true ||
      this.storage?.getItem(SAVE_KEYS.defaultSettingsMigration) === '1';
    const needsInvertedDefaultMigration = !invertedMigrationDone && invertedControls === false;
    const normalizedSettings = normalizeSettings(rawSettings, needsInvertedDefaultMigration);
    const settings = defaultSettingsMigrationDone
      ? normalizedSettings
      : migrateDefaultSettings(normalizedSettings, rawSettings);

    if (needsInvertedDefaultMigration || !defaultSettingsMigrationDone || !profileSettings) {
      this.updateProfile((nextProfile) => {
        nextProfile.settings = settings;
        nextProfile.migrations = {
          ...nextProfile.migrations,
          invertedDefault: needsInvertedDefaultMigration || nextProfile.migrations?.invertedDefault === true,
          settingsDefaults20260611: true
        };
      });
      this.storage?.setItem(SAVE_KEYS.settings, JSON.stringify(settings));
    }

    if (needsInvertedDefaultMigration) {
      this.storage?.setItem(SAVE_KEYS.invertedDefaultMigration, '1');
    }
    if (!defaultSettingsMigrationDone) {
      this.storage?.setItem(SAVE_KEYS.defaultSettingsMigration, '1');
    }

    return settings;
  }

  saveSettings(settings: GameSettings): void {
    this.updateProfile((profile) => {
      profile.settings = settings;
      profile.migrations = {
        ...profile.migrations,
        invertedDefault: true,
        settingsDefaults20260611: true
      };
    });
    this.storage?.setItem(SAVE_KEYS.settings, JSON.stringify(settings));
    this.storage?.setItem(SAVE_KEYS.invertedDefaultMigration, '1');
    this.storage?.setItem(SAVE_KEYS.defaultSettingsMigration, '1');
  }

  loadHighScore(): number {
    const profileScore = normalizeHighScore(this.loadProfile().highScore);
    const legacyScore = normalizeHighScore(this.storage?.getItem(SAVE_KEYS.highScore));
    return Math.max(profileScore, legacyScore);
  }

  saveHighScore(score: number): void {
    const normalized = Math.max(0, Math.floor(score));
    this.updateProfile((profile) => {
      profile.highScore = normalized;
    });
    this.storage?.setItem(SAVE_KEYS.highScore, String(normalized));
  }

  loadAchievements(): Set<string> {
    return new Set([
      ...normalizeAchievementIds(this.loadProfile().achievements),
      ...normalizeAchievementIds(this.readJson(SAVE_KEYS.achievements))
    ]);
  }

  saveAchievements(ids: Iterable<string>): void {
    const normalized = [...new Set([...ids].filter((value): value is string => typeof value === 'string'))];
    this.updateProfile((profile) => {
      profile.achievements = normalized;
    });
    this.storage?.setItem(SAVE_KEYS.achievements, JSON.stringify(normalized));
  }

  loadControlBindings(): ControlBindings {
    const profileControls = this.loadProfile().controls;
    if (profileControls !== undefined) {
      return resolveControlBindings(profileControls);
    }

    const legacyControls = this.readJson(SAVE_KEYS.controls);
    return legacyControls !== undefined
      ? resolveControlBindings(legacyControls)
      : cloneControlBindings(DEFAULT_CONTROL_BINDINGS);
  }

  saveControlBindings(bindings: ControlBindings): void {
    const normalized = resolveControlBindings(bindings);
    this.updateProfile((profile) => {
      profile.controls = normalized;
    });
    this.storage?.setItem(SAVE_KEYS.controls, JSON.stringify(normalized));
  }

  loadLeaderboard(): LeaderboardEntry[] {
    return dedupeLeaderboard([
      ...normalizeLeaderboard(this.loadProfile().leaderboard),
      ...normalizeLeaderboard(this.readJson(SAVE_KEYS.leaderboard))
    ]).slice(0, LEADERBOARD_LIMIT);
  }

  saveLeaderboard(entries: readonly LeaderboardEntry[]): void {
    const normalized = dedupeLeaderboard(entries).slice(0, LEADERBOARD_LIMIT);
    this.updateProfile((profile) => {
      profile.leaderboard = normalized;
    });
    this.storage?.setItem(SAVE_KEYS.leaderboard, JSON.stringify(normalized));
  }

  submitLeaderboardEntry(
    initials: string,
    score: number,
    wave: number,
    date = new Date().toISOString()
  ): LeaderboardEntry[] {
    const entry = normalizeLeaderboardEntry({ initials, score, wave, date });
    if (!entry) return this.loadLeaderboard();

    const entries = [...this.loadLeaderboard(), entry];
    const sorted = sortLeaderboard(entries).slice(0, LEADERBOARD_LIMIT);
    this.saveLeaderboard(sorted);
    if (entry.score > this.loadHighScore()) {
      this.saveHighScore(entry.score);
    }
    return sorted;
  }

  qualifiesForLeaderboard(score: number, wave = 0): boolean {
    const entry = normalizeLeaderboardEntry({
      initials: 'AAA',
      score,
      wave,
      date: new Date(0).toISOString()
    });
    if (!entry) return false;

    const leaderboard = this.loadLeaderboard();
    if (leaderboard.length < LEADERBOARD_LIMIT) return true;
    return compareLeaderboardEntries(entry, leaderboard[leaderboard.length - 1]) < 0;
  }

  private readJson(key: string): unknown {
    const raw = this.storage?.getItem(key);
    if (!raw) return undefined;

    try {
      return JSON.parse(raw);
    } catch {
      return undefined;
    }
  }

  private loadProfile(): SaveProfile {
    const parsed = this.readJson(SAVE_KEYS.profile) ?? this.readCookieProfile();
    if (!isRecord(parsed)) {
      return { schemaVersion: SAVE_SCHEMA_VERSION };
    }

    const settings = isRecord(parsed.settings)
      ? (parsed.settings as Partial<GameSettings>)
      : undefined;
    const migrations = isRecord(parsed.migrations)
      ? {
          invertedDefault: parsed.migrations.invertedDefault === true,
          settingsDefaults20260611: parsed.migrations.settingsDefaults20260611 === true
        }
      : undefined;

    return {
      schemaVersion: typeof parsed.schemaVersion === 'number' ? parsed.schemaVersion : 1,
      settings,
      highScore: typeof parsed.highScore === 'number' ? parsed.highScore : undefined,
      achievements: Array.isArray(parsed.achievements)
        ? parsed.achievements.filter((value): value is string => typeof value === 'string')
        : undefined,
      controls: parsed.controls,
      leaderboard: Array.isArray(parsed.leaderboard) ? parsed.leaderboard : undefined,
      migrations
    };
  }

  private saveProfile(profile: SaveProfile): void {
    const profileJson = JSON.stringify({
      ...profile,
      schemaVersion: SAVE_SCHEMA_VERSION
    });
    this.storage?.setItem(
      SAVE_KEYS.profile,
      profileJson
    );
    this.writeCookieProfile(profileJson);
  }

  private updateProfile(mutator: (profile: SaveProfile) => void): void {
    const profile = this.loadProfile();
    mutator(profile);
    this.saveProfile(profile);
  }

  private readCookieProfile(): unknown {
    try {
      if (typeof document === 'undefined') return undefined;
      const cookie = document.cookie
        .split('; ')
        .find((entry) => entry.startsWith(`${SAVE_COOKIE_NAME}=`));
      if (!cookie) return undefined;
      return JSON.parse(decodeURIComponent(cookie.slice(SAVE_COOKIE_NAME.length + 1)));
    } catch {
      return undefined;
    }
  }

  private writeCookieProfile(profileJson: string): void {
    try {
      if (typeof document === 'undefined') return;
      const encoded = encodeURIComponent(profileJson);
      if (encoded.length > SAVE_COOKIE_MAX_LENGTH) return;
      document.cookie = `${SAVE_COOKIE_NAME}=${encoded}; max-age=${SAVE_COOKIE_MAX_AGE_SECONDS}; path=/; SameSite=Lax`;
    } catch {
      // Cookie persistence is a same-host backup; localStorage remains the primary save path.
    }
  }
}

export function sanitizeLeaderboardInitials(value: string): string {
  const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
  return (cleaned || 'AAA').padEnd(3, 'A');
}

function resolveStorage(): StorageLike | undefined {
  try {
    return typeof localStorage === 'undefined' ? undefined : localStorage;
  } catch {
    return undefined;
  }
}

function normalizeSettings(parsed: Record<string, unknown>, migrateInvertedDefault: boolean): GameSettings {
  const invertedControls = typeof parsed.invertedControls === 'boolean'
    ? parsed.invertedControls
    : DEFAULT_SETTINGS.invertedControls;

  return {
    bloom: bloomValues.includes(parsed.bloom as BloomLevel)
      ? (parsed.bloom as BloomLevel)
      : DEFAULT_SETTINGS.bloom,
    bloomStrength: bloomStrengthValues.includes(parsed.bloomStrength as BloomStrengthPreset)
      ? (parsed.bloomStrength as BloomStrengthPreset)
      : DEFAULT_SETTINGS.bloomStrength,
    bloomRadius: bloomRadiusValues.includes(parsed.bloomRadius as BloomRadiusPreset)
      ? (parsed.bloomRadius as BloomRadiusPreset)
      : DEFAULT_SETTINGS.bloomRadius,
    antiAliasing: antiAliasingValues.includes(parsed.antiAliasing as AntiAliasingMode)
      ? (parsed.antiAliasing as AntiAliasingMode)
      : DEFAULT_SETTINGS.antiAliasing,
    shake: shakeValues.includes(parsed.shake as ShakeLevel)
      ? (parsed.shake as ShakeLevel)
      : DEFAULT_SETTINGS.shake,
    flashReduction:
      typeof parsed.flashReduction === 'boolean'
        ? parsed.flashReduction
        : DEFAULT_SETTINGS.flashReduction,
    chromaticAberration: chromaticValues.includes(
      parsed.chromaticAberration as ChromaticAberrationLevel
    )
      ? (parsed.chromaticAberration as ChromaticAberrationLevel)
      : DEFAULT_SETTINGS.chromaticAberration,
    backgroundIntensity: backgroundValues.includes(parsed.backgroundIntensity as BackgroundIntensity)
      ? (parsed.backgroundIntensity as BackgroundIntensity)
      : DEFAULT_SETTINGS.backgroundIntensity,
    particleDensity: particleValues.includes(parsed.particleDensity as ParticleDensity)
      ? (parsed.particleDensity as ParticleDensity)
      : DEFAULT_SETTINGS.particleDensity,
    invertedControls: migrateInvertedDefault ? DEFAULT_SETTINGS.invertedControls : invertedControls,
    palette: paletteValues.includes(parsed.palette as PaletteId)
      ? (parsed.palette as PaletteId)
      : DEFAULT_SETTINGS.palette,
    uiScale: uiScaleValues.includes(parsed.uiScale as UiScale)
      ? (parsed.uiScale as UiScale)
      : DEFAULT_SETTINGS.uiScale,
    difficultyAssist: difficultyValues.includes(parsed.difficultyAssist as DifficultyAssist)
      ? (parsed.difficultyAssist as DifficultyAssist)
      : DEFAULT_SETTINGS.difficultyAssist,
    selectedSkin: isPlayerSkinId(parsed.selectedSkin)
      ? (parsed.selectedSkin as PlayerSkinId)
      : DEFAULT_SETTINGS.selectedSkin,
    selectedBackground: isBackgroundId(parsed.selectedBackground)
      ? (parsed.selectedBackground as BackgroundId)
      : DEFAULT_SETTINGS.selectedBackground
  };
}

function migrateDefaultSettings(settings: GameSettings, parsed: Record<string, unknown>): GameSettings {
  return {
    ...settings,
    bloom: parsed.bloom === undefined || parsed.bloom === 'medium' ? DEFAULT_SETTINGS.bloom : settings.bloom,
    chromaticAberration:
      parsed.chromaticAberration === undefined || parsed.chromaticAberration === 'off'
        ? DEFAULT_SETTINGS.chromaticAberration
        : settings.chromaticAberration,
    particleDensity:
      parsed.particleDensity === undefined || parsed.particleDensity === 'medium'
        ? DEFAULT_SETTINGS.particleDensity
        : settings.particleDensity,
    uiScale: parsed.uiScale === undefined || parsed.uiScale === 'medium' ? DEFAULT_SETTINGS.uiScale : settings.uiScale
  };
}

function normalizeHighScore(value: unknown): number {
  const score = Number(value);
  return Number.isFinite(score) && score > 0 ? Math.floor(score) : 0;
}

function normalizeAchievementIds(value: unknown): Set<string> {
  if (!Array.isArray(value)) return new Set();
  return new Set(value.filter((entry): entry is string => typeof entry === 'string'));
}

function normalizeLeaderboard(value: unknown): LeaderboardEntry[] {
  if (!Array.isArray(value)) return [];
  return sortLeaderboard(
    value
      .map((entry) => normalizeLeaderboardEntry(entry))
      .filter((entry): entry is LeaderboardEntry => Boolean(entry))
  );
}

function normalizeLeaderboardEntry(value: unknown): LeaderboardEntry | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const candidate = value as Partial<LeaderboardEntry>;
  const score = Math.max(0, Math.floor(Number(candidate.score)));
  if (!Number.isFinite(score) || score <= 0) return undefined;

  const wave = Math.max(1, Math.floor(Number(candidate.wave) || 1));
  const date = typeof candidate.date === 'string' && candidate.date.length > 0
    ? candidate.date
    : new Date(0).toISOString();

  return {
    initials: sanitizeLeaderboardInitials(String(candidate.initials ?? 'AAA')),
    score,
    wave,
    date
  };
}

function sortLeaderboard(entries: readonly LeaderboardEntry[]): LeaderboardEntry[] {
  return [...entries].sort(compareLeaderboardEntries);
}

function dedupeLeaderboard(entries: readonly unknown[]): LeaderboardEntry[] {
  const seen = new Set<string>();
  const normalized = normalizeLeaderboard(entries);
  return normalized.filter((entry) => {
    const key = `${entry.initials}:${entry.score}:${entry.wave}:${entry.date}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function compareLeaderboardEntries(a: LeaderboardEntry, b: LeaderboardEntry): number {
  if (a.score !== b.score) return b.score - a.score;
  if (a.wave !== b.wave) return b.wave - a.wave;
  return a.date.localeCompare(b.date);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
