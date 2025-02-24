# Binary Tree Zigzag Level Order Traversal

## Problem number

[LC-103](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)

## Pattern

BFS / Level-order with direction tracking

- Time: O(n)
- Space: O(w) where w is max width

## Key Insight

- Use array indexing instead of reversing for alternating levels
- **Brute force**: Regular level order + reverse alternate levels O(n²)

## Test Case

```
Input:     3
         /   \
        9    20
            /  \
           15   7
```

Expected: [[3],[20,9],[15,7]]

## Steps

1. Regular BFS with level tracking
2. Calculate index based on level (left-to-right or right-to-left)
3. Place node value at calculated index: `idx = isEven ? i : size-i-1`

## Watch

- Handle empty tree
- Calculate correct index for zigzag pattern

## Similar

- Binary Tree Level Order Traversal
- Binary Tree Level Order Traversal II
