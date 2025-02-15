# Inorder Traversal

## Problem number

[LC-94](https://leetcode.com/problems/binary-tree-inorder-traversal)

## Pattern

Stack, Tree DFS

- Time: O(n)
- Space: O(h) where h is height of tree

## Key Insight

- Left → Root → Right order
- **Iterative**: Keep going left while pushing nodes, process node after left subtree done
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

Expected: [4,2,1,3]

## Steps

1. Keep going left and pushing nodes to stack
2. When null, pop node, process it and go right
3. Repeat until curr null and stack empty

## Watch

- Two while loops needed: outer (curr OR stack) and inner (curr)
- Process node AFTER left subtree is done

## Similar

- Preorder Traversal
- Postorder Traversal
- Binary Search Tree Iterator
