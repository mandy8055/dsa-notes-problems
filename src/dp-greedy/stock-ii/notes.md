# Best Time to Buy and Sell Stock II

## Problem number

[LC-122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)

## Pattern

Dynamic Programming (State Machine)

- Time: O(n)
- Space: O(1) optimal, O(n) with memo

## Key Insight

- State: (index, canBuy) determines optimal future profit
- **Brute force**: Try all possible buy-sell sequences O(2^n)

## Test Case

```typescript
prices = [7,1,5,3,6,4]
dp[0][0] = max(0 + dp[1][0], -7 + dp[1][1])
dp[0][1] = max(0 + dp[1][1], 7 + dp[1][0])
Output: 7 (buy@1, sell@5, buy@3, sell@6)
```

## Steps

1. State[i][canBuy] = max profit from i onwards
2. If canBuy: max(skip, buy) else max(skip, sell)
3. Build from end to start

## Edge Cases

- Single price (profit = 0)
- Strictly decreasing prices
- Multiple peaks and valleys

## Similar

- Best Time I (Single transaction)
- Best Time III (Two transactions)
