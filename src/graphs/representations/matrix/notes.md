# Matrix Representation of Graph

## Problem number

[Graph-101]

## Pattern

Matrix/2D Array

- Time: O(E) for creation, where E is number of edges
- Space: O(V²) for matrix, where V is number of vertices

## Key Insight

- Use V×V matrix where cell [i][j] = 1 indicates edge from i to j
- **Brute force**: Adjacency list converted to matrix O(V²)

## Test Case

Input: [[1,2], [2,3], [1,3]] // edges
Expected:

```
0 1 1
1 0 1
1 1 0
```

## Steps

1. Create V×V matrix filled with 0s
2. For each edge [u,v], set matrix[u][v] = 1
3. For undirected, also set matrix[v][u] = 1

## Edge Cases

```typescript
[[1, 1]]; // => Self loop
[]; // => Empty graph
[
  [1, 2],
  [2, 1],
]; // => Bidirectional edges
```

## Watch

- Check if vertices are 0 or 1-based indexed
- For undirected graph, matrix should be symmetric
