# Intersection of Two Linked Lists

## Problem number

[LC-160](https://leetcode.com/problems/intersection-of-two-linked-lists)

## Pattern

Two Pointers / Linked List

- Time: O(m+n)
- Space: O(1)

## Key Insight

- Align pointers by accounting for length difference or use cycle detection approach
- **Brute force**: Check each node in list A against all nodes in list B O(m\*n)

## Test Case

Input:

```
A: 1→2→3→4
          ↘
           7→8→9
          ↗
B: 5→6
```

Expected: Node with value 7

## Steps

1. Calculate length difference of both lists (Approach 1)
2. Advance longer list pointer by the difference
3. Move both pointers until they meet

OR

1. Create pointers for both lists (Approach 2)
2. When a pointer reaches end, redirect to other list's head
3. Intersection occurs where pointers meet

## Watch

- Handle case with no intersection (pointers end up both null)
- Be careful with pointer arithmetic, don't deference null

## Similar

- Linked List Cycle
- Linked List Cycle II
