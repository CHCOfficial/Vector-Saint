import { describe, expect, it } from 'vitest';
import {
  LEADERBOARD_LIMIT,
  SaveSystem,
  sanitizeLeaderboardInitials,
  type StorageLike
} from '../src/game/SaveSystem';
import { DEFAULT_SETTINGS } from '../src/data/tuning';
import { DEFAULT_CONTROL_BINDINGS } from '../src/input/controlBindings';

class MemoryStorage implements StorageLike {
  readonly map = new Map<string, string>();

  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.map.set(key, value);
  }
}

describe('SaveSystem', () => {
  it('defaults inverted controls to on for fresh players', () => {
    const saves = new SaveSystem(new MemoryStorage());

    expect(saves.loadSettings()).toMatchObject({
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
      selectedSkin: 'vectorSaint',
      selectedBackground: 'neonCathedralGrid'
    });
  });

  it('migrates older saved inverted-control defaults once', () => {
    const storage = new MemoryStorage();
    storage.map.set(
      'vector-saint.settings.v1',
      JSON.stringify({ ...DEFAULT_SETTINGS, invertedControls: false })
    );
    const saves = new SaveSystem(storage);

    expect(saves.loadSettings().invertedControls).toBe(true);

    const settings = saves.loadSettings();
    settings.invertedControls = false;
    saves.saveSettings(settings);

    expect(saves.loadSettings().invertedControls).toBe(false);
  });

  it('migrates older saved default settings to the current application defaults', () => {
    const storage = new MemoryStorage();
    storage.map.set(
      'vector-saint.settings.v1',
      JSON.stringify({
        ...DEFAULT_SETTINGS,
        bloom: 'medium',
        chromaticAberration: 'off',
        particleDensity: 'medium',
        uiScale: 'medium'
      })
    );

    const saves = new SaveSystem(storage);

    expect(saves.loadSettings()).toMatchObject({
      bloom: 'high',
      chromaticAberration: 'low',
      particleDensity: 'high',
      uiScale: 'small'
    });
  });

  it('round-trips high scores, settings, and achievement IDs', () => {
    const storage = new MemoryStorage();
    const saves = new SaveSystem(storage);
    const settings = saves.loadSettings();
    settings.bloom = 'high';
    settings.bloomStrength = 'radiant';
    settings.bloomRadius = 'wide';
    settings.antiAliasing = 'msaa-4x-smaa';
    settings.flashReduction = true;
    settings.chromaticAberration = 'low';
    settings.particleDensity = 'high';
    settings.invertedControls = true;
    settings.palette = 'colourblind';
    settings.selectedSkin = 'voidChoir';
    settings.selectedBackground = 'deepOceanSignal';

    saves.saveSettings(settings);
    saves.saveHighScore(12345);
    saves.saveAchievements(['first-light', 'clean-arc']);

    expect(saves.loadSettings()).toMatchObject({
      bloom: 'high',
      bloomStrength: 'radiant',
      bloomRadius: 'wide',
      antiAliasing: 'msaa-4x-smaa',
      flashReduction: true,
      chromaticAberration: 'low',
      particleDensity: 'high',
      invertedControls: true,
      palette: 'colourblind',
      selectedSkin: 'voidChoir',
      selectedBackground: 'deepOceanSignal'
    });
    expect(saves.loadHighScore()).toBe(12345);
    expect(saves.loadAchievements()).toEqual(new Set(['first-light', 'clean-arc']));
  });

  it('writes a stable versioned profile that new save instances can reload', () => {
    const storage = new MemoryStorage();
    const saves = new SaveSystem(storage);
    const settings = saves.loadSettings();
    const bindings = saves.loadControlBindings();
    settings.bloom = 'low';
    settings.selectedSkin = 'redlineMartyr';
    settings.selectedBackground = 'voidCircuit';
    bindings.nextWeapon = { kind: 'key', code: 'KeyO' };

    saves.saveSettings(settings);
    saves.saveHighScore(424242);
    saves.saveAchievements(['first-light', 'wave-runner']);
    saves.saveControlBindings(bindings);
    saves.saveLeaderboard([{ initials: 'CHC', score: 424242, wave: 8, date: '2026-06-10' }]);

    const profile = JSON.parse(storage.map.get('vector-saint.profile') ?? '{}');
    expect(profile).toMatchObject({
      schemaVersion: 2,
      highScore: 424242,
      settings: { bloom: 'low', selectedSkin: 'redlineMartyr', selectedBackground: 'voidCircuit' },
      achievements: ['first-light', 'wave-runner'],
      leaderboard: [{ initials: 'CHC', score: 424242, wave: 8, date: '2026-06-10' }]
    });

    const restarted = new SaveSystem(storage);
    expect(restarted.loadSettings()).toMatchObject({
      bloom: 'low',
      selectedSkin: 'redlineMartyr',
      selectedBackground: 'voidCircuit'
    });
    expect(restarted.loadHighScore()).toBe(424242);
    expect(restarted.loadAchievements()).toEqual(new Set(['first-light', 'wave-runner']));
    expect(restarted.loadControlBindings().nextWeapon).toEqual({ kind: 'key', code: 'KeyO' });
    expect(restarted.loadLeaderboard()[0]).toMatchObject({ initials: 'CHC', score: 424242, wave: 8 });
  });

  it('round-trips rebindable keyboard and mouse controls', () => {
    const storage = new MemoryStorage();
    const saves = new SaveSystem(storage);
    const bindings = saves.loadControlBindings();
    bindings.dash = { kind: 'key', code: 'ShiftLeft' };
    bindings.shoot = { kind: 'mouse', button: 2 };

    saves.saveControlBindings(bindings);

    expect(saves.loadControlBindings()).toMatchObject({
      ...DEFAULT_CONTROL_BINDINGS,
      dash: { kind: 'key', code: 'ShiftLeft' },
      shoot: { kind: 'mouse', button: 2 }
    });
  });

  it('stores sanitized top-ten leaderboard entries in arcade order', () => {
    const storage = new MemoryStorage();
    const saves = new SaveSystem(storage);

    for (let i = 0; i < LEADERBOARD_LIMIT + 2; i += 1) {
      saves.submitLeaderboardEntry(
        `p${i}`,
        1000 + i * 100,
        1 + (i % 4),
        `2026-01-${String(i + 1).padStart(2, '0')}`
      );
    }
    saves.submitLeaderboardEntry('cj!', 9000, 7, '2026-02-01');

    const leaderboard = saves.loadLeaderboard();
    expect(leaderboard).toHaveLength(LEADERBOARD_LIMIT);
    expect(leaderboard[0]).toMatchObject({
      initials: 'CJA',
      score: 9000,
      wave: 7
    });
    expect(leaderboard[leaderboard.length - 1]?.score).toBeGreaterThan(1000);
  });

  it('detects whether a score qualifies for the saved leaderboard', () => {
    const storage = new MemoryStorage();
    const saves = new SaveSystem(storage);

    expect(saves.qualifiesForLeaderboard(1)).toBe(true);
    for (let i = 0; i < LEADERBOARD_LIMIT; i += 1) {
      saves.submitLeaderboardEntry(
        'AAA',
        1000 + i,
        1,
        `2026-03-${String(i + 1).padStart(2, '0')}`
      );
    }

    expect(saves.qualifiesForLeaderboard(500)).toBe(false);
    expect(saves.qualifiesForLeaderboard(2000)).toBe(true);
    expect(sanitizeLeaderboardInitials('x_1')).toBe('X1A');
  });

  it('falls back to the default background when saved background data is invalid', () => {
    const storage = new MemoryStorage();
    storage.map.set(
      'vector-saint.settings.v1',
      JSON.stringify({ ...DEFAULT_SETTINGS, selectedBackground: 'missing-background' })
    );

    const saves = new SaveSystem(storage);

    expect(saves.loadSettings().selectedBackground).toBe('neonCathedralGrid');
  });
});
