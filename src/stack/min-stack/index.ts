// Min stack with extra space(O(n))
type Pair = [number, number]; // val, prevMin
class MinStack1 {
  private stack: Pair[];

  constructor() {
    this.stack = [];
  }

  get size(): number {
    return this.stack.length;
  }

  private _top(): Pair {
    return this.stack[this.size - 1];
  }

  push(val: number): void {
    if (this.size === 0) {
      this.stack.push([val, val]);
      return;
    }
    const prevMin = this._top()[1];
    this.stack.push([val, Math.min(prevMin, val)]);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this._top()[0];
  }

  getMin(): number {
    return this._top()[1];
  }
}

// Min stack without extra space
class MinStack {
  private minEl: number;
  private stack: number[];

  constructor() {
    this.minEl = Infinity;
    this.stack = [];
  }

  get size(): number {
    return this.stack.length;
  }

  push(val: number): void {
    if (this.size === 0) {
      this.stack.push(val);
      this.minEl = val;
    }
    if (val >= this.minEl) {
      this.stack.push(val);
    } else {
      this.stack.push(2 * val - this.minEl);
      this.minEl = val;
    }
  }

  pop(): void {
    const top = this.stack.pop()!;
    if (top < this.minEl) {
      const prevMin = 2 * this.minEl - top;
      this.minEl = prevMin;
    }
    if (this.size === 0) {
      this.minEl = Infinity;
    }
  }

  top(): number {
    if (this.stack[this.size - 1] < this.minEl) return this.minEl;
    return this.stack[this.size - 1];
  }

  getMin(): number {
    return this.minEl;
  }
}
