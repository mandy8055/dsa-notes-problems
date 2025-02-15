// Recursive T.C: O(n), S.C: O(n)
function preorderTraversalRec(root: TreeNode | null): number[] {
  const res: number[] = [];
  const preOrder = (node: TreeNode | null): void => {
    // base case
    if (!node) return;
    // main case
    res.push(node.val);
    preOrder(node.left);
    preOrder(node.right);
  };

  preOrder(root);
  return res;
}

// T.C: O(n)
// Not space efficient since all the nulls are also being pushed
function preOrderTraversalItr1(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: (TreeNode | null)[] = [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;
    res.push(node.val);
    stack.push(node.right, node.left);
  }

  return res;
}
// Space efficient
function preorderTraversalItr2(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  if (!root) return res;
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop()!;
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
}
