# Search in Rotated Sorted Array

## Problem number

[LC-33](https://leetcode.com/problems/search-in-rotated-sorted-array)

## Pattern

Modified Binary Search

- Time: O(log n)
- Space: O(1)

## Key Insight

- At least one half of array is always sorted
- **Brute force**: Linear search O(n)

## Test Case

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Expected: 4
```

## Steps

1. Find sorted half (compare nums[low] with nums[mid])
2. Check if target lies in sorted half's range
3. Eliminate non-potential half

## Watch

- Include equal to (<=) in range checks
- Mid calculation to avoid overflow

## Similar

- Search in Rotated Sorted Array II
- Find Minimum in Rotated Sorted Array
