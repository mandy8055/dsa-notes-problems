# Combinations

## Problem number

[LC-77](https://leetcode.com/problems/combinations)

## Pattern

Backtracking with two templates

- Time: O(nCk) combinations
- Space: O(k) recursion depth

## Key Insight

- Pick/not pick decision tree vs for-loop state space
- **Brute force**: Generate all sequences, filter k length O(2^n)

## Templates

```typescript
// Template 1: Pick/Not Pick
const backtrack1 = (start: number) => {
  // base
  if (valid) save;
  if (invalid) return;

  // take
  temp.push(val);
  backtrack(start + 1);
  temp.pop();

  // not take
  backtrack(start + 1);
};

// Template 2: For-loop State Space
const backtrack2 = (start: number) => {
  // base
  if (valid) save;
  if (invalid) return;

  // explore all choices
  for (let i = start; i <= end; i++) {
    temp.push(i);
    backtrack(i + 1);
    temp.pop();
  }
};
```

## Test Case

```typescript
(n = 4), (k = 2);
Output: [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
];
```

## Steps

1. Base case: k === 0, save combination
2. Explore: either pick/not-pick or loop through choices
3. Backtrack: remove last choice

## Edge Cases

- k > n (invalid input)
- k = n (single combination)
- k = 1 (n combinations)

## Similar

- Subsets
- Permutations
