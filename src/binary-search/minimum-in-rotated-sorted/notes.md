# Find Minimum in Rotated Sorted Array

## Problem number

[LC-153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)

## Pattern

Modified Binary Search

- Time: O(log n)
- Space: O(1)

## Key Insight

- Minimum element is the pivot point where array rotates
- **Brute force**: Linear scan for minimum O(n)

## Test Case

```
Input: [4,5,6,7,0,1,2]
Expected: 0 (rotated 4 times)
```

## Steps

1. Find sorted half using nums[low] ≤ nums[mid]
2. Update min from sorted half's start
3. Search unsorted half for potential smaller values

## Watch

- Handle array with no rotation
- Compare with both low and mid elements

## Similar

- Find Minimum in Rotated Sorted Array II
- Search in Rotated Sorted Array
