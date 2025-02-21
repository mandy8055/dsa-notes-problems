class DLLNode<T> {
  value: T;
  next: DLLNode<T> | null;
  prev: DLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque<T> {
  private head: DLLNode<T> | null = null;
  private tail: DLLNode<T> | null = null;
  private count: number = 0;

  // ADT's
  // addFirst, addLast, removeFirst, removeLast, peekFirst, peekLast, isEmpty
  get size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  addFirst(value: T): void {
    const newNode = new DLLNode(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.count++;
  }

  addLast(value: T): void {
    const newNode = new DLLNode(value);
    if (this.isEmpty()) {
      this.tail = this.head = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.count++;
  }

  removeFirst(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.head!.value;
    if (this.head === this.tail) {
      // Make empty
      this.head = this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }

    this.count--;
    return value;
  }

  removeLast(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.tail!.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    }

    this.count--;
    return value;
  }
}

function zeroOneBFS(graph: number[][], start: number): number[] {
  const n = graph.length;
  const dist = Array(n).fill(Infinity);
  const deque = new Deque<[number, number]>();

  dist[start] = 0;
  deque.addLast([start, 0]);

  while (!deque.isEmpty()) {
    const [node, d] = deque.removeFirst()!;

    // If found better path, skip
    if (d > dist[node]) continue;

    for (let next = 0; next < n; next++) {
      const weight = graph[node][next];
      if (weight === -1) continue; // No edge

      const newDist = d + weight;
      if (newDist < dist[next]) {
        dist[next] = newDist;
        if (weight === 0) {
          deque.addFirst([next, newDist]); // Add to front
        } else {
          deque.addLast([next, newDist]); // Add to back
        }
      }
    }
  }

  return dist;
}
