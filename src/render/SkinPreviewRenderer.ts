import type { PlayerSkin } from '../data/playerSkins';
import { skinColorToCss } from '../data/playerSkins';

export class SkinPreviewRenderer {
  readonly element: HTMLDivElement;
  private readonly core: HTMLDivElement;
  private readonly ring: HTMLDivElement;
  private readonly trail: HTMLDivElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'skin-preview-stage';
    this.ring = document.createElement('div');
    this.ring.className = 'skin-preview-ring';
    this.trail = document.createElement('div');
    this.trail.className = 'skin-preview-trail';
    this.core = document.createElement('div');
    this.core.className = 'skin-preview-core';
    this.element.append(this.ring, this.trail, this.core);
  }

  setSkin(skin: PlayerSkin): void {
    this.element.style.setProperty('--skin-primary', skinColorToCss(skin.primaryColor));
    this.element.style.setProperty('--skin-secondary', skinColorToCss(skin.secondaryColor));
    this.element.style.setProperty('--skin-accent', skinColorToCss(skin.accentColor));
    this.element.dataset.skinId = skin.id;
    this.element.dataset.skinStyle = skin.trailStyle;
  }
}
