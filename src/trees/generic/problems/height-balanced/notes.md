# Height Balanced Binary Tree

## Problem number

[LC-110](https://leetcode.com/problems/balanced-binary-tree)

## Pattern

DFS (Post-order traversal) with Height Calculation

- Time: O(n)
- Space: O(h) stack space, where h is height

## Key Insight

- Return -1 to bubble up imbalance instead of separate height calculation
- **Brute force**: Calculate height for each node separately O(n²)

## Test Case

Input: `[1,2,2,3,3,null,null,4,4]`
Expected: false

## Steps

1. Recursively get left and right heights
2. Return -1 if heights differ by >1 or subtree unbalanced
3. Return max height + 1 if balanced

## Watch

- Handle null nodes correctly
- Use -1 as marker for imbalance

## Similar

- Maximum Depth of Binary Tree
- Diameter of Binary Tree
