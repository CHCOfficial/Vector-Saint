import { INPUT_TUNING } from '../data/tuning';
import { clamp, length, normalize, setVec2, vec2, type Vec2 } from '../utils/math';

export interface GamepadFrame {
  connected: boolean;
  move: Vec2;
  aim: Vec2;
  shoot: boolean;
  dash: boolean;
  bomb: boolean;
  pause: boolean;
  previousWeapon: boolean;
  nextWeapon: boolean;
  confirm: boolean;
  back: boolean;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

export class GamepadManager {
  readonly frame: GamepadFrame = {
    connected: false,
    move: vec2(),
    aim: vec2(),
    shoot: false,
    dash: false,
    bomb: false,
    pause: false,
    previousWeapon: false,
    nextWeapon: false,
    confirm: false,
    back: false,
    up: false,
    down: false,
    left: false,
    right: false
  };

  update(): GamepadFrame {
    const gamepad = this.getPrimaryGamepad();
    this.frame.connected = Boolean(gamepad);
    setVec2(this.frame.move, 0, 0);
    setVec2(this.frame.aim, 0, 0);
    this.frame.shoot = false;
    this.frame.dash = false;
    this.frame.bomb = false;
    this.frame.pause = false;
    this.frame.previousWeapon = false;
    this.frame.nextWeapon = false;
    this.frame.confirm = false;
    this.frame.back = false;
    this.frame.up = false;
    this.frame.down = false;
    this.frame.left = false;
    this.frame.right = false;

    if (!gamepad) return this.frame;

    this.applyStick(this.frame.move, gamepad.axes[0] ?? 0, -(gamepad.axes[1] ?? 0));
    this.applyStick(this.frame.aim, gamepad.axes[2] ?? 0, -(gamepad.axes[3] ?? 0));

    this.frame.shoot = (gamepad.buttons[7]?.value ?? 0) > 0.35;
    this.frame.dash = Boolean(gamepad.buttons[0]?.pressed);
    this.frame.bomb = Boolean(gamepad.buttons[1]?.pressed);
    this.frame.previousWeapon = Boolean(gamepad.buttons[4]?.pressed);
    this.frame.nextWeapon = Boolean(gamepad.buttons[5]?.pressed);
    this.frame.pause = Boolean(gamepad.buttons[9]?.pressed);
    this.frame.confirm = this.frame.dash;
    this.frame.back = this.frame.bomb || this.frame.pause;

    const stickNavX = this.frame.move.x;
    const stickNavY = this.frame.move.y;
    this.frame.up = Boolean(gamepad.buttons[12]?.pressed) || stickNavY > 0.62;
    this.frame.down = Boolean(gamepad.buttons[13]?.pressed) || stickNavY < -0.62;
    this.frame.left = Boolean(gamepad.buttons[14]?.pressed) || stickNavX < -0.62;
    this.frame.right = Boolean(gamepad.buttons[15]?.pressed) || stickNavX > 0.62;

    return this.frame;
  }

  private getPrimaryGamepad(): Gamepad | undefined {
    if (typeof navigator === 'undefined' || !navigator.getGamepads) return undefined;
    const pads = navigator.getGamepads();
    for (const pad of pads) {
      if (pad?.connected) return pad;
    }
    return undefined;
  }

  private applyStick(out: Vec2, rawX: number, rawY: number): void {
    const x = clamp(rawX, -1, 1);
    const y = clamp(rawY, -1, 1);
    setVec2(out, x, y);

    const magnitude = length(out);
    if (magnitude < INPUT_TUNING.stickDeadzone) {
      setVec2(out, 0, 0);
      return;
    }

    normalize(out);
    const scaled = (magnitude - INPUT_TUNING.stickDeadzone) / (1 - INPUT_TUNING.stickDeadzone);
    out.x *= clamp(scaled, 0, 1);
    out.y *= clamp(scaled, 0, 1);
  }
}
