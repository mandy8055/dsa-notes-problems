# Convert Sorted Array to BST

## Problem number

[LC-108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)

## Pattern

Binary Search + Tree Construction

- Time: O(n)
- Space: O(log n) recursion stack

## Key Insight

- Mid element becomes root, recursively build left/right
- **Brute force**: Insert each element O(n log n)

## Test Case

```typescript
nums = [-10, -3, 0, 5, 9];
mid = 0;
left = [-10, -3];
right = [5, 9];
Output: [0, -3, 9, -10, null, 5];
```

## Steps

1. Find mid for root
2. Recurse left half for left subtree
3. Recurse right half for right subtree

## Edge Cases

- Empty array (return null)
- Single element
- Even length array

## Similar

- Convert Sorted List to BST
- Construct Binary Tree from Preorder/Inorder
