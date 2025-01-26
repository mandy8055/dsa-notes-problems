# Valid Parentheses

## Problem number

[LC-20](https://leetcode.com/problems/valid-parentheses)

## Pattern

Stack

- Time: O(n)
- Space: O(n)

## Key Insight

- Match closing bracket with last seen opening bracket using stack
- **Brute force**: Replace valid pairs repeatedly until empty O(n²)

## Test Case

Input: "([{}])"
Expected: true

## Steps

1. Push opening brackets to stack
2. Match each closing with top of stack
3. Valid if stack empty at end

## Edge Cases

```typescript
'([]){}'; // => true
'([)]'; // => false
'((())'; // => false
'}{'; // => false
'[()]'; // => true
```

## Watch

- Check stack empty at end
- Handle closing bracket with empty stack

## Similar

- Valid Parenthesis String
- Remove Invalid Parentheses
