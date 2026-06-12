import { describe, expect, it } from 'vitest';
import {
  bindingEquals,
  bindingToLabel,
  DEFAULT_CONTROL_BINDINGS,
  resolveControlBindings
} from '../src/input/controlBindings';

describe('control bindings', () => {
  it('formats keyboard and mouse bindings for the controls menu', () => {
    expect(bindingToLabel({ kind: 'key', code: 'KeyW' })).toBe('W');
    expect(bindingToLabel({ kind: 'key', code: 'ShiftLeft' })).toBe('Shift');
    expect(bindingToLabel({ kind: 'mouse', button: 0 })).toBe('Left Mouse');
    expect(bindingToLabel({ kind: 'mouse', button: 2 })).toBe('Right Mouse');
  });

  it('resolves partial or invalid save data against defaults', () => {
    expect(
      resolveControlBindings({
        dash: { kind: 'key', code: 'ShiftLeft' },
        bomb: { kind: 'key', code: 'F12' },
        shoot: { kind: 'mouse', button: 8 }
      })
    ).toEqual({
      ...DEFAULT_CONTROL_BINDINGS,
      dash: { kind: 'key', code: 'ShiftLeft' }
    });
  });

  it('compares bindings by device and physical input', () => {
    expect(bindingEquals({ kind: 'key', code: 'Space' }, { kind: 'key', code: 'Space' })).toBe(true);
    expect(bindingEquals({ kind: 'key', code: 'Space' }, { kind: 'mouse', button: 0 })).toBe(false);
  });
});
