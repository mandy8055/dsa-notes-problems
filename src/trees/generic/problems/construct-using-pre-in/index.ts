// O(n^2) solution - Naive 1
function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
  const len = preorder.length;
  const recurse = (idx: number, st: number, end: number): TreeNode | null => {
    // base case
    if (st > end) return null;
    // main case
    // 1. Find preorder[idx] in inorder array
    // 2. Create a node using preorder[idx]
    // 3. recursively contruct left and right subtree
    // 4. return root.
    const i = inorder.indexOf(preorder[idx]); // indexOf contributes to O(n). needs to be optimized
    const root = new TreeNode(preorder[idx]);
    const leftSize = i - st;
    root.left = recurse(idx + 1, st, i - 1);
    // Since idx is passed by value so once it comes back after processing left nodes it points to 0 again that is why we have skip left size so for right it is passed idx + leftSize + 1.
    root.right = recurse(idx + leftSize + 1, i + 1, end);
    return root;
  };
  return recurse(0, 0, len - 1);
}

// Using idx as global var
function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
  const len = preorder.length;
  let idx = 0;
  const recurse = (st: number, end: number): TreeNode | null => {
    // base case
    if (st > end) return null;
    // main case
    const i = inorder.indexOf(preorder[idx]);
    const root = new TreeNode(preorder[idx++]); // Here idx is updated directly
    root.left = recurse(st, i - 1);
    root.right = recurse(i + 1, end);
    return root;
  };
  return recurse(0, len - 1);
}

// How to get rid of extra O(n) which was incurred by indexOf? Use a map. T.C: O(n), T.C: O(n) stack + O(n) map.
function buildTree3(preorder: number[], inorder: number[]): TreeNode | null {
  const len = preorder.length;
  let idx = 0;
  const map = new Map<number, number>();
  inorder.forEach((val, i) => map.set(val, i));
  const recurse = (st: number, end: number): TreeNode | null => {
    // base case
    if (st > end) return null;
    // main case
    // const i = inorder.indexOf(preorder[idx]);
    const i = map.get(preorder[idx])!; // O(1) now
    const root = new TreeNode(preorder[idx++]); // Here idx is updated directly
    root.left = recurse(st, i - 1);
    root.right = recurse(i + 1, end);
    return root;
  };
  return recurse(0, len - 1);
}

// T.C: O(n), S.C: O(1)
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let preIdx = 0; // tracks current element in preorder
  let inIdx = 0; // tracks current element in inorder

  const recurse = (parentVal: number): TreeNode | null => {
    // Base cases:
    // 1. If we've used all preorder elements
    if (preIdx >= preorder.length) return null;
    // 2. If current inorder value matches parent value
    // This means we've completed current subtree
    if (inorder[inIdx] === parentVal) {
      inIdx++; // move to next inorder element
      return null;
    }

    // Create node from current preorder element
    const root = new TreeNode(preorder[preIdx++]);

    // Build left subtree - bounded by current node's value
    root.left = recurse(root.val);

    // Build right subtree - bounded by parent's value
    root.right = recurse(parentVal);

    return root;
  };

  return recurse(NaN); // NaN is initial bound (never equals any number)
}
