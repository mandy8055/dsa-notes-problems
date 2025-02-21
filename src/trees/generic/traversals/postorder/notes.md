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

1. Go as left as possible pushing the nodes to stack
2. Check if the stack top(peek) node's right has been visited before(already processed)

    2.1. If yes, mark the lastVisited as peek and process the node

    2.2. If no, go right        

## Watch

- Check if right child was last visited before processing node
- Need to peek stack top without popping to check right child

## Similar

- Preorder Traversal
- Inorder Traversal
- Validate BST
