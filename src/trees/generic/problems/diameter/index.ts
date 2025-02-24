function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = -Infinity;

  const recurse = (node: TreeNode | null): number => {
    // Base case: if node is null, height is 0
    if (!node) return 0;

    // Recursively calculate heights of left and right subtrees
    const leftHeight = recurse(node.left);
    const rightHeight = recurse(node.right);

    // Calculate two possible paths:
    // 1. Path that doesn't pass through current node's root
    //    Take the maximum height of either left or right subtree
    //    This height can be used by parent nodes to form longer paths
    const heightThroughOneSubtree = Math.max(leftHeight, rightHeight);

    // 2. Path that passes through current node's root
    //    Combine both left and right heights to form a complete path
    const pathThroughRoot = leftHeight + rightHeight;

    // Update the maximum diameter found so far
    // Consider both cases: path through root and path through one subtree
    max = Math.max(max, heightThroughOneSubtree, pathThroughRoot);

    // Return height of current subtree to parent
    // Add 1 to account for the edge connecting to parent node
    return heightThroughOneSubtree + 1;
  };

  recurse(root);
  return max;
}
