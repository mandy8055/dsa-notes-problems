# Two Sum

## Problem number

- [LC-1](https://leetcode.com/problems/two-sum/description/)

## Pattern:

Pattern: Hash map for complement lookup

- Time: O(n)
- Space: O(n)

## Key Insight:

- Store complements (target - num) in map for O(1) lookup
- **Brute force**: Check all pairs with nested loops O(n^2)

## Test Case:

Input: nums=[2,7,11,15], target=9
Expected: [0,1] (2+7=9)

## Steps:

1. Iterate array once, storing nums[i] -> i in map
2. For each num, check if (target - num) exists in map
3. Return indices when found

## Watch:

- Check complement before adding current number
- Return empty array if no solution found
