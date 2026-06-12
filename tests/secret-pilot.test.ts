import { describe, expect, it } from 'vitest';
import { EntityManager } from '../src/game/EntityManager';
import { Player } from '../src/game/Player';
import { SecretPilot } from '../src/game/SecretPilot';
import type { InputFrame } from '../src/input/InputManager';
import { Random } from '../src/utils/random';
import { vec2 } from '../src/utils/math';

function createInputFrame(): InputFrame {
  return {
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
}

function createPilotFixture(): {
  pilot: SecretPilot;
  player: Player;
  manager: EntityManager;
  input: InputFrame;
  random: Random;
} {
  const pilot = new SecretPilot();
  const player = new Player();
  const manager = new EntityManager();
  const input = createInputFrame();
  const random = new Random(42);

  player.reset('normal');
  pilot.setEnabled(true);
  return { pilot, player, manager, input, random };
}

describe('SecretPilot', () => {
  it('spends a spare dash on close enemies while aiming and cycling to the shotgun', () => {
    const { pilot, player, manager, input, random } = createPilotFixture();
    manager.spawnEnemy('chaser', 7, 0, 0, random);

    pilot.apply(input, player, manager, 1 / 60);

    expect(input.dashPressed).toBe(true);
    expect(input.shoot).toBe(false);
    expect(input.aim.x).toBeLessThan(0);
    expect(input.move.x).toBeLessThan(0);
    expect(input.nextWeaponPressed).toBe(true);
  });

  it('selects the beam when a target line can hit a cluster', () => {
    const { pilot, player, manager, input, random } = createPilotFixture();
    manager.spawnEnemy('chaser', 12, 0, 0, random);
    manager.spawnEnemy('swarm', 16, 0.2, 0, random);
    manager.spawnEnemy('chaser', 20, -0.2, 0, random);

    pilot.apply(input, player, manager, 1 / 60);

    expect(input.shoot).toBe(true);
    expect(input.previousWeaponPressed).toBe(true);
  });

  it('uses a bomb when enough enemies are inside the blast radius', () => {
    const { pilot, player, manager, input, random } = createPilotFixture();
    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * Math.PI * 2;
      manager.spawnEnemy('swarm', Math.cos(angle) * 6, Math.sin(angle) * 6, 0, random);
    }

    pilot.apply(input, player, manager, 1 / 60);

    expect(input.bombPressed).toBe(true);
  });

  it('retries after the configured game-over delay while enabled', () => {
    const pilot = new SecretPilot();
    pilot.setEnabled(true);
    pilot.beginRetryDelay();

    expect(pilot.shouldRetry(0.5)).toBe(false);
    expect(pilot.shouldRetry(1)).toBe(true);
  });
});
