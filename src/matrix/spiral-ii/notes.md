# Spiral Matrix II

## Problem number

[LC-59](https://leetcode.com/problems/spiral-matrix-ii)

## Pattern

Matrix Traversal / Boundary Shrinking

- Time: O(n²)
- Space: O(1) excluding output matrix

## Key Insight

- Apply same spiral logic but fill numbers instead of reading
- **Brute force**: N/A (only one approach makes sense)

## Test Case

```
Input: n = 3
Expected: [
  [1,2,3],
  [8,9,4],
  [7,6,5]
]
```

## Steps

1. Initialize n×n matrix with zeros
2. Move in spiral pattern filling counter values
3. Shrink boundaries after each direction

## Watch

- Check counter <= total (not <)
- Initialize matrix with correct dimensions

## Similar

- Spiral Matrix
- Rotate Image
