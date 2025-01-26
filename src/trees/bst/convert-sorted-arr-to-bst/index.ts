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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const len = nums.length;
  const recurse = (l: number, r: number): TreeNode | null => {
    // base case
    if (l > r) {
      return null;
    }
    const mid = l + Math.trunc((r - l) / 2);
    const root = new TreeNode(nums[mid]);
    const lT = recurse(l, mid - 1);
    const rT = recurse(mid + 1, r);
    root.left = lT;
    root.right = rT;
    return root;
  };
  return recurse(0, len - 1);
}
