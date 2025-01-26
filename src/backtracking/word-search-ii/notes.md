# Word Search II

## Problem number

[LC-212](https://leetcode.com/problems/word-search-ii)

## Pattern

DFS + Trie

- Time: O(M*N*4^L)
- Space: O(sum of word lengths)

## Key Insight

- Build trie with words, DFS board with trie traversal
- **Brute force**: Search each word separately O(M*N*4^L\*W)

## Test Case

```typescript
board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
words = ['oath', 'pea', 'eat', 'rain'];
Output: ['eat', 'oath'];
```

## Steps

1. Build trie with words
2. DFS each cell with trie node
3. Mark visited with '$', backtrack

## Edge Cases

- Single cell board
- No matching words
- Word longer than board path
- Overlapping words

## Similar

- Word Search I
- Design Add and Search Words
