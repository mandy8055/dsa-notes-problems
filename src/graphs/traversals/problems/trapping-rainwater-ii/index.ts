// Use this as well type Compare<T> = (a: T, b: T) => number;

class PQ<T> {
  private heap: T[];
  private compare: Compare<T>;

  constructor(options: { compare: Compare<T> }) {
    this.heap = [];
    this.compare = options.compare;
  }

  get size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(item: T): void {
    this.heap.push(item);
    this.siftUp(this.size - 1);
  }

  peek(): T | null {
    if (this.size === 0) return null;
    return this.heap[0];
  }

  dequeue(): T | null {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop()!;
    const last = this.heap.pop()!;
    const itemToRemove = this.heap[0];
    this.heap[0] = last;
    this.siftDown(0);
    return itemToRemove;
  }

  private siftUp(i: number): void {
    while (i > 0) {
      const pIdx = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[pIdx], this.heap[i]) > 0) {
        [this.heap[pIdx], this.heap[i]] = [this.heap[i], this.heap[pIdx]];
        i = pIdx;
      } else {
        break;
      }
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

      if (s === i) break;
      [this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]];
      i = s;
    }
  }
}

function trapRainWater(heightMap: number[][]): number {
  const pq = new PQ<[number, number, number]>({
    compare: (a, b) => a[2] - b[2],
  }); // i, j, h
  const visited = new Set<string>();
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  // Iterate over the boundaries only and store them in the priority queue
  const m = heightMap.length;
  const n = heightMap[0].length;

  // 0th col and n - 1 col
  for (let r = 0; r < m; r++) {
    for (let c of [0, n - 1]) {
      pq.enqueue([r, c, heightMap[r][c]]);
      visited.add(`${r},${c}`);
    }
  }

  // 0th row and m - 1 row
  for (let c = 0; c < n; c++) {
    for (let r of [0, m - 1]) {
      pq.enqueue([r, c, heightMap[r][c]]);
      visited.add(`${r},${c}`);
    }
  }

  let total = 0;
  while (!pq.isEmpty()) {
    const [i, j, h] = pq.dequeue()!;
    for (let [r, c] of DIRECTIONS) {
      const nr = r + i;
      const nc = c + j;

      if (
        nr < m &&
        nc < n &&
        nr >= 0 &&
        nc >= 0 &&
        !visited.has(`${nr},${nc}`)
      ) {
        total += Math.max(h - heightMap[nr][nc], 0);
        pq.enqueue([nr, nc, Math.max(h, heightMap[nr][nc])]);
        visited.add(`${nr},${nc}`);
      }
    }
  }

  return total;
}
