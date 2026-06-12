import { sanitizeLeaderboardInitials } from '../game/SaveSystem';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

const INITIALS_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export class InitialsEntryScreen {
  readonly element: HTMLDivElement;
  private readonly scoreValue: HTMLElement;
  private readonly waveValue: HTMLElement;
  private readonly slotButtons: HTMLButtonElement[] = [];
  private initials = ['A', 'A', 'A'];
  private selectedIndex = 0;
  private active = false;
  private submitted = false;
  private lastInitials = 'AAA';

  constructor(
    root: HTMLElement,
    private readonly callbacks: {
      onSubmit: (initials: string) => void;
    }
  ) {
    const { shell, panel } = createMenuShell('New Record', 'Enter initials');
    this.element = shell;
    panel.classList.add('initials-panel');

    const stat = document.createElement('div');
    stat.className = 'menu-stat initials-stat';
    const score = document.createElement('div');
    this.scoreValue = document.createElement('strong');
    score.append(document.createTextNode('Score '), this.scoreValue);
    const wave = document.createElement('div');
    this.waveValue = document.createElement('strong');
    wave.append(document.createTextNode('Wave '), this.waveValue);
    stat.append(score, wave);

    const slots = document.createElement('div');
    slots.className = 'initials-slots';
    for (let i = 0; i < 3; i += 1) {
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'initials-slot';
      slot.addEventListener('click', () => this.selectSlot(i));
      this.slotButtons.push(slot);
      slots.append(slot);
    }

    const actions = document.createElement('div');
    actions.className = 'initials-actions';
    const previous = createButton('Previous Letter');
    const next = createButton('Next Letter', 'primary');
    const save = createButton('Save Score', 'primary');
    previous.addEventListener('click', () => this.cycleSelected(-1));
    next.addEventListener('click', () => this.cycleSelected(1));
    save.addEventListener('click', () => this.submit());
    actions.append(previous, next, save);

    panel.append(stat, slots, actions);
    root.append(shell);
    window.addEventListener('keydown', this.onKeyDown);
    this.refresh();
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  setRun(score: number, wave: number): void {
    this.scoreValue.textContent = Math.max(0, Math.floor(score)).toLocaleString();
    this.waveValue.textContent = String(Math.max(1, Math.floor(wave)));
  }

  show(): void {
    this.active = true;
    this.submitted = false;
    this.selectedIndex = 0;
    this.initials = sanitizeLeaderboardInitials(this.lastInitials).split('');
    this.refresh();
    showElement(this.element);
    this.slotButtons[0]?.focus();
  }

  hide(): void {
    this.active = false;
    hideElement(this.element);
  }

  update(input: InputFrame): void {
    navigateButtons(this.element, input);
    if (input.lastDevice === 'gamepad' && input.menuLeftPressed) {
      this.selectSlot(this.selectedIndex - 1);
    }
    if (input.lastDevice === 'gamepad' && input.menuRightPressed) {
      this.selectSlot(this.selectedIndex + 1);
    }
  }

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    if (!this.active || this.element.classList.contains('ui-hidden')) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    if (/^[a-z0-9]$/i.test(event.key)) {
      this.initials[this.selectedIndex] = event.key.toUpperCase();
      this.selectSlot(this.selectedIndex + 1);
      event.preventDefault();
      return;
    }

    if (event.code === 'Backspace') {
      this.initials[this.selectedIndex] = 'A';
      this.selectSlot(this.selectedIndex - 1);
      event.preventDefault();
      return;
    }

    if (event.code === 'ArrowLeft') {
      this.selectSlot(this.selectedIndex - 1);
      event.preventDefault();
      return;
    }

    if (event.code === 'ArrowRight') {
      this.selectSlot(this.selectedIndex + 1);
      event.preventDefault();
      return;
    }

    if (event.code === 'Enter') {
      this.submit();
      event.preventDefault();
    }
  };

  private selectSlot(index: number): void {
    this.selectedIndex = (index + this.slotButtons.length) % this.slotButtons.length;
    this.refresh();
    this.slotButtons[this.selectedIndex]?.focus();
  }

  private cycleSelected(direction: number): void {
    const current = this.initials[this.selectedIndex];
    const currentIndex = Math.max(0, INITIALS_CHARACTERS.indexOf(current));
    const nextIndex =
      (currentIndex + direction + INITIALS_CHARACTERS.length) % INITIALS_CHARACTERS.length;
    this.initials[this.selectedIndex] = INITIALS_CHARACTERS[nextIndex];
    this.refresh();
    this.slotButtons[this.selectedIndex]?.focus();
  }

  private submit(): void {
    if (this.submitted) return;
    this.submitted = true;
    this.active = false;
    const initials = sanitizeLeaderboardInitials(this.initials.join(''));
    this.lastInitials = initials;
    this.callbacks.onSubmit(initials);
  }

  private refresh(): void {
    this.slotButtons.forEach((button, index) => {
      button.textContent = this.initials[index];
      button.classList.toggle('is-active', index === this.selectedIndex);
    });
  }
}
