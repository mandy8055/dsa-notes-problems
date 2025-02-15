# Postorder Traversal

## Problem number

[LC-145](https://leetcode.com/problems/binary-tree-postorder-traversal)

## Pattern

Stack, Tree DFS

- Time: O(n)
- Space: O(h) where h is height of tree

## Key Insight

- Left → Right → Root order
- **Iterative**: Need lastVisited pointer to track if right subtree processed
- **Brute force**: Reverse of preorder after swapping left/right O(n) extra space

## Test Case

Input:

```
    1
   / \
  2   3
 /
4
```

Expected: [4,2,3,1]

## Steps

1. Go left while pushing nodes to stack
2. At each node, process right subtree if not visited
3. Process node only after both subtrees done

## Watch

- Check if right child was last visited before processing node
- Need to peek stack top without popping to check right child

## Similar

- Preorder Traversal
- Inorder Traversal
- Validate BST
