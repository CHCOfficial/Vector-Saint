import { LEADERBOARD_LIMIT, type LeaderboardEntry } from '../game/SaveSystem';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

export class LeaderboardMenu {
  readonly element: HTMLDivElement;
  private readonly summaryValue: HTMLElement;
  private readonly list: HTMLDivElement;

  constructor(
    root: HTMLElement,
    private readonly getEntries: () => readonly LeaderboardEntry[],
    callbacks: {
      onBack: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Leaderboard', 'Local arcade records');
    this.element = shell;
    panel.classList.add('leaderboard-panel');

    this.summaryValue = document.createElement('div');
    this.summaryValue.className = 'leaderboard-summary';

    this.list = document.createElement('div');
    this.list.className = 'leaderboard-list';

    const back = createButton('Back');
    back.addEventListener('click', callbacks.onBack);

    panel.append(this.summaryValue, this.list, back);
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
  }

  refresh(): void {
    const entries = this.getEntries();
    this.summaryValue.textContent = `${entries.length}/${LEADERBOARD_LIMIT} records`;
    this.list.replaceChildren();

    if (entries.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'leaderboard-empty';
      empty.textContent = 'No scores recorded';
      this.list.append(empty);
      return;
    }

    entries.forEach((entry, index) => {
      const row = document.createElement('div');
      row.className = 'leaderboard-row';

      const rank = document.createElement('span');
      rank.className = 'leaderboard-rank';
      rank.textContent = `#${index + 1}`;

      const initials = document.createElement('strong');
      initials.className = 'leaderboard-initials';
      initials.textContent = entry.initials;

      const score = document.createElement('span');
      score.className = 'leaderboard-score';
      score.textContent = entry.score.toLocaleString();

      const wave = document.createElement('span');
      wave.className = 'leaderboard-wave';
      wave.textContent = `Wave ${entry.wave}`;

      const date = document.createElement('span');
      date.className = 'leaderboard-date';
      date.textContent = formatDate(entry.date);

      row.append(rank, initials, score, wave, date);
      this.list.append(row);
    });
  }
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: '2-digit',
    year: '2-digit'
  });
}
