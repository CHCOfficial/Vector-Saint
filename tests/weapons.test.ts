import { describe, expect, it } from 'vitest';
import { getPlayerSkin, skinReadableAccentColor } from '../src/data/playerSkins';
import { WEAPONS, weaponColorForSkin } from '../src/data/weapons';
import { Player } from '../src/game/Player';

describe('weapons', () => {
  it('cycles through the weapon roster in both directions', () => {
    const player = new Player();
    player.reset('normal');

    expect(player.weaponId).toBe('vectorBolt');
    player.cycleWeapon(1);
    expect(player.weaponId).toBe('scatterCrown');
    player.cycleWeapon(1);
    expect(player.weaponId).toBe('lanceBeam');
    player.cycleWeapon(1);
    expect(player.weaponId).toBe('vectorBolt');
    player.cycleWeapon(-1);
    expect(player.weaponId).toBe('lanceBeam');
  });

  it('defines distinct projectile and beam weapons', () => {
    expect(WEAPONS.vectorBolt.kind).toBe('projectile');
    expect(WEAPONS.scatterCrown.projectile?.pelletCount).toBeGreaterThan(1);
    expect(WEAPONS.vectorBolt.projectile?.magnetRadius).toBeGreaterThan(0);
    expect(WEAPONS.scatterCrown.projectile?.magnetStrength).toBeGreaterThan(0);
    expect(WEAPONS.lanceBeam.kind).toBe('beam');
    expect(WEAPONS.lanceBeam.beam?.range).toBeGreaterThan(40);
  });

  it('derives weapon colours from the selected player skin', () => {
    const vectorSaint = getPlayerSkin('vectorSaint');
    const solarWarden = getPlayerSkin('solarWarden');
    const redlineMartyr = getPlayerSkin('redlineMartyr');

    expect(weaponColorForSkin('vectorBolt', vectorSaint)).not.toBe(
      weaponColorForSkin('vectorBolt', solarWarden)
    );
    expect(weaponColorForSkin('scatterCrown', solarWarden)).not.toBe(WEAPONS.scatterCrown.color);
    expect(weaponColorForSkin('lanceBeam', redlineMartyr)).toBe(redlineMartyr.primaryColor);
  });

  it('keeps Redline Martyr gameplay colours visible against the void', () => {
    const redlineMartyr = getPlayerSkin('redlineMartyr');

    expect(skinReadableAccentColor(redlineMartyr)).toBe(redlineMartyr.secondaryColor);
    expect(weaponColorForSkin('vectorBolt', redlineMartyr)).toBe(redlineMartyr.secondaryColor);
    expect(weaponColorForSkin('scatterCrown', redlineMartyr)).not.toBe(redlineMartyr.accentColor);
  });
});
