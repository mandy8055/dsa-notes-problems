# Connected Components in Graph

## Problem number

[GFG-Connected-Components](https://www.geeksforgeeks.org/problems/connected-components-in-an-undirected-graph/1)

## Pattern

Graph Components Finding (Using DFS/BFS)

- Time: O(V + E + V log V) with sorting, O(V + E) without
- Space: O(V + E)

## Key Insight

- Each unvisited vertex starts a new component exploration
- **Brute force**: Try all possible vertex combinations O(2^V)

## Test Case

Input:

```typescript
v = 5;
edges = [
  [0, 1],
  [2, 3],
];
```

Expected: [[0,1], [2,3], [4]] // 4 is isolated component

## Steps

1. Build undirected graph using adjacency list
2. For each unvisited vertex, start new DFS/BFS exploration
3. Track visited vertices in each component

## Watch

- Handle isolated vertices (they form single-vertex components)
- Multiple valid traversal orders possible

## Similar

- Number of Islands
- Friend Circles
