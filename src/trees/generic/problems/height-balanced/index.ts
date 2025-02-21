// Brute Force T.C: O(n^2), S.C: O(n) stack space
function isBalanced(root: TreeNode | null): boolean {
  const height = (node: TreeNode | null): number => {
    // base case
    if (!node) return 0;
    // main case
    const lh = height(node.left);
    const rh = height(node.right);
    return Math.max(lh, rh) + 1;
  };

  const check = (node: TreeNode | null): boolean => {
    // base case
    if (!node) return true;
    // main case
    const lh = height(node.left);
    const rh = height(node.right);
    if (Math.abs(lh - rh) > 1) return false;
    const checkLeft = check(node.left);
    const checkRight = check(node.right);

    if (!checkLeft || !checkRight) return false;
    return true;
  };

  return check(root);
}

// Optimal T.C: O(n), S.C: O(n) stack space
function isBalancedOpt(root: TreeNode | null): boolean {
  const height = (node: TreeNode | null): number => {
    // base case
    if (!node) return 0;
    // main case
    const lh = height(node.left);
    const rh = height(node.right);
    if (lh === -1 || rh === -1) return -1;
    if (Math.abs(lh - rh) > 1) return -1;
    return Math.max(lh, rh) + 1;
  };

  return height(root) !== -1;
}
