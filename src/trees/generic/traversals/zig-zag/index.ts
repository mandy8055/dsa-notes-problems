// Naive T.C: O(n^2)
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const q = new MyQueue<TreeNode>();
  const res: number[][] = [];
  let lvl = 0;
  // edge case
  if (!root) return res;
  // init phase
  q.enqueue(root);
  while (!q.isEmpty()) {
    const temp: number[] = [];
    let sz = q.size;
    while (sz--) {
      const nd = q.dequeue()!;
      temp.push(nd.val);
      nd.left && q.enqueue(nd.left);
      nd.right && q.enqueue(nd.right);
    }
    if (lvl % 2 === 0) {
      res.push(temp);
    } else {
      temp.reverse(); // Overhead
      res.push(temp);
    }
    lvl++;
  }
  return res;
}

// Optimal
function zigzagLevelOrder2(root: TreeNode | null): number[][] {
  const q = new MyQueue<TreeNode>();
  const res: number[][] = [];
  let lvl = 0;
  // edge case
  if (!root) return res;
  // init phase
  q.enqueue(root);
  while (!q.isEmpty()) {
    const temp: number[] = [];
    let sz = q.size;
    for (let i = 0; i < sz; i++) {
      const nd = q.dequeue()!;
      nd.left && q.enqueue(nd.left);
      nd.right && q.enqueue(nd.right);
      const idx = lvl % 2 === 0 ? i : sz - i - 1;
      temp[idx] = nd.val;
    }
    res.push(temp);
    lvl++;
  }
  return res;
}
