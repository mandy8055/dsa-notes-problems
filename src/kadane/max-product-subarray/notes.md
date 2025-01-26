# Max Product Subarray

## Problem number

[LC-152](https://leetcode.com/problems/maximum-product-subarray)

## Pattern

Two-pass, Kadane's variant

- Time: O(n)
- Space: O(1)

## Key Insight

- Track product from both directions due to negative numbers
- **Brute force**: Calculate product of each subarray O(n²)

## Test Case

Input: [2,3,-2,4]
Expected: 6

## Steps

1. Forward pass tracking max product
2. Backward pass for negative numbers
3. Reset product to 1 when 0 encountered

## Edge Cases

```typescript
[-2, 0, -1][(-2, 3, -4)][(0, 2)]; // => 0 // => 24 // => 2
```

## Watch

- Reset product on encountering 0
- Need both forward and backward pass

## Similar

- Maximum Subarray
- Maximum Sum Circular Subarray

## Review

January 26, 2025
