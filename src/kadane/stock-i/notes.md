# Best Time to Buy and Sell Stock I

## Problem number

[LC-121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

## Pattern

Sliding Window / Kadane's

- Time: O(n)
- Space: O(1)

## Key Insight

- Track min price seen so far, update max profit
- **Brute force**: Check every buy-sell pair O(n²)

## Test Case

```typescript
prices = [7, 1, 5, 3, 6, 4];
(min = 7), (profit = 0);
(min = 1), (profit = 0);
(min = 1), (profit = 4); // 5-1
(min = 1), (profit = 4);
(min = 1), (profit = 5); // 6-1
Output: 5;
```

## Steps

1. Track min price seen so far
2. Update max profit if current price - min > profit
3. Return max profit found

## Edge Cases

- Decreasing array (profit = 0)
- Single day prices
- Same buy-sell day

## Similar

- Best Time II (Multiple transactions)
- Maximum Subarray
