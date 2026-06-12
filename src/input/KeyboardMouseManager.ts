import type { ControlBinding, ControlBindings } from './controlBindings';
import { setVec2, vec2, type Vec2 } from '../utils/math';

export interface KeyboardMouseFrame {
  move: Vec2;
  mouseX: number;
  mouseY: number;
  mouseActive: boolean;
  shoot: boolean;
  dash: boolean;
  bomb: boolean;
  pause: boolean;
  previousWeapon: boolean;
  nextWeapon: boolean;
  secretPilot: boolean;
  confirm: boolean;
  back: boolean;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

const menuKeys = new Set([
  'KeyW',
  'KeyA',
  'KeyS',
  'KeyD',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Space',
  'KeyE',
  'KeyK',
  'KeyL',
  'Slash',
  'Escape',
  'Enter'
]);

export class KeyboardMouseManager {
  readonly frame: KeyboardMouseFrame = {
    move: vec2(),
    mouseX: 0,
    mouseY: 0,
    mouseActive: false,
    shoot: false,
    dash: false,
    bomb: false,
    pause: false,
    previousWeapon: false,
    nextWeapon: false,
    secretPilot: false,
    confirm: false,
    back: false,
    up: false,
    down: false,
    left: false,
    right: false
  };

  private readonly keys = new Set<string>();
  private readonly pressedKeys = new Set<string>();
  private readonly mouseButtons = new Set<number>();
  private readonly pressedMouseButtons = new Set<number>();

  constructor(
    private bindings: ControlBindings,
    private readonly target: HTMLElement | Window = window
  ) {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('contextmenu', this.onContextMenu);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('contextmenu', this.onContextMenu);
  }

  setBindings(bindings: ControlBindings): void {
    this.bindings = bindings;
  }

  update(): KeyboardMouseFrame {
    const moveX =
      (this.isBindingDown(this.bindings.moveRight) ? 1 : 0) -
      (this.isBindingDown(this.bindings.moveLeft) ? 1 : 0);
    const moveY =
      (this.isBindingDown(this.bindings.moveUp) ? 1 : 0) -
      (this.isBindingDown(this.bindings.moveDown) ? 1 : 0);
    setVec2(this.frame.move, moveX, moveY);

    const length = Math.hypot(this.frame.move.x, this.frame.move.y);
    if (length > 1) {
      this.frame.move.x /= length;
      this.frame.move.y /= length;
    }

    this.frame.shoot = this.isBindingDown(this.bindings.shoot);
    const spacePressed = this.wasPressed('Space');
    const ePressed = this.wasPressed('KeyE');
    const escapePressed = this.wasPressed('Escape');
    const enterPressed = this.wasPressed('Enter');
    const upPressed = this.wasPressed('ArrowUp') || this.wasPressed('KeyW');
    const downPressed = this.wasPressed('ArrowDown') || this.wasPressed('KeyS');
    const leftPressed = this.wasPressed('ArrowLeft') || this.wasPressed('KeyA');
    const rightPressed = this.wasPressed('ArrowRight') || this.wasPressed('KeyD');

    this.frame.dash =
      this.isBindingDown(this.bindings.dash) || this.wasBindingPressed(this.bindings.dash);
    this.frame.bomb =
      this.isBindingDown(this.bindings.bomb) || this.wasBindingPressed(this.bindings.bomb);
    this.frame.pause =
      this.isBindingDown(this.bindings.pause) || this.wasBindingPressed(this.bindings.pause);
    this.frame.previousWeapon =
      this.isBindingDown(this.bindings.previousWeapon) ||
      this.wasBindingPressed(this.bindings.previousWeapon);
    this.frame.nextWeapon =
      this.isBindingDown(this.bindings.nextWeapon) || this.wasBindingPressed(this.bindings.nextWeapon);
    this.frame.secretPilot = this.wasPressed('Slash');
    this.frame.confirm = this.isDown('Enter') || this.isDown('Space') || enterPressed || spacePressed;
    this.frame.back = this.isDown('Escape') || this.isDown('KeyE') || escapePressed || ePressed;
    this.frame.up = this.isDown('ArrowUp') || this.isDown('KeyW') || upPressed;
    this.frame.down = this.isDown('ArrowDown') || this.isDown('KeyS') || downPressed;
    this.frame.left = this.isDown('ArrowLeft') || this.isDown('KeyA') || leftPressed;
    this.frame.right = this.isDown('ArrowRight') || this.isDown('KeyD') || rightPressed;
    this.pressedKeys.clear();
    this.pressedMouseButtons.clear();

    return this.frame;
  }

  private isDown(code: string): boolean {
    return this.keys.has(code);
  }

  private wasPressed(code: string): boolean {
    return this.pressedKeys.has(code);
  }

  private isBindingDown(binding: ControlBinding): boolean {
    return binding.kind === 'key' ? this.isDown(binding.code) : this.mouseButtons.has(binding.button);
  }

  private wasBindingPressed(binding: ControlBinding): boolean {
    return binding.kind === 'key'
      ? this.wasPressed(binding.code)
      : this.pressedMouseButtons.has(binding.button);
  }

  private shouldPreventDefault(code: string): boolean {
    if (menuKeys.has(code)) return true;
    return Object.values(this.bindings).some((binding) => binding.kind === 'key' && binding.code === code);
  }

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    if (!event.repeat) {
      this.pressedKeys.add(event.code);
    }
    this.keys.add(event.code);
    if (this.shouldPreventDefault(event.code)) {
      event.preventDefault();
    }
  };

  private readonly onKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.code);
    if (this.shouldPreventDefault(event.code)) {
      event.preventDefault();
    }
  };

  private readonly onBlur = (): void => {
    this.keys.clear();
    this.pressedKeys.clear();
    this.mouseButtons.clear();
    this.pressedMouseButtons.clear();
  };

  private readonly onMouseMove = (event: MouseEvent): void => {
    this.frame.mouseX = event.clientX;
    this.frame.mouseY = event.clientY;
    this.frame.mouseActive = true;
  };

  private readonly onMouseDown = (event: MouseEvent): void => {
    this.mouseButtons.add(event.button);
    this.pressedMouseButtons.add(event.button);
    this.frame.mouseActive = true;
  };

  private readonly onMouseUp = (event: MouseEvent): void => {
    this.mouseButtons.delete(event.button);
  };

  private readonly onContextMenu = (event: MouseEvent): void => {
    if (this.target) {
      event.preventDefault();
    }
  };
}
