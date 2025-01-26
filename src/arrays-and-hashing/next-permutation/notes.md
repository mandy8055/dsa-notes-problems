# Next Greater Element III / Next Permutation

## Problem number

[LC-556](https://leetcode.com/problems/next-greater-element-iii)
[LC-31](https://leetcode.com/problems/next-permutation)

## Pattern

Array Manipulation

- Time: O(n)
- Space: O(1)

## Key Insight

- Find first dip, swap with next greater, reverse rest
- **Brute force**: Generate all permutations O(n!)

## Test Case

```typescript
n = 230241
1. Find dip: 2[3]0241 (3 < 0)
2. Swap: 2[4]0[3]41
3. Reverse after 4: 240134
Output: 240134
```

## Steps

1. Find first dip from right (a[i] < a[i+1])
2. Find next greater from right, swap
3. Reverse everything after dip

## Edge Cases

- Decreasing digits (no next greater)
- Integer overflow > 2^31-1
- Single digit number
- Leading zeros

## Similar

- Previous Permutation
- Find Next Greater Number
