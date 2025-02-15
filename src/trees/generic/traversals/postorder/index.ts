function postorderTraversalRec(root: TreeNode | null): number[] {
  const res: number[] = [];
  const postOrder = (node: TreeNode | null): void => {
    // base case
    if (!node) return;
    // main case
    postOrder(node.left);
    postOrder(node.right);
    res.push(node.val);
  };

  postOrder(root);
  return res;
}

function postorderTraversalItr(root: TreeNode | null): number[] {
  const res: number[] = [];
  let curr = root;
  let lastVisited: TreeNode | null = null;
  const stack: TreeNode[] = [];
  while (stack.length > 0 || curr) {
    // Go as left as possible
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    const peek = stack[stack.length - 1];

    // If right is not processed
    if (peek.right && peek.right !== lastVisited) {
      curr = peek.right;
    } else {
      lastVisited = stack.pop()!;
      res.push(lastVisited.val);
    }
  }
  return res;
}
