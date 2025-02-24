# Spiral Matrix

## Problem number

[LC-54](https://leetcode.com/problems/spiral-matrix)

## Pattern

Matrix Traversal / Boundary Shrinking

- Time: O(m\*n)
- Space: O(1) excluding output array

## Key Insight

- Traverse boundaries and shrink inward after each direction
- **Brute force**: Mark visited cells with special value O(m\*n) space

## Test Case

```
Input: [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Expected: [1,2,3,6,9,8,7,4,5]
```

## Steps

1. Move right (minR), down (maxC), left (maxR), up (minC)
2. Shrink boundaries after each direction
3. Stop when all elements visited (counter = m\*n)

## Watch

- Check counter < total in each direction
- Increment/decrement boundaries correctly

## Similar

- Spiral Matrix II
- Rotate Image
