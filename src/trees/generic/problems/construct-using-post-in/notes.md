# Construct Binary Tree from Inorder and Postorder

## Problem number

[LC-106](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)

## Pattern

Tree Construction / Divide & Conquer

- Time: O(n) optimal, O(n²) brute force
- Space: O(h) recursion stack, O(n) with map

## Key Insight

- Last element in postorder is root, traverse backwards
- **Brute force**: Using indexOf for each node search O(n²)

## Test Case

```
Inorder:   [9,3,15,20,7]
Postorder: [9,15,7,20,3]
Expected:    3
           /   \
          9    20
              /  \
             15   7
```

## Steps

1. Use postorder[postIdx--] as root (start from end)
2. Build right subtree first (unlike preorder)
3. Pass parent value as bound to identify subtree ends

## Watch

- Build right before left (postorder: left->right->root)
- Track indices from right to left
- Handle base cases carefully

## Similar

- Construct Binary Tree from Preorder and Inorder
- Construct Binary Tree from Preorder and Postorder
