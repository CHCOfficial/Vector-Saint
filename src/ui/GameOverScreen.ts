import type { ActiveRelicSummary } from '../game/RelicSystem';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

export class GameOverScreen {
  readonly element: HTMLDivElement;
  private readonly scoreValue: HTMLElement;
  private readonly waveValue: HTMLElement;
  private readonly highValue: HTMLElement;
  private readonly relicList: HTMLDivElement;

  constructor(
    root: HTMLElement,
    callbacks: {
      onRetry: () => void;
      onMainMenu: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Run Ended', 'Signal lost');
    this.element = shell;

    const stat = document.createElement('div');
    stat.className = 'menu-stat';
    const left = document.createElement('div');
    this.scoreValue = document.createElement('strong');
    this.waveValue = document.createElement('strong');
    this.highValue = document.createElement('strong');
    left.append(
      document.createTextNode('Score '),
      this.scoreValue,
      document.createElement('br'),
      document.createTextNode('Wave '),
      this.waveValue
    );
    const right = document.createElement('div');
    right.append(document.createTextNode('High '), this.highValue);
    stat.append(left, right);

    this.relicList = document.createElement('div');
    this.relicList.className = 'active-relic-list run-summary-relics';

    const actions = document.createElement('div');
    actions.className = 'menu-actions';
    const retry = createButton('Retry', 'primary');
    const menu = createButton('Main Menu');
    retry.addEventListener('click', callbacks.onRetry);
    menu.addEventListener('click', callbacks.onMainMenu);
    actions.append(retry, menu);
    panel.append(stat, this.relicList, actions);
    root.append(shell);
  }

  setResults(
    score: number,
    wave: number,
    highScore: number,
    relics: ActiveRelicSummary[] = [],
    overdriveCharge = 0
  ): void {
    this.scoreValue.textContent = score.toLocaleString();
    this.waveValue.textContent = String(wave);
    this.highValue.textContent = highScore.toLocaleString();
    this.renderRelics(relics, overdriveCharge);
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

  private renderRelics(relics: ActiveRelicSummary[], overdriveCharge: number): void {
    this.relicList.replaceChildren();
    if (relics.length === 0) {
      this.relicList.classList.add('is-empty');
      this.relicList.textContent = 'No relics drafted.';
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
      const item = document.createElement('div');
      item.className = 'active-relic-item relic-overdrive';
      const title = document.createElement('strong');
      title.textContent = 'Overdrive';
      const effect = document.createElement('span');
      effect.textContent = `${Math.round(overdriveCharge * 100)}% charged`;
      item.append(title, effect);
      this.relicList.append(item);
    }
  }
}
