# Sort Colors

## Problem number

[LC-75](https://leetcode.com/problems/sort-colors)

## Pattern

Dutch National Flag / Three-way Partitioning

- Time: O(n)
- Space: O(1)

## Key Insight

- Use three pointers to partition array into three regions (0s, 1s, 2s)
- **Brute force**: Standard sorting algorithm O(nlogn)

## Test Case

Input: [2,0,2,1,1,0]
Expected: [0,0,1,1,2,2]

## Steps

1. Maintain three pointers: left (0s), mid (1s), right (2s)
2. When find 0, swap with left pointer and increment both
3. When find 2, swap with right pointer and decrement right only

## Watch

- Be careful about pointer movement after swaps
- Check boundary condition (i <= k)

## Similar

- Move Zeroes
- Partition Array According to Given Pivot
