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

When x < minEl:

1. Store: 2x - minEl (encoded value)
2. Update: minEl = x
3. Later decode: prevMin = 2\*minEl - encoded
4. Proof: 2\*x - (2x - minEl) = minEl

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
