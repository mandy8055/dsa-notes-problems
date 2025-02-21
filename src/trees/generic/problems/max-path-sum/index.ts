function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;

  const recurse = (node: TreeNode | null): number => {
    // base case
    if (!node) return 0;
    // main case
    const lh = recurse(node.left);
    const rh = recurse(node.right);
    // node + left + right is better
    const case1 = node.val + lh + rh;
    // node + left || node.right is better
    const case2 = node.val + Math.max(lh, rh);
    // node is better
    const case3 = node.val;

    maxSum = Math.max(maxSum, case1, case2, case3);
    return Math.max(case2, case3);
  };

  recurse(root);
  return maxSum;
}
