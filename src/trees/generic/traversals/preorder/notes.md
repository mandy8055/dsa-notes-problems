# Preorder Traversal

## Problem number

[LC-144](https://leetcode.com/problems/binary-tree-preorder-traversal)

## Pattern

Stack, Tree DFS

- Time: O(n)
- Space: O(h) where h is height of tree

## Key Insight

- Root → Left → Right order
- **Iterative**: Push right first then left (since stack is LIFO)
- **Brute force**: Store all nodes in array and traverse O(2n) space

## Test Case

Input:

```
    1
   / \
  2   3
 /
4
```

Expected: [1,2,4,3]

## Steps

1. Push root to stack
2. Pop node, process it, push right then left child
3. Repeat until stack empty

## Watch

- Push right child first (LIFO)
- Check for null nodes before pushing

## Similar

- Inorder Traversal
- Postorder Traversal
- Morris Traversal (O(1) space)
