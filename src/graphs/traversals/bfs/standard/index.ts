class Queue<T> {
  q: { [key: number]: T };
  front: number;
  rear: number;

  constructor() {
    this.q = {};
    this.front = 0;
    this.rear = 0;
  }

  get size(): number {
    return this.rear - this.front;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(item: T): void {
    this.q[this.rear++] = item;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const itemToRemove = this.q[this.front];
    delete this.q[this.front++];
    if (this.isEmpty()) {
      this.rear = this.front = 0;
    }
    return itemToRemove;
  }
}

function bfsOfGraph(adj: number[][]): number[] {
  const q = new Queue<number>();
  const len = adj.length;
  const visited = new Array(len).fill(0);
  const res: number[] = [];
  // init phase
  q.enqueue(0);
  visited[0] = 1;
  res.push(0);
  while (!q.isEmpty()) {
    const v = q.dequeue()!;
    for (let nbr of adj[v]) {
      if (visited[nbr] === 0) {
        visited[nbr] = 1;
        res.push(nbr);
        q.enqueue(nbr);
      }
    }
  }
  return res;
}
