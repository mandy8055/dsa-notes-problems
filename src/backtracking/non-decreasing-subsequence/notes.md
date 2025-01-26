# Non Decreasing Subsequence

## Problem number

[LC-491](https://leetcode.com/problems/non-decreasing-subsequences)

## Pattern

Backtracking with duplicates handling

- Time: O(2^n)
- Space: O(n)

## Key Insight

- Handle duplicates by Set/skip consecutive equal elements
- **Brute force**: Generate all subsequences, filter non-decreasing O(2^n)

## Test Case

```typescript
nums = [4,6,7,7]
[4] -> [4,6] -> [4,6,7] -> backtrack
[4,7] -> [4,7,7] -> backtrack
Output: [[4,6], [4,6,7], [4,6,7,7], [4,7], [4,7,7], [6,7], [6,7,7], [7,7]]
```

## Steps

1. If sequence length ≥ 2, add to result
2. Take if empty/greater than last
3. Skip duplicates in current level

## Edge Cases

- All same numbers [1,1,1]
- Decreasing sequence [3,2,1]
- Multiple same subsequences

## Similar

- Subsets II
- Increasing Subsequences
