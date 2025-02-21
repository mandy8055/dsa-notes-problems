# Binary Tree Maximum Path Sum

## Problem number

[LC-124](https://leetcode.com/problems/binary-tree-maximum-path-sum)

## Pattern

DFS (Post-order) with Global Max Tracking

- Time: O(n)
- Space: O(h) stack space

## Key Insight

- Track global max for paths that split, return max for paths that continue up
- **Brute force**: Calculate sum for every possible path O(n²)

## Test Case

Input: `[1,2,3]`
Expected: 6 (path: 2->1->3)

## Steps

1. Use global variable to track max path sum
2. **Case 1**, if we have already got a path in any subtree. No need to return it above since we already got a path. (lSum + rSum + node.val)
3. **Case 2**, lSum + node.val || rSum + node.val gets the answer. We can return them since they can make a path with previous recursive call()
4. **Case 3**, only node.val is best since others are smaller.
5. Update global max with all possible cases at each node.
6. return only maximum of **Case 2** and **Case 3**.

## Watch

- Handle negative values (use 0 if subtree sum negative)
- Consider all three cases: split path, single path, node only

## Similar

- Path Sum III
- Diameter of Binary Tree
