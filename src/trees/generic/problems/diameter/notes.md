# Diameter of Binary Tree

## Problem number

[LC-543](https://leetcode.com/problems/diameter-of-binary-tree)

## Pattern

DFS / Tree recursion

- Time: O(n)
- Space: O(h) where h is height

## Key Insight

- Diameter at each node = max path through root (leftHeight + rightHeight)
- **Brute force**: Calculate height for each node O(n²)

## Test Case

```
Input:     1
         /   \
        2     3
       / \
      4   5
```

Expected: 3 (path: 4->2->1->3)

## Steps

1. DFS while tracking max diameter seen
2. At each node: max(pathThroughRoot, heightThroughOneSubtree)
3. Return height to parent for further calculations

## Watch

- Handle null nodes (return 0)
- Add edges not nodes (leftHeight + rightHeight)

## Similar

- Binary Tree Maximum Path Sum
- Path Sum III
