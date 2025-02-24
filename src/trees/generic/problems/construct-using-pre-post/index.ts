function constructFromPrePost1(
  preorder: number[],
  postorder: number[],
): TreeNode | null {
  let preIndex = 0;

  const solve = (start: number, end: number): TreeNode | null => {
    // Base case
    if (start > end) return null;
    if (start === end) {
      preIndex++;
      return new TreeNode(preorder[preIndex - 1]);
    }

    // Create root from current preorder element
    const root = new TreeNode(preorder[preIndex++]);

    // Find left child value in postorder to determine boundary
    const leftVal = preorder[preIndex];
    let mid = start;
    while (postorder[mid] !== leftVal) mid++;

    // Recursive calls
    root.left = solve(start, mid);
    root.right = solve(mid + 1, end - 1);

    return root;
  };

  return solve(0, preorder.length - 1);
}

function constructFromPrePost2(
  preorder: number[],
  postorder: number[],
): TreeNode | null {
  const map = new Map();
  postorder.forEach((val, idx) => map.set(val, idx));
  let preIndex = 0;

  const solve = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;
    if (start === end) {
      preIndex++;
      return new TreeNode(preorder[preIndex - 1]);
    }

    const root = new TreeNode(preorder[preIndex++]);
    const mid = map.get(preorder[preIndex]);

    root.left = solve(start, mid);
    root.right = solve(mid + 1, end - 1);

    return root;
  };

  return solve(0, preorder.length - 1);
}
