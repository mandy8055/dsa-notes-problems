function maxDepth(root: TreeNode | null): number {
  const recurse = (node: TreeNode | null): number => {
    // base case
    if (!node) return 0;
    // main case
    const lh = recurse(node.left);
    const rh = recurse(node.right);
    return Math.max(lh, rh) + 1;
  };

  return recurse(root);
}
