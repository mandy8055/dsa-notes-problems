# Reverse Polish Notation

## Problem number

[LC-150](https://leetcode.com/problems/evaluate-reverse-polish-notation)

## Pattern

Stack with operator evaluation

- Time: O(n)
- Space: O(n)

## Key Insight

- Operands go to stack, operator pops last 2 operands
- **Brute force**: Parse tree and evaluate recursively O(n)

## Test Case

```typescript
Input: ["2","1","+","3","*"]
Stack: [2,1] -> [3] -> [3,3] -> [9]
Output: 9
```

## Steps

1. Push numbers to stack
2. On operator, pop last 2 nums and evaluate
3. Push result back to stack

## Edge Cases

- Division truncation toward zero
- Order of operands (first pop is second operand)
- Single number expression ["42"]

## Similar

- Basic Calculator
- Expression Parser
