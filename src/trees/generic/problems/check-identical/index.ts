function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // base cases
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  // main case
  const lst = isSameTree(p.left, q.left);
  const rst = isSameTree(p.right, q.right);
  if (!lst || !rst) return false;
  return true;
}
