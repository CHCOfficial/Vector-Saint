import type { InputFrame } from '../input/InputManager';

export type MenuButtonRole = HTMLElement;

export function createMenuShell(title: string, kicker: string): {
  shell: HTMLDivElement;
  panel: HTMLDivElement;
} {
  const shell = document.createElement('div');
  shell.className = 'menu-shell ui-hidden';

  const panel = document.createElement('div');
  panel.className = 'menu-panel';

  const heading = document.createElement('h1');
  heading.className = 'game-title';
  heading.textContent = title;

  const subtitle = document.createElement('p');
  subtitle.className = 'menu-kicker';
  subtitle.textContent = kicker;

  panel.append(heading, subtitle);
  shell.append(panel);
  return { shell, panel };
}

export function createButton(label: string, className = ''): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = `menu-button ${className}`.trim();
  button.type = 'button';
  button.textContent = label;
  return button;
}

export function showElement(element: HTMLElement): void {
  element.classList.remove('ui-hidden');
  focusFirst(element);
}

export function hideElement(element: HTMLElement): void {
  element.classList.add('ui-hidden');
}

export function focusFirst(container: HTMLElement): void {
  const first = getFocusable(container)[0];
  first?.focus();
}

export function navigateButtons(container: HTMLElement, input: InputFrame): void {
  if (container.classList.contains('ui-hidden')) return;

  const focusable = getFocusable(container);
  if (focusable.length === 0) return;

  const active = document.activeElement as HTMLElement | null;
  let index = Math.max(0, focusable.findIndex((item) => item === active));

  if (input.menuDownPressed) {
    index = (index + 1) % focusable.length;
    focusable[index].focus();
  } else if (input.menuUpPressed) {
    index = (index - 1 + focusable.length) % focusable.length;
    focusable[index].focus();
  }

  if (input.confirmPressed) {
    const focused = document.activeElement as HTMLElement | null;
    focused?.click();
  }
}

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]'));
}

export class Menu {
  readonly element: HTMLDivElement;
  private readonly highScoreValue: HTMLElement;

  constructor(
    root: HTMLElement,
    callbacks: {
      onStart: () => void;
      onSkinSelect: () => void;
      onAchievements: () => void;
      onLeaderboard: () => void;
      onControls: () => void;
      onSettings: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Vector Saint', 'Sacred geometry arcade');
    this.element = shell;
    panel.classList.add('main-menu-panel');

    const stat = document.createElement('div');
    stat.className = 'menu-stat';
    stat.append(document.createTextNode('High score'));
    this.highScoreValue = document.createElement('strong');
    this.highScoreValue.textContent = '0';
    stat.append(this.highScoreValue);

    const actions = document.createElement('div');
    actions.className = 'menu-actions';
    const start = createButton('Start Run', 'primary');
    const skin = createButton('Select Skin');
    const achievements = createButton('Achievements');
    const leaderboard = createButton('Leaderboard');
    const controls = createButton('Controls');
    const settings = createButton('Settings');
    start.addEventListener('click', callbacks.onStart);
    skin.addEventListener('click', callbacks.onSkinSelect);
    achievements.addEventListener('click', callbacks.onAchievements);
    leaderboard.addEventListener('click', callbacks.onLeaderboard);
    controls.addEventListener('click', callbacks.onControls);
    settings.addEventListener('click', callbacks.onSettings);
    actions.append(start, skin, achievements, leaderboard, controls, settings);

    const support = document.createElement('a');
    support.className = 'support-link';
    support.href = 'https://buymeacoffee.com/chcofficial';
    support.target = '_blank';
    support.rel = 'noopener noreferrer';
    support.append(document.createTextNode('Support CHCOfficial'));
    const supportBrand = document.createElement('span');
    supportBrand.textContent = 'BuyMeACoffee';
    support.append(supportBrand);

    panel.append(stat, actions, support);
    root.append(shell);
  }

  setHighScore(score: number): void {
    this.highScoreValue.textContent = score.toLocaleString();
  }

  show(): void {
    showElement(this.element);
  }

  hide(): void {
    hideElement(this.element);
  }

  update(input: InputFrame): void {
    navigateButtons(this.element, input);
  }
}
