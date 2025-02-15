class Queue<T> {
  private q: Record<number, T>;
  private front: number;
  private rear: number;

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
      this.front = this.rear = 0;
    }
    return itemToRemove;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const q = new Queue<TreeNode>();
  if (!root) return res;
  // init phase
  q.enqueue(root);
  while (!q.isEmpty()) {
    let sz = q.size;
    const temp: number[] = [];
    while (sz--) {
      const nd = q.dequeue()!;
      temp.push(nd.val);
      nd.left && q.enqueue(nd.left);
      nd.right && q.enqueue(nd.right);
    }
    res.push(temp);
  }

  return res;
}
