export interface Poolable {
  active: boolean;
  reset(): void;
}

export class ObjectPool<T extends Poolable> {
  readonly items: T[];

  constructor(create: (index: number) => T, capacity: number) {
    this.items = Array.from({ length: capacity }, (_, index) => create(index));
  }

  acquire(configure?: (item: T) => void): T | undefined {
    for (const item of this.items) {
      if (!item.active) {
        item.reset();
        item.active = true;
        configure?.(item);
        return item;
      }
    }
    return undefined;
  }

  forEachActive(callback: (item: T) => void): void {
    for (const item of this.items) {
      if (item.active) {
        callback(item);
      }
    }
  }

  countActive(): number {
    let count = 0;
    for (const item of this.items) {
      if (item.active) count += 1;
    }
    return count;
  }

  deactivateAll(): void {
    for (const item of this.items) {
      item.active = false;
    }
  }
}
