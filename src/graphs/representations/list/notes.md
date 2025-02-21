# Adjacency List Representation

## Problem number

[Graph-102]

## Pattern

Array of Lists

- Time: O(E) for creation, where E is number of edges
- Space: O(V + E) where V is vertices, E is edges

## Key Insight

- Store graph as array where index i contains list of vertices connected to i with optional weights
- **Brute force**: Convert from matrix representation O(V²)

## Test Case

Input:

```typescript
n = 4;
edges = [
  [1, 2, 5],
  [2, 3, 2],
  [1, 3, 7],
];
directed = false;
```

Expected:

```typescript
[
  [], // vertex 0
  [
    { to: 2, weight: 5 },
    { to: 3, weight: 7 },
  ],
  [
    { to: 1, weight: 5 },
    { to: 3, weight: 2 },
  ],
  [
    { to: 1, weight: 7 },
    { to: 2, weight: 2 },
  ],
];
```

## Steps

1. Initialize array of empty lists for each vertex
2. For each edge, create Edge object with destination and optional weight
3. Add edge to both vertices if undirected

## Watch

- Handle both weighted and unweighted edges
- For undirected graphs, add reverse edges

## Similar

- Matrix Representation
- Edge List Representation
