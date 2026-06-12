import { ACHIEVEMENTS } from '../game/AchievementSystem';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

const PAGE_SIZE = 5;

export class AchievementsMenu {
  readonly element: HTMLDivElement;
  private readonly summaryValue: HTMLElement;
  private readonly list: HTMLDivElement;
  private readonly pageValue: HTMLElement;
  private readonly previousButton: HTMLButtonElement;
  private readonly nextButton: HTMLButtonElement;
  private page = 0;

  constructor(
    root: HTMLElement,
    private readonly getUnlocked: () => ReadonlySet<string>,
    callbacks: {
      onBack: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Achievements', 'Local 1000G proof set');
    this.element = shell;
    panel.classList.add('achievements-panel');

    this.summaryValue = document.createElement('div');
    this.summaryValue.className = 'achievements-summary';

    this.list = document.createElement('div');
    this.list.className = 'achievements-list';

    const nav = document.createElement('div');
    nav.className = 'achievements-nav';
    this.previousButton = createButton('Previous Page');
    this.nextButton = createButton('Next Page', 'primary');
    this.pageValue = document.createElement('div');
    this.pageValue.className = 'achievements-page';
    this.previousButton.addEventListener('click', () => this.changePage(-1));
    this.nextButton.addEventListener('click', () => this.changePage(1));
    nav.append(this.previousButton, this.pageValue, this.nextButton);

    const back = createButton('Back');
    back.addEventListener('click', callbacks.onBack);

    panel.append(this.summaryValue, this.list, nav, back);
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
    if (input.menuLeftPressed) this.changePage(-1);
    if (input.menuRightPressed) this.changePage(1);
  }

  refresh(): void {
    const unlocked = this.getUnlocked();
    const unlockedItems = ACHIEVEMENTS.filter((achievement) => unlocked.has(achievement.id));
    const earned = unlockedItems.reduce((sum, achievement) => sum + achievement.gamerscore, 0);
    const total = ACHIEVEMENTS.reduce((sum, achievement) => sum + achievement.gamerscore, 0);
    const pageCount = this.pageCount;
    this.page = Math.min(this.page, pageCount - 1);

    this.summaryValue.textContent = `${unlockedItems.length}/${ACHIEVEMENTS.length} unlocked · ${earned}/${total}G`;
    this.pageValue.textContent = `${this.page + 1} / ${pageCount}`;
    this.previousButton.disabled = pageCount <= 1;
    this.nextButton.disabled = pageCount <= 1;
    this.list.replaceChildren();

    const start = this.page * PAGE_SIZE;
    const pageItems = ACHIEVEMENTS.slice(start, start + PAGE_SIZE);
    for (const achievement of pageItems) {
      const isUnlocked = unlocked.has(achievement.id);
      const item = document.createElement('div');
      item.className = `achievement-item ${isUnlocked ? 'is-unlocked' : 'is-locked'}`;

      const header = document.createElement('div');
      header.className = 'achievement-header';

      const name = document.createElement('strong');
      name.textContent = achievement.name;

      const score = document.createElement('span');
      score.textContent = `${achievement.gamerscore}G`;
      header.append(name, score);

      const description = document.createElement('p');
      description.textContent = achievement.description;

      const status = document.createElement('span');
      status.className = 'achievement-status';
      status.textContent = isUnlocked ? 'Unlocked' : 'Locked';

      item.append(header, description, status);
      this.list.append(item);
    }
  }

  private changePage(direction: number): void {
    this.page = (this.page + direction + this.pageCount) % this.pageCount;
    this.refresh();
  }

  private get pageCount(): number {
    return Math.max(1, Math.ceil(ACHIEVEMENTS.length / PAGE_SIZE));
  }
}
