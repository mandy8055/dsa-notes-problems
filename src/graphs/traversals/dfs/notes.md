# Depth First Search (Graph)

## Problem number

[GFG-DFS](https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1)

## Pattern

Graph Traversal

- Time: O(V + E) where V is vertices, E is edges
- Space: O(V) for visited array and recursion stack

## Key Insight

- Use recursive stack to explore graph as deep as possible before backtracking
- **Brute force**: Store and explore all possible paths O(V!)

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

1. Create visited array and result array
2. Start DFS from vertex 0, mark visited and add to result
3. Recursively explore unvisited neighbors

## Watch

- Handle disconnected components if needed
- Check for cycles to avoid infinite recursion

## Similar

- BFS Traversal
- Detect Cycle using DFS
