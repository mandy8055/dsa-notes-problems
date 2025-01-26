# Three Sum

## Problem number

[LC-15](https://leetcode.com/problems/3sum)

## Pattern

Two pointers with sorted array

- Time: O(n²)
- Space: O(1) excluding output space

## Key Insight

- Sort array first to use two pointers and handle duplicates
- **Brute force**: Three nested loops checking all triplets O(n³)

## Test Case

Input: [-1,0,1,2,-1,-4]
Expected: [[-1,-1,2],[-1,0,1]]

## Steps

1. Sort array
2. Fix first number, use two pointers for remaining sum
3. Skip duplicates for all three numbers

## Watch

- Skip duplicates at all three positions
- Don't skip first occurrence of any number

## Similar

- Two Sum
- 4Sum
- 3Sum Closest
