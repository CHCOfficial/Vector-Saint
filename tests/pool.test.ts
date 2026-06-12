import { describe, expect, it } from 'vitest';
import { ObjectPool, type Poolable } from '../src/utils/pool';

class TestItem implements Poolable {
  active = false;
  resets = 0;

  reset(): void {
    this.resets += 1;
  }
}

describe('ObjectPool', () => {
  it('reuses inactive items and reports active counts', () => {
    const pool = new ObjectPool(() => new TestItem(), 2);
    const first = pool.acquire();
    const second = pool.acquire();

    expect(first).toBeDefined();
    expect(second).toBeDefined();
    expect(pool.acquire()).toBeUndefined();
    expect(pool.countActive()).toBe(2);

    first!.active = false;
    const reused = pool.acquire();
    expect(reused).toBe(first);
    expect(reused!.resets).toBe(2);
  });
});
