# Rotate Array

## Problem number

[LC-189](https://leetcode.com/problems/rotate-array)

## Pattern

Array Manipulation / In-place transformation

- Time: O(n)
- Space: O(1)

## Key Insight

- Reverse full array, then reverse both halves separately
- **Brute force**: Rotate array right by 1 position 'k' times O(n²)

## Test Case

Input: [1,2,3,4,5,6,7], k=3
Expected: [5,6,7,1,2,3,4]

## Steps

1. Take k modulo length to handle k > length
2. Reverse entire array
3. Reverse first k elements and last n-k elements separately

## Watch

- Remember to handle k > length with modulo
- Don't forget all three reverse operations

## Similar

- Reverse Words in a String
- Rotate Image
