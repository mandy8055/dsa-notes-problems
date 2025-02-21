# Find Peak Element

## Problem number

[LC-162](https://leetcode.com/problems/find-peak-element)

## Pattern

Binary Search (on unsorted array)

- Time: O(log n)
- Space: O(1)

## Key Insight

- Use peak property: if nums[i] < nums[i+1], peak must exist on right side
- **Brute force**: Linear scan comparing adjacent elements O(n)

## Test Case

Input: `[1,2,1,3,5,6,4]`
Expected: 5 (index of 6)

## Steps

1. Handle edge cases (first/last element peaks)
2. Binary search on range [1, n-2]
3. Compare mid with neighbors to find peak or direction

## Watch

- Handle array boundaries
- Consider adjacent elements for peak condition

## Similar

- Find Peak Element II (2D version)
- Find in Mountain Array
