# Invert Binary Tree

## Problem number

[LC-226](https://leetcode.com/problems/invert-binary-tree)

## Pattern

Tree DFS (Recursion)

- Time: O(n)
- Space: O(h) where h is height

## Key Insight

- Swap left and right subtrees recursively
- Brute force: Create new tree copying inverted nodes (wastes space)

## Test Case

Input: [4,2,7,1,3,6,9]
Expected: [4,7,2,9,6,3,1]

## Steps

1. Recursively invert left and right subtrees
2. Swap the subtrees for current node
3. Return root

## Watch

- Handle null root
- Store subtree reference before overwriting

## Similar

- Symmetric Tree
- Mirror Binary Tree
