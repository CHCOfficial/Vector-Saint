import { describe, expect, it } from 'vitest';
import { clamp, normalize, pointSegmentDistanceSq, vec2 } from '../src/utils/math';

describe('math utilities', () => {
  it('clamps values and normalizes vectors', () => {
    expect(clamp(12, 0, 10)).toBe(10);
    const value = vec2(3, 4);
    normalize(value);
    expect(value.x).toBeCloseTo(0.6);
    expect(value.y).toBeCloseTo(0.8);
  });

  it('measures point-to-segment distance', () => {
    const distance = pointSegmentDistanceSq(vec2(2, 2), vec2(0, 0), vec2(4, 0));
    expect(distance).toBeCloseTo(4);
  });
});
