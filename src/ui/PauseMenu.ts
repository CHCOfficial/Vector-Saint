import type { ActiveRelicSummary } from '../game/RelicSystem';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

export class PauseMenu {
  readonly element: HTMLDivElement;
  private readonly relicList: HTMLDivElement;

  constructor(
    root: HTMLElement,
    callbacks: {
      onResume: () => void;
      onRestart: () => void;
      onSkinSelect: () => void;
      onSettings: () => void;
      onMainMenu: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Paused', 'Run suspended');
    this.element = shell;

    this.relicList = document.createElement('div');
    this.relicList.className = 'active-relic-list';

    const actions = document.createElement('div');
    actions.className = 'menu-actions';
    const resume = createButton('Resume', 'primary');
    const restart = createButton('Restart Run');
    const skin = createButton('Select Skin');
    const settings = createButton('Settings');
    const menu = createButton('Main Menu');
    resume.addEventListener('click', callbacks.onResume);
    restart.addEventListener('click', callbacks.onRestart);
    skin.addEventListener('click', callbacks.onSkinSelect);
    settings.addEventListener('click', callbacks.onSettings);
    menu.addEventListener('click', callbacks.onMainMenu);
    actions.append(resume, restart, skin, settings, menu);
    panel.append(this.relicList, actions);
    root.append(shell);
  }

  setRelics(relics: ActiveRelicSummary[], overdriveCharge = 0): void {
    this.relicList.replaceChildren();
    if (relics.length === 0) {
      this.relicList.classList.add('is-empty');
      this.relicList.textContent = 'No relics drafted this run.';
      return;
    }

    this.relicList.classList.remove('is-empty');
    for (const relic of relics) {
      const item = document.createElement('div');
      item.className = 'active-relic-item';
      const title = document.createElement('strong');
      title.textContent = relic.stacks > 1 ? `${relic.name} x${relic.stacks}` : relic.name;
      const effect = document.createElement('span');
      effect.textContent = relic.effect;
      item.append(title, effect);
      this.relicList.append(item);
    }

    if (overdriveCharge > 0) {
      const overdrive = document.createElement('div');
      overdrive.className = 'active-relic-item relic-overdrive';
      const title = document.createElement('strong');
      title.textContent = 'Overdrive';
      const effect = document.createElement('span');
      effect.textContent = `${Math.round(overdriveCharge * 100)}% charged`;
      overdrive.append(title, effect);
      this.relicList.append(overdrive);
    }
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
