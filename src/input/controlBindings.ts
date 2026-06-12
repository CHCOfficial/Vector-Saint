export const CONTROL_ACTIONS = [
  { id: 'moveUp', label: 'Move Up', gamepadLabel: 'Left Stick Up' },
  { id: 'moveDown', label: 'Move Down', gamepadLabel: 'Left Stick Down' },
  { id: 'moveLeft', label: 'Move Left', gamepadLabel: 'Left Stick Left' },
  { id: 'moveRight', label: 'Move Right', gamepadLabel: 'Left Stick Right' },
  { id: 'shoot', label: 'Shoot', gamepadLabel: 'RT' },
  { id: 'previousWeapon', label: 'Previous Weapon', gamepadLabel: 'LB' },
  { id: 'nextWeapon', label: 'Next Weapon', gamepadLabel: 'RB' },
  { id: 'dash', label: 'Dash', gamepadLabel: 'A' },
  { id: 'bomb', label: 'Bomb', gamepadLabel: 'B' },
  { id: 'pause', label: 'Pause', gamepadLabel: 'Menu' }
] as const;

export type ControlAction = (typeof CONTROL_ACTIONS)[number]['id'];

export type ControlBinding =
  | {
      kind: 'key';
      code: string;
    }
  | {
      kind: 'mouse';
      button: number;
    };

export type ControlBindings = Record<ControlAction, ControlBinding>;

export const DEFAULT_CONTROL_BINDINGS: ControlBindings = {
  moveUp: { kind: 'key', code: 'KeyW' },
  moveDown: { kind: 'key', code: 'KeyS' },
  moveLeft: { kind: 'key', code: 'KeyA' },
  moveRight: { kind: 'key', code: 'KeyD' },
  shoot: { kind: 'mouse', button: 0 },
  previousWeapon: { kind: 'key', code: 'KeyK' },
  nextWeapon: { kind: 'key', code: 'KeyL' },
  dash: { kind: 'key', code: 'Space' },
  bomb: { kind: 'key', code: 'KeyE' },
  pause: { kind: 'key', code: 'Escape' }
};

const blockedKeyCodes = new Set(['F5', 'F11', 'F12', 'PrintScreen', 'MetaLeft', 'MetaRight']);

const keyLabels: Record<string, string> = {
  Space: 'Space',
  Escape: 'Esc',
  Enter: 'Enter',
  Tab: 'Tab',
  Backspace: 'Backspace',
  Delete: 'Delete',
  ShiftLeft: 'Shift',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  ControlRight: 'Ctrl',
  AltLeft: 'Alt',
  AltRight: 'Alt',
  ArrowUp: 'Up Arrow',
  ArrowDown: 'Down Arrow',
  ArrowLeft: 'Left Arrow',
  ArrowRight: 'Right Arrow',
  Minus: '-',
  Equal: '=',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Semicolon: ';',
  Quote: "'",
  Comma: ',',
  Period: '.',
  Slash: '/',
  Backquote: '`'
};

const mouseLabels: Record<number, string> = {
  0: 'Left Mouse',
  1: 'Middle Mouse',
  2: 'Right Mouse'
};

export function cloneControlBindings(bindings: ControlBindings): ControlBindings {
  return {
    moveUp: cloneControlBinding(bindings.moveUp),
    moveDown: cloneControlBinding(bindings.moveDown),
    moveLeft: cloneControlBinding(bindings.moveLeft),
    moveRight: cloneControlBinding(bindings.moveRight),
    shoot: cloneControlBinding(bindings.shoot),
    previousWeapon: cloneControlBinding(bindings.previousWeapon),
    nextWeapon: cloneControlBinding(bindings.nextWeapon),
    dash: cloneControlBinding(bindings.dash),
    bomb: cloneControlBinding(bindings.bomb),
    pause: cloneControlBinding(bindings.pause)
  };
}

export function cloneControlBinding(binding: ControlBinding): ControlBinding {
  return binding.kind === 'key'
    ? { kind: 'key', code: binding.code }
    : { kind: 'mouse', button: binding.button };
}

export function resolveControlBindings(value: unknown): ControlBindings {
  const bindings = cloneControlBindings(DEFAULT_CONTROL_BINDINGS);
  if (!value || typeof value !== 'object') return bindings;

  const raw = value as Partial<Record<ControlAction, unknown>>;
  for (const action of CONTROL_ACTIONS) {
    const binding = raw[action.id];
    if (isControlBinding(binding)) {
      bindings[action.id] = binding;
    }
  }

  return bindings;
}

export function isControlAction(value: string): value is ControlAction {
  return CONTROL_ACTIONS.some((action) => action.id === value);
}

export function isControlBinding(value: unknown): value is ControlBinding {
  if (!value || typeof value !== 'object') return false;
  const binding = value as Partial<ControlBinding>;
  if (binding.kind === 'key') {
    return typeof binding.code === 'string' && isBindableKey(binding.code);
  }
  if (binding.kind === 'mouse') {
    return typeof binding.button === 'number' && isBindableMouseButton(binding.button);
  }
  return false;
}

export function isBindableKey(code: string): boolean {
  return code.length > 0 && !blockedKeyCodes.has(code);
}

export function isBindableMouseButton(button: number): boolean {
  return Number.isInteger(button) && button >= 0 && button <= 4;
}

export function bindingToLabel(binding: ControlBinding): string {
  if (binding.kind === 'mouse') {
    return mouseLabels[binding.button] ?? `Mouse ${binding.button + 1}`;
  }

  if (binding.code in keyLabels) {
    return keyLabels[binding.code];
  }
  if (binding.code.startsWith('Key')) {
    return binding.code.slice(3).toUpperCase();
  }
  if (binding.code.startsWith('Digit')) {
    return binding.code.slice(5);
  }
  if (binding.code.startsWith('Numpad')) {
    return formatNumpadLabel(binding.code.slice(6));
  }

  return binding.code.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export function bindingEquals(a: ControlBinding, b: ControlBinding): boolean {
  if (a.kind !== b.kind) return false;
  if (a.kind === 'key' && b.kind === 'key') return a.code === b.code;
  if (a.kind === 'mouse' && b.kind === 'mouse') return a.button === b.button;
  return false;
}

function formatNumpadLabel(value: string): string {
  const replacements: Record<string, string> = {
    Add: '+',
    Subtract: '-',
    Multiply: '*',
    Divide: '/',
    Decimal: '.',
    Enter: 'Enter'
  };
  return `Numpad ${replacements[value] ?? value}`;
}
