// Using sorting T.C: O(nlogn), S.C.: O(1)
function findKthLargest1(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}

// Using MinHeap T.C: O(nlogk) => worst caseO(nlogn), S.C: O(k) => worst case O(n)
type Compare<T> = (a: T, b: T) => number;

class MinHeap<T> {
  private heap: T[];
  private compare: Compare<T> = (a: T, b: T) =>
    typeof a === 'number' && typeof b === 'number'
      ? a - b
      : String(a).localeCompare(String(b));

  constructor(options: { initArr: T[] }) {
    this.heap = [];

    const { initArr } = options;
    if (initArr && initArr.length > 0) {
      this.buildHeap(initArr);
    }
  }

  get size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  insert(item: T): void {
    this.heap.push(item);
    this.siftUp(this.size - 1);
  }

  remove(): T | undefined {
    if (this.size === 0) return undefined;
    if (this.size === 1) return this.heap.pop();
    const last = this.heap.pop()!;
    const itemToRemove = this.heap[0];
    this.heap[0] = last;
    this.siftDown(0);
    return itemToRemove;
  }

  private buildHeap(initArr: T[]): void {
    this.heap = [...initArr];
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  private siftUp(i: number): void {
    while (i > 0) {
      const pIdx = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[pIdx], this.heap[i]) > 0) {
        [this.heap[pIdx], this.heap[i]] = [this.heap[i], this.heap[pIdx]];
        i = pIdx;
      } else break;
    }
  }

  private siftDown(i: number): void {
    while (true) {
      const lIdx = 2 * i + 1;
      const rIdx = 2 * i + 2;
      let s = i;
      if (lIdx < this.size && this.compare(this.heap[s], this.heap[lIdx]) > 0) {
        s = lIdx;
      }

      if (rIdx < this.size && this.compare(this.heap[s], this.heap[rIdx]) > 0) {
        s = rIdx;
      }

      if (i === s) break;
      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
      i = s;
    }
  }
}

function findKthLargest2(nums: number[], k: number): number {
  const minHeap = new MinHeap<number>({ initArr: nums });
  let i = nums.length - k;
  while (i--) {
    minHeap.remove();
  }
  return minHeap.peek()!;
}
