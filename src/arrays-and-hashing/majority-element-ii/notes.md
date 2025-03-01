# Majority Element II

## Problem number

[LC-229](https://leetcode.com/problems/majority-element-ii)

## Pattern

Extended Moore's Voting Algorithm

- Time: O(n)
- Space: O(1)

## Key Insight

- At most 2 elements can appear > n/3 times
- **Brute force**: Count frequencies using hash map O(n) time, O(n) space

## Test Case

Input: [1,1,1,3,3,2,2,2]
Expected: [1,2]

## Steps

1. Track two potential candidates with separate counters
2. Decrement both counters when encountering a third different element
3. Verify candidates with a second pass to confirm > n/3 occurrences

## Watch

- Verification pass is mandatory (unlike Majority Element I)
- Handle case where candidates might be the same

## Similar

- Majority Element
- Element Appearing More Than 25% In Sorted Array
