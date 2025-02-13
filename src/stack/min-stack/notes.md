# Min Stack

## Problem number

[LC-155](https://leetcode.com/problems/min-stack/)

## Pattern

Stack with encoding

- Time: O(1) for all operations
- Space: O(n)

## Key Insight

- When pushing smaller element, encode previous min using formula: `2*x - minEl`
- **Brute force**: Keep parallel stack tracking min at each level O(n) space

## Why 2\*x - minEl formula works

1. We're encoding the value as `2*x - minEl` in order to keep track the place of insertion of minEl in the stack.
2. We als have to be sure that this value `2*x - minEl < x`. [How to prove this?](https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/)

## Test Case

```typescript
push(3), push(2), push(5);
stack: [3, 0, 5]; // 0 is encoded (2*2 - 3)
minEl: 2;
```

## Steps

1. If pushing val < minEl, encode and update minEl
2. If popping encoded val, decode prevMin
3. For top(), return minEl if encoded

## Edge Cases

- Empty stack initialization (minEl = Infinity)
- Stack becomes empty after pop
- Handling encoded values in top()

## Similar

- Max Stack
- Stack with Increment Operation
