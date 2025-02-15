# Binary Tree Level Order Traversal

## Problem number

[LC-102](https://leetcode.com/problems/binary-tree-level-order-traversal)

## Pattern

BFS with Queue

- Time: O(n)
- Space: O(w) where w is max width

## Key Insight

- Track nodes at each level using queue size
- Brute force: Store level number with each node in queue (wastes space)

## Test Case

Input: [3,9,20,null,null,15,7]
Expected: [[3],[9,20],[15,7]]

## Steps

1. Process current level size nodes from queue
2. Add their children to queue
3. Add level nodes to result

## Watch

- Track level size before adding children
- Handle null root case first

## Similar

- Zigzag Level Order Traversal
- Average of Levels in Binary Tree

## Review

2025-02-01
