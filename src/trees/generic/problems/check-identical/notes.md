# Same Tree

## Problem number

[LC-100](https://leetcode.com/problems/same-tree)

## Pattern

DFS (Pre-order traversal)

- Time: O(n)
- Space: O(h) stack space

## Key Insight

- Compare values and structure simultaneously while traversing
- **Brute force**: Convert both trees to arrays and compare O(n) space

## Test Case

Input: `p=[1,2,3], q=[1,2,3]`
Expected: true

## Steps

1. Check null conditions for both nodes
2. Compare current node values
3. Recursively check left and right subtrees

## Watch

- Handle null nodes consistently
- Check both structure and values

## Similar

- Symmetric Tree
- Subtree of Another Tree
