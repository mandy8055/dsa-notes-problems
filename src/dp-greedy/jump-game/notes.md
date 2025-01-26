# Jump Game

## Problem number

[LC-55](https://leetcode.com/problems/jump-game)

## Pattern

Greedy / Dynamic Programming

- Time: O(n) greedy, O(n²) DP
- Space: O(1) greedy, O(n) DP

## Key Insight

- Track furthest reachable index, fail if current > max
- **Brute force**: Try all possible jump combinations O(n^k)

## Test Case

```typescript
nums = [2,3,1,1,4]
i=0: max=2
i=1: max=4 // max(2, 3+1)
i=2: max=4
i=3: max=4
Output: true
```

## Steps

1. Track maxReachable = max(maxReachable, i + nums[i])
2. If i > maxReachable, can't proceed
3. Return true if we reach end

## Edge Cases

- Single element array
- Required multiple small jumps
- Zero in middle [2,0,1]

## Similar

- Jump Game II
- Jump Game III
