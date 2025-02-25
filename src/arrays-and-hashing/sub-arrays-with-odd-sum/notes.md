# Number of Sub-arrays With Odd Sum

## Problem number

[LC-1524](https://leetcode.com/problems/number-of-subarrays-with-odd-sum)

## Pattern

Prefix Sum, Counting

- Time: O(n)
- Space: O(1)

## Key Insight

- Track count of even/odd prefix sums to calculate odd subarrays
- **Brute force 1**: Calculate sum of every possible subarray O(n³)
- **Brute force 2**: Optimize with running sum for each start point O(n²)

## Test Case

Input: [1,3,5]
Expected: 4

## Steps

1. Track counts of even and odd prefix sums
2. For each element: if current prefix sum is even, add oddCount to result; otherwise add evenCount
3. Update even/odd counts based on current prefix sum

## Edge Cases

```typescript
[1, 2, 3, 4, 5]; // => 8
[]; // => 0
[2, 4, 6]; // => 0 (all even)
```

## Watch

- Initialize evenCount = 1 (empty subarray has sum 0, which is even)
- Remember to take modulo of final result (1e9 + 7)

## Similar

- Subarray Sum Equals K
- Count of Subarrays with Even Sum
