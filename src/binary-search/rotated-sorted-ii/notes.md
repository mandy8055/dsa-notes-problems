# Search in Rotated Sorted Array II

## Problem number

[LC-81](https://leetcode.com/problems/search-in-rotated-sorted-array-ii)

## Pattern

Modified Binary Search with duplicates

- Time: O(log n) average, O(n) worst
- Space: O(1)

## Key Insight

- Handle duplicates by shrinking window when nums[low] = nums[mid] = nums[high]
- **Brute force**: Linear search O(n)

## Test Case

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Expected: true
```

## Steps

1. Skip duplicates (when nums[low] = nums[mid] = nums[high])
2. Find sorted half and check target range
3. Eliminate non-potential half

## Watch

- Handle case when all elements are same
- Time complexity becomes O(n) with many duplicates

## Similar

- Search in Rotated Sorted Array
- Find Minimum in Rotated Sorted Array II
