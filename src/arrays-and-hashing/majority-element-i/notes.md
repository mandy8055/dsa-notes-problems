# Majority Element

## Problem number

[LC-169](https://leetcode.com/problems/majority-element)

## Pattern

Voting Algorithm / Hash Map

- Time: O(n)
- Space: O(1) for voting, O(n) for hash map

## Key Insight

- Moore's voting algorithm: cancel out non-majority elements
- **Brute force**: Count frequencies with a hash map O(n) time, O(n) space

## Test Case

Input: [2,2,1,1,1,2,2]
Expected: 2

## Steps

1. Initialize candidate as first element with count 1
2. Increment count when same element, decrement for different
3. When count hits 0, change candidate and reset count

## Watch

- No need for verification pass if majority element guaranteed
- Handle edge case of a single element array

## Similar

- Majority Element II
- Find the Duplicate Number
