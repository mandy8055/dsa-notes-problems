class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversalRec(root: TreeNode | null): number[] {
  const res: number[] = [];
  const inOrder = (node: TreeNode | null): void => {
    // base case
    if (!node) return;
    // main case
    inOrder(node.left);
    res.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);

  return res;
}

function inorderTraversalItr(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let curr = root;
  while (curr || stack.length > 0) {
    // Go as left as possible
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    // Process the curr node
    curr = stack.pop()!;
    res.push(curr.val);
    // Process right
    curr = curr.right;
  }

  return res;
}
