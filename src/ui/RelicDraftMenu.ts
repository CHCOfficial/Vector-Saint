import type { RelicDefinition, RelicId } from '../data/relics';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

export class RelicDraftMenu {
  readonly element: HTMLDivElement;
  private readonly cards: HTMLDivElement;
  private readonly waveValue: HTMLElement;
  private choices: RelicDefinition[] = [];

  constructor(
    root: HTMLElement,
    private readonly callbacks: {
      onSelect: (id: RelicId) => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Relic Draft', 'Between-wave sanctum');
    this.element = shell;
    panel.classList.add('relic-draft-panel');

    const intro = document.createElement('div');
    intro.className = 'relic-draft-intro';
    intro.append(document.createTextNode('Wave cleared'));
    this.waveValue = document.createElement('strong');
    this.waveValue.textContent = '1';
    intro.append(this.waveValue);

    this.cards = document.createElement('div');
    this.cards.className = 'relic-card-grid';

    panel.append(intro, this.cards);
    root.append(shell);
  }

  setChoices(wave: number, choices: RelicDefinition[]): void {
    this.choices = choices;
    this.waveValue.textContent = String(Math.max(1, wave - 1));
    this.renderChoices();
  }

  show(): void {
    this.renderChoices();
    showElement(this.element);
  }

  hide(): void {
    hideElement(this.element);
  }

  update(input: InputFrame): void {
    navigateButtons(this.element, input);
  }

  private renderChoices(): void {
    this.cards.replaceChildren();

    for (const relic of this.choices) {
      const card = createButton('', `relic-card relic-${relic.category}`);
      card.addEventListener('click', () => this.callbacks.onSelect(relic.id));

      const category = document.createElement('span');
      category.className = 'relic-category';
      category.textContent = relic.category;

      const name = document.createElement('strong');
      name.className = 'relic-name';
      name.textContent = relic.name;

      const effect = document.createElement('span');
      effect.className = 'relic-effect';
      effect.textContent = relic.effect;

      card.append(category, name, effect);

      if (relic.downside) {
        const downside = document.createElement('span');
        downside.className = 'relic-downside';
        downside.textContent = relic.downside;
        card.append(downside);
      }

      this.cards.append(card);
    }
  }
}
