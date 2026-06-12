import { describe, expect, it } from 'vitest';
import { ARENA_TUNING, PLAYER_TUNING } from '../src/data/tuning';
import { Player } from '../src/game/Player';
import type { InputFrame } from '../src/input/InputManager';
import { vec2 } from '../src/utils/math';

const movingRightInput: InputFrame = {
  move: vec2(1, 0),
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

describe('Player infinite movement', () => {
  it('can move beyond the old fixed arena bounds', () => {
    const player = new Player();
    player.reset('normal');

    for (let i = 0; i < 240; i += 1) {
      player.update(movingRightInput, 1 / 60);
    }

    expect(player.position.x).toBeGreaterThan(ARENA_TUNING.width * 0.5);
  });

  it('supports three dash charges that recharge over time', () => {
    const player = new Player();
    player.reset('normal');

    expect(player.dashCharges).toBe(3);
    expect(player.tryDash()).toBe(true);
    expect(player.tryDash()).toBe(true);
    expect(player.tryDash()).toBe(true);
    expect(player.tryDash()).toBe(false);
    expect(player.dashCharges).toBe(0);

    player.update(movingRightInput, 0.81);

    expect(player.dashCharges).toBe(1);
    expect(player.dashRatio).toBeGreaterThan(0.33);
  });

  it('dashes in the current movement direction instead of the aim direction', () => {
    const player = new Player();
    player.reset('normal');
    player.aim.x = 1;
    player.aim.y = 0;

    expect(player.tryDash(vec2(0, 1))).toBe(true);

    expect(player.velocity.x).toBeCloseTo(0);
    expect(player.velocity.y).toBeCloseTo(PLAYER_TUNING.dashSpeed);
  });
});
