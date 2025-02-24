// Using Map Less optimal(extra space for Map) but good
function buildTree1(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map();
  inorder.forEach((val, idx) => map.set(val, idx));

  let postIndex = postorder.length - 1; // Start from end in postorder

  const solve = (st: number, end: number): TreeNode | null => {
    if (st > end || postIndex < 0) return null;

    // Get last element as root (postorder property)
    const val = postorder[postIndex--];
    const i = map.get(val);

    const node = new TreeNode(val);

    // Build right first, then left (since we're going backwards)
    node.right = solve(i + 1, end);
    node.left = solve(st, i - 1);

    return node;
  };

  return solve(0, inorder.length - 1);
}

// Optimal
function buildTree2(inorder: number[], postorder: number[]): TreeNode | null {
  const len = inorder.length;
  let inIdx = len - 1;
  let postIdx = len - 1;
  const recurse = (rootVal: number): TreeNode | null => {
    // base case
    if (postIdx < 0) return null;
    if (inorder[inIdx] === rootVal) {
      inIdx--;
      return null;
    }

    // main case
    const root = new TreeNode(postorder[postIdx--]);

    root.right = recurse(root.val);
    root.left = recurse(rootVal);
    return root;
  };

  return recurse(NaN);
}
