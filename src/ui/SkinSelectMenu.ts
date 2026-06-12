import {
  PLAYER_SKINS,
  getPlayerSkin,
  skinReadableAccentToCss,
  type PlayerSkinId,
  skinColorToCss
} from '../data/playerSkins';
import {
  BACKGROUNDS,
  backgroundColorToCss,
  getBackground,
  type BackgroundDefinition,
  type BackgroundId
} from '../data/backgrounds';
import { getSkinAbility } from '../data/skinAbilities';
import type { GameSettings } from '../data/tuning';
import type { InputFrame } from '../input/InputManager';
import { SkinPreviewRenderer } from '../render/SkinPreviewRenderer';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

export class SkinSelectMenu {
  readonly element: HTMLDivElement;
  private readonly preview = new SkinPreviewRenderer();
  private readonly nameValue: HTMLHeadingElement;
  private readonly descriptionValue: HTMLParagraphElement;
  private readonly signatureValue: HTMLParagraphElement;
  private readonly metaValue: HTMLParagraphElement;
  private readonly previousButton: HTMLButtonElement;
  private readonly nextButton: HTMLButtonElement;
  private readonly backgroundCards = new Map<BackgroundId, HTMLButtonElement>();

  constructor(
    root: HTMLElement,
    private readonly settings: GameSettings,
    private readonly callbacks: {
      onChange: (skinId: PlayerSkinId) => void;
      onBackgroundChange: (backgroundId: BackgroundId) => void;
      onBack: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Select Skin', 'Hard-light identity');
    this.element = shell;
    panel.classList.add('skin-panel');

    const layout = document.createElement('div');
    layout.className = 'skin-select-layout';

    const details = document.createElement('div');
    details.className = 'skin-details';
    this.nameValue = document.createElement('h2');
    this.nameValue.className = 'skin-name';
    this.descriptionValue = document.createElement('p');
    this.descriptionValue.className = 'skin-description';
    this.signatureValue = document.createElement('p');
    this.signatureValue.className = 'skin-signature';
    this.metaValue = document.createElement('p');
    this.metaValue.className = 'skin-meta';
    details.append(this.nameValue, this.descriptionValue, this.signatureValue, this.metaValue);

    layout.append(this.preview.element, details);

    const nav = document.createElement('div');
    nav.className = 'skin-nav';
    this.previousButton = createButton('Previous Skin');
    this.nextButton = createButton('Next Skin', 'primary');
    this.previousButton.addEventListener('click', () => this.cycle(-1));
    this.nextButton.addEventListener('click', () => this.cycle(1));
    nav.append(this.previousButton, this.nextButton);

    const backgroundSection = this.createBackgroundSection();

    const back = createButton('Back');
    back.addEventListener('click', callbacks.onBack);

    panel.append(layout, nav, backgroundSection, back);
    root.append(shell);
    this.refresh();
  }

  show(): void {
    this.refresh();
    showElement(this.element);
  }

  hide(): void {
    hideElement(this.element);
  }

  update(input: InputFrame): void {
    navigateButtons(this.element, input);
    const active = document.activeElement as HTMLElement | null;
    const isBackgroundCard = active?.classList.contains('background-card') === true;
    if (input.menuLeftPressed) {
      if (isBackgroundCard) {
        this.focusAdjacentBackground(-1);
      } else {
        this.cycle(-1);
      }
    }
    if (input.menuRightPressed) {
      if (isBackgroundCard) {
        this.focusAdjacentBackground(1);
      } else {
        this.cycle(1);
      }
    }
  }

  refresh(): void {
    const skin = getPlayerSkin(this.settings.selectedSkin);
    this.preview.setSkin(skin);
    this.nameValue.textContent = skin.displayName;
    this.descriptionValue.textContent = skin.description;
    const ability = getSkinAbility(skin.id);
    this.signatureValue.textContent = `${ability.name}: ${ability.summary}`;
    this.metaValue.textContent = `${skin.trailStyle} / ${skin.projectileStyle}`;
    this.element.style.setProperty('--skin-primary', skinColorToCss(skin.primaryColor));
    this.element.style.setProperty('--skin-secondary', skinColorToCss(skin.secondaryColor));
    this.element.style.setProperty('--skin-accent', skinReadableAccentToCss(skin));
    const background = getBackground(this.settings.selectedBackground);
    this.element.style.setProperty('--background-primary', backgroundColorToCss(background.palette.primary));
    this.element.style.setProperty('--background-secondary', backgroundColorToCss(background.palette.secondary));
    this.element.style.setProperty('--background-accent', backgroundColorToCss(background.palette.accent));
    this.refreshBackgroundCards();
  }

  private cycle(direction: number): void {
    const index = Math.max(0, PLAYER_SKINS.findIndex((skin) => skin.id === this.settings.selectedSkin));
    const next = PLAYER_SKINS[(index + direction + PLAYER_SKINS.length) % PLAYER_SKINS.length];
    this.settings.selectedSkin = next.id;
    this.refresh();
    this.callbacks.onChange(next.id);
  }

  private createBackgroundSection(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'background-section';

    const heading = document.createElement('div');
    heading.className = 'background-heading';
    const title = document.createElement('h2');
    title.textContent = 'Backgrounds';
    const summary = document.createElement('p');
    summary.textContent = 'Reactive arenas, all unlocked for this prototype.';
    heading.append(title, summary);

    const grid = document.createElement('div');
    grid.className = 'background-card-grid';
    for (const background of BACKGROUNDS) {
      const card = this.createBackgroundCard(background);
      this.backgroundCards.set(background.id, card);
      grid.append(card);
    }

    section.append(heading, grid);
    return section;
  }

  private createBackgroundCard(background: BackgroundDefinition): HTMLButtonElement {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'background-card';
    card.dataset.backgroundId = background.id;
    card.style.setProperty('--background-card-primary', background.preview.primaryCss);
    card.style.setProperty('--background-card-secondary', background.preview.secondaryCss);
    card.style.setProperty('--background-card-accent', background.preview.accentCss);

    const preview = document.createElement('span');
    preview.className = 'background-preview';
    preview.dataset.pattern = background.preview.cssClass;
    preview.setAttribute('aria-hidden', 'true');

    const body = document.createElement('span');
    body.className = 'background-card-body';
    const name = document.createElement('strong');
    name.textContent = background.displayName;
    const tag = document.createElement('span');
    tag.className = 'background-card-tag';
    tag.textContent = background.tagline;
    const description = document.createElement('span');
    description.className = 'background-card-description';
    description.textContent = background.description;
    body.append(name, tag, description);

    card.append(preview, body);
    card.addEventListener('click', () => this.selectBackground(background.id));
    return card;
  }

  private selectBackground(backgroundId: BackgroundId): void {
    if (this.settings.selectedBackground === backgroundId) return;
    this.settings.selectedBackground = backgroundId;
    this.refresh();
    this.callbacks.onBackgroundChange(backgroundId);
  }

  private refreshBackgroundCards(): void {
    for (const [backgroundId, card] of this.backgroundCards) {
      const selected = backgroundId === this.settings.selectedBackground;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    }
  }

  private focusAdjacentBackground(direction: number): void {
    const ids = BACKGROUNDS.map((background) => background.id);
    const active = document.activeElement as HTMLElement | null;
    const activeId = active?.dataset.backgroundId as BackgroundId | undefined;
    const index = Math.max(0, ids.findIndex((id) => id === activeId));
    const next = ids[(index + direction + ids.length) % ids.length];
    this.backgroundCards.get(next)?.focus();
  }
}
