# Square Root X

## Problem number

[LC-69](https://leetcode.com/problems/sqrtx)

## Pattern

Binary Search on Answer Space

- Time: O(log n)
- Space: O(1)

## Key Insight

- Find largest number whose square ≤ x
- **Brute force**: Linear scan from 1 to x O(n)

## Test Case

```typescript
x = 8
l=1, h=8 -> mid=4, 16>8 -> h=3
l=1, h=3 -> mid=2, 4<8 -> l=3, ans=2
l=3, h=3 -> mid=3, 9>8 -> h=2
Output: 2
```

## Steps

1. Binary search in range [1,x]
2. Track last valid answer when square < x
3. Return when square equals x

## Edge Cases

- x = 0 or 1 (return x)
- Integer overflow in mid\*mid
- Answer is always floor value

## Similar

- Valid Perfect Square
- Search Insert Position
