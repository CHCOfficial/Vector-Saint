import { INPUT_TUNING } from '../data/tuning';
import { lengthSq, normalize, setVec2, vec2, type Vec2 } from '../utils/math';
import type { ControlBindings } from './controlBindings';
import { GamepadManager } from './GamepadManager';
import { KeyboardMouseManager } from './KeyboardMouseManager';

export type InputDevice = 'keyboard-mouse' | 'gamepad';

export interface InputFrame {
  move: Vec2;
  aim: Vec2;
  shoot: boolean;
  shootPressed: boolean;
  dashPressed: boolean;
  bombPressed: boolean;
  previousWeaponPressed: boolean;
  nextWeaponPressed: boolean;
  secretPilotPressed: boolean;
  pausePressed: boolean;
  confirmPressed: boolean;
  backPressed: boolean;
  menuUpPressed: boolean;
  menuDownPressed: boolean;
  menuLeftPressed: boolean;
  menuRightPressed: boolean;
  lastDevice: InputDevice;
}

interface ButtonSnapshot {
  shoot: boolean;
  dash: boolean;
  bomb: boolean;
  previousWeapon: boolean;
  nextWeapon: boolean;
  secretPilot: boolean;
  pause: boolean;
  confirm: boolean;
  back: boolean;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

export class InputManager {
  readonly frame: InputFrame = {
    move: vec2(),
    aim: vec2(1, 0),
    shoot: false,
    shootPressed: false,
    dashPressed: false,
    bombPressed: false,
    previousWeaponPressed: false,
    nextWeaponPressed: false,
    secretPilotPressed: false,
    pausePressed: false,
    confirmPressed: false,
    backPressed: false,
    menuUpPressed: false,
    menuDownPressed: false,
    menuLeftPressed: false,
    menuRightPressed: false,
    lastDevice: 'keyboard-mouse'
  };

  private readonly gamepad = new GamepadManager();
  private readonly keyboardMouse: KeyboardMouseManager;
  private aimOriginX = 0;
  private aimOriginY = 0;
  private readonly previous: ButtonSnapshot = {
    shoot: false,
    dash: false,
    bomb: false,
    previousWeapon: false,
    nextWeapon: false,
    secretPilot: false,
    pause: false,
    confirm: false,
    back: false,
    up: false,
    down: false,
    left: false,
    right: false
  };

  constructor(bindings: ControlBindings, target: HTMLElement | Window = window) {
    this.keyboardMouse = new KeyboardMouseManager(bindings, target);
  }

  dispose(): void {
    this.keyboardMouse.dispose();
  }

  setAimOrigin(screenX: number, screenY: number): void {
    this.aimOriginX = screenX;
    this.aimOriginY = screenY;
  }

  setControlBindings(bindings: ControlBindings): void {
    this.keyboardMouse.setBindings(bindings);
  }

  update(): InputFrame {
    const keyboard = this.keyboardMouse.update();
    const pad = this.gamepad.update();
    const padMoveActive = lengthSq(pad.move) > 0.001;
    const padAimActive = lengthSq(pad.aim) > 0.001;

    if (
      pad.connected &&
      (padMoveActive ||
        padAimActive ||
        pad.shoot ||
        pad.dash ||
        pad.bomb ||
        pad.previousWeapon ||
        pad.nextWeapon)
    ) {
      this.frame.lastDevice = 'gamepad';
    } else if (
      lengthSq(keyboard.move) > 0.001 ||
      keyboard.shoot ||
      keyboard.dash ||
      keyboard.bomb ||
      keyboard.previousWeapon ||
      keyboard.nextWeapon ||
      keyboard.secretPilot ||
      keyboard.mouseActive
    ) {
      this.frame.lastDevice = 'keyboard-mouse';
    }

    if (padMoveActive) {
      setVec2(this.frame.move, pad.move.x, pad.move.y);
    } else {
      setVec2(this.frame.move, keyboard.move.x, keyboard.move.y);
    }

    if (padAimActive) {
      setVec2(this.frame.aim, pad.aim.x, pad.aim.y);
    } else {
      const dx = keyboard.mouseX - this.aimOriginX;
      const dy = this.aimOriginY - keyboard.mouseY;
      const distSq = dx * dx + dy * dy;
      if (distSq > INPUT_TUNING.mouseAimMinimumDistance * INPUT_TUNING.mouseAimMinimumDistance) {
        setVec2(this.frame.aim, dx, dy);
        normalize(this.frame.aim);
      }
    }

    const buttons: ButtonSnapshot = {
      shoot: pad.shoot || keyboard.shoot,
      dash: pad.dash || keyboard.dash,
      bomb: pad.bomb || keyboard.bomb,
      previousWeapon: pad.previousWeapon || keyboard.previousWeapon,
      nextWeapon: pad.nextWeapon || keyboard.nextWeapon,
      secretPilot: keyboard.secretPilot,
      pause: pad.pause || keyboard.pause,
      confirm: pad.confirm || keyboard.confirm,
      back: pad.back || keyboard.back,
      up: pad.up || keyboard.up,
      down: pad.down || keyboard.down,
      left: pad.left || keyboard.left,
      right: pad.right || keyboard.right
    };

    this.frame.shoot = buttons.shoot;
    this.frame.shootPressed = buttons.shoot && !this.previous.shoot;
    this.frame.dashPressed = buttons.dash && !this.previous.dash;
    this.frame.bombPressed = buttons.bomb && !this.previous.bomb;
    this.frame.previousWeaponPressed = buttons.previousWeapon && !this.previous.previousWeapon;
    this.frame.nextWeaponPressed = buttons.nextWeapon && !this.previous.nextWeapon;
    this.frame.secretPilotPressed = buttons.secretPilot && !this.previous.secretPilot;
    this.frame.pausePressed = buttons.pause && !this.previous.pause;
    this.frame.confirmPressed = buttons.confirm && !this.previous.confirm;
    this.frame.backPressed = buttons.back && !this.previous.back;
    this.frame.menuUpPressed = buttons.up && !this.previous.up;
    this.frame.menuDownPressed = buttons.down && !this.previous.down;
    this.frame.menuLeftPressed = buttons.left && !this.previous.left;
    this.frame.menuRightPressed = buttons.right && !this.previous.right;

    Object.assign(this.previous, buttons);
    return this.frame;
  }
}
