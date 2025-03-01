# Maximum Absolute Sum of Any Subarray

## Problem number

[LC-1749](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray)

## Pattern

Kadane's Algorithm (Modified)

- Time: O(n)
- Space: O(1)

## Key Insight

- Maximum absolute sum will be either max subarray sum or abs(min subarray sum)
- **Brute force**: Check all possible subarrays O(n²)

## Test Case

Input: [1,-3,2,3,-4]
Expected: 5

## Steps

1. Track both maximum and minimum subarray sums simultaneously
2. Reset to 0 when max sum becomes negative or min sum becomes positive
3. Return the larger of |maxSum| and |minSum|

## Watch

- Remember to take absolute value of the final result
- Handle both positive and negative sequences

## Similar

- Maximum Subarray
- Maximum Sum Circular Subarray
