import type { Achievement } from '../game/AchievementSystem';

export class ToastSystem {
  readonly element: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.element = document.createElement('div');
    this.element.className = 'toast-stack';
    root.append(this.element);
  }

  showAchievement(achievement: Achievement): void {
    this.showMessage(
      `${achievement.name} unlocked`,
      `${achievement.gamerscore}G - ${achievement.description}`
    );
  }

  showMessage(titleText: string, bodyText: string): void {
    const toast = document.createElement('div');
    toast.className = 'toast';

    const title = document.createElement('div');
    title.className = 'toast-title';
    title.textContent = titleText;

    const body = document.createElement('div');
    body.className = 'toast-body';
    body.textContent = bodyText;

    toast.append(title, body);
    this.element.prepend(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 4200);
  }
}
