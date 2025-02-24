# Construct Binary Tree from Preorder and Postorder

## Problem number

[LC-889](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal)

## Pattern

Tree Construction / Divide & Conquer

- Time: O(n) optimal, O(n²) brute force
- Space: O(h) recursion stack, O(n) with map

## Key Insight

- First element in preorder and last element in postorder is root
- Next preorder element is left child, use it to find split point
- **Brute force**: Linear search for left child in postorder O(n²)

## Test Case

```
Preorder:  [1,2,4,5,3,6,7]
Postorder: [4,5,2,6,7,3,1]
Expected:    1
           /   \
          2     3
         / \   / \
        4   5 6   7
```

## Steps

1. Use preorder[preIndex++] as root
2. Find next preorder value in postorder array
3. Split arrays at this point for left/right recursion

## Watch

- Handle single node case explicitly
- Exclude the root from right subtree range (-1)
- Use map for O(1) lookup of split point

## Optimizations

1. Naive: O(n²) with linear search for split
2. Optimal: O(n) using hashmap for quick lookup

## Similar

- Construct Binary Tree from Preorder and Inorder
- Construct Binary Tree from Inorder and Postorder
