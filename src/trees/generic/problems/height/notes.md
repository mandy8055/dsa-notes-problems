# Maximum Depth of Binary Tree

## Problem number

[LC-104](https://leetcode.com/problems/maximum-depth-of-binary-tree)

## Pattern

Tree DFS (Recursion)

- Time: O(n)
- Space: O(h) where h is height

## Key Insight

- Height = max(leftHeight, rightHeight) + 1
- Brute force: Level order traversal and count levels

## Test Case

Input: [3,9,20,null,null,15,7]
Expected: 3

## Steps

1. Base: Return 0 for null node
2. Recurse left and right subtrees
3. Return max(left, right) + 1

## Watch

- Handle null root
- Remember to add 1 for current level

## Similar

- Minimum Depth of Binary Tree
- Balanced Binary Tree
