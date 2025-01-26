# dsa-notes-problems

Curated collection of DSA problems with minimal, pattern-focused notes and TypeScript solutions.

## Structure

Each problem includes:

```md
Problem: [Title] [Link]
Pattern: [Core pattern]
Time & Space: O(..)

Key Insight:

- Solution insight
- Brute force approach

Test Case:
Input: [tricky case]
Expected: [output]

Steps:

1. Core step
2. Core step

Code:
[TypeScript solution]

Watch:

- Key edge cases
- Gotchas
```

## Problem Index

### Arrays & Hashing

| Problem                | Pattern            | Solution                                                    |
| ---------------------- | ------------------ | ----------------------------------------------------------- |
| Two Sum                | Hash Map           | [Solution](./src/arrays-and-hashing/two-sum)                |
| Three Sum              | Two Pointers       | [Solution](./src/arrays-and-hashing/three-sum)              |
| Next Permutation       | Array Manipulation | [Solution](./src/arrays-and-hashing/next-permutation)       |
| First Missing Positive | Cyclic Sort        | [Solution](./src/arrays-and-hashing/first-missing-positive) |

### Backtracking

| Problem                    | Pattern    | Solution                                                  |
| -------------------------- | ---------- | --------------------------------------------------------- |
| Combinations               | DFS        | [Solution](./src/backtracking/combinations)               |
| Word Search II             | Trie + DFS | [Solution](./src/backtracking/word-search-ii)             |
| Non-decreasing Subsequence | DFS        | [Solution](./src/backtracking/non-decreasing-subsequence) |

### Binary Search

| Problem | Pattern       | Solution                              |
| ------- | ------------- | ------------------------------------- |
| Sqrt(x) | Binary Search | [Solution](./src/binary-search/sqrtx) |

### Dynamic Programming & Greedy

| Problem                            | Pattern | Solution                              |
| ---------------------------------- | ------- | ------------------------------------- |
| Jump Game                          | Greedy  | [Solution](./src/dp-greedy/jump-game) |
| Best Time to Buy and Sell Stock II | Greedy  | [Solution](./src/dp-greedy/stock-ii)  |

### Graphs

| Problem                | Pattern | Solution                                           |
| ---------------------- | ------- | -------------------------------------------------- |
| Trapping Rain Water II | BFS     | [Solution](./src/graphs/bfs/trapping-rainwater-ii) |

### Heap

| Problem             | Pattern        | Solution                           |
| ------------------- | -------------- | ---------------------------------- |
| Kth Largest Element | Priority Queue | [Solution](./src/heap/kth-largest) |

### Kadane's Algorithm

| Problem                         | Pattern        | Solution                                      |
| ------------------------------- | -------------- | --------------------------------------------- |
| Maximum Subarray Sum            | Kadane         | [Solution](./src/kadane/max-subarray-sum)     |
| Maximum Product Subarray        | Kadane Variant | [Solution](./src/kadane/max-product-subarray) |
| Best Time to Buy and Sell Stock | Kadane         | [Solution](./src/kadane/stock-i)              |

### Math & String

| Problem          | Pattern | Solution                                          |
| ---------------- | ------- | ------------------------------------------------- |
| Integer to Roman | String  | [Solution](./src/math-nd-string/integer-to-roman) |
| Roman to Integer | String  | [Solution](./src/math-nd-string/roman-to-integer) |

### Stack

| Problem                          | Pattern      | Solution                                        |
| -------------------------------- | ------------ | ----------------------------------------------- |
| Valid Parentheses                | Stack        | [Solution](./src/stack/valid-parentheses)       |
| Min Stack                        | Stack Design | [Solution](./src/stack/min-stack)               |
| Evaluate Reverse Polish Notation | Stack        | [Solution](./src/stack/reverse-polish-notation) |

### Trees

| Problem                     | Pattern | Solution                                              |
| --------------------------- | ------- | ----------------------------------------------------- |
| Convert Sorted Array to BST | DFS     | [Solution](./src/trees/bst/convert-sorted-arr-to-bst) |

### Two Pointers

| Problem             | Pattern      | Solution                                            |
| ------------------- | ------------ | --------------------------------------------------- |
| Trapping Rain Water | Two Pointers | [Solution](./src/two-pointers/trapping-rainwater-i) |
