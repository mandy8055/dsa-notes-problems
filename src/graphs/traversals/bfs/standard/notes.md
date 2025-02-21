# Breadth First Search (Graph)

## Problem number

[GFG-BFS](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)

## Pattern

Graph Traversal

- Time: O(V + E) where V is vertices, E is edges
- Space: O(V) for queue and visited array

## Key Insight

- Use queue to explore vertices level by level (closest neighbors first)
- **Brute force**: Try all possible traversal orders O(V!)

## Test Case

Input:

```typescript
adj = [
  [1, 2], // vertex 0 connected to 1,2
  [2], // vertex 1 connected to 2
  [], // vertex 2 has no outgoing edges
];
```

Expected: [0, 1, 2]

## Steps

1. Create queue, push start vertex 0
2. While queue not empty, process vertex's neighbors
3. Mark visited and enqueue unvisited neighbors

## Watch

- Visit vertex before enqueuing (not after dequeuing)
- Handle disconnected components if needed

## Similar

- DFS Traversal
- Shortest Path using BFS
