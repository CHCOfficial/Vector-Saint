import { describe, expect, it } from 'vitest';
import {
  BACKGROUNDS,
  DEFAULT_BACKGROUND_ID,
  getBackground,
  isBackgroundId
} from '../src/data/backgrounds';

describe('background registry', () => {
  it('ships a full unlocked procedural background set with unique IDs', () => {
    const ids = BACKGROUNDS.map((background) => background.id);

    expect(BACKGROUNDS.length).toBeGreaterThanOrEqual(6);
    expect(new Set(ids).size).toBe(ids.length);
    expect(BACKGROUNDS.every((background) => background.unlockState === 'unlocked')).toBe(true);
  });

  it('has a valid default background and rejects unknown IDs', () => {
    expect(isBackgroundId(DEFAULT_BACKGROUND_ID)).toBe(true);
    expect(getBackground(DEFAULT_BACKGROUND_ID).displayName).toBe('Neon Cathedral Grid');
    expect(isBackgroundId('missing-background')).toBe(false);
  });
});
