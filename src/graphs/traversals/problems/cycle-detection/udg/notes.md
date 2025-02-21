# Cycle Detection in Undirected Graph

## Problem

[GFG Link](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)

## Pattern

DFS/BFS with Parent Tracking

- Time: O(V + E)
- Space: O(V)

## Key Insight

- Track parent vertex to avoid false cycles from bidirectional edges
- **Brute force**: Check all possible paths between vertices O(V!)

## Test Case

Input:

```
adj = [[1], [0,2], [1]]
```

Expected: false

## Steps

1. Track visited nodes and parent for each vertex
2. If we find visited neighbor (not parent), cycle exists
3. Handle disconnected components by checking all vertices

## Watch

- Check all disconnected components
- Don't count parent vertex as cycle

## Similar

- Cycle Detection in Directed Graph
- Course Schedule
