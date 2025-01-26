# Maximum Subarray

## Problem number

[LC-53](https://leetcode.com/problems/maximum-subarray)

## Pattern

Kadane's Algorithm

- Time: O(n)
- Space: O(1)

## Key Insight

- Current sum < 0 means fresh start is better
- **Brute force**: Try all subarrays O(n³)

## Test Case

```typescript
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
(cS = -2), (ans = -2);
(cS = 1), (ans = 1);
(cS = -2), (ans = 1);
(cS = 4), (ans = 4);
(cS = 3), (ans = 4);
(cS = 5), (ans = 5);
(cS = 6), (ans = 6);
(cS = 1), (ans = 6);
(cS = 5), (ans = 6);
Output: 6;
```

## Steps

1. Track current sum (cS) and max sum seen
2. Add next element to current sum
3. Reset cS = 0 if negative

## Edge Cases

- All negative numbers
- Single element
- Empty array

## Similar

- Maximum Circular Subarray
- Maximum Product Subarray
