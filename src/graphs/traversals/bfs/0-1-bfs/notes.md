# 0-1 BFS

## Problem number

[Common pattern, no specific LC number]

## Pattern

BFS with Deque (Double-ended queue)

- Time: O(V + E) where V = vertices, E = edges
- Space: O(V) for deque

## Key Insight

- Use deque to handle edges with weights 0 and 1
- **Brute force**: Dijkstra's algorithm O(E log V)

## Test Case

Input: graph = [[1,1,0], [0,1,1], [1,0,1]], start = 0
Expected: [0, 1, 1] (shortest path with 0/1 weights)

## Steps

1. Add start node to deque with distance 0
2. For weight 0 edges, add to front of deque
3. For weight 1 edges, add to back of deque

## Watch

- Add 0-weight edges to front of deque
- Process node only if current distance is optimal

## When to Apply

### Problems involving shortest paths where:

- Edge weights are only 0 or 1
- Actions have two distinct costs (free vs costly)
- Can toggle between two states with different costs

### Key triggers in problem statement:

- "Can perform action A for free, action B costs 1"
- "Can either do X (cost 0) or Y (cost 1)"
- "Minimum transformations needed"
- Binary choices with different costs

### Problem Archetypes

- String transformation with two types of operations
- Grid problems where movement has two costs
- Graph problems with binary weights
- State transitions with free/costly operations

### Example Scenarios:

1. 0-1 BFS: Breaking walls in grid (walk=0, break=1), String edit with free/costly operations

## Similar

- Minimum Cost Path
- Shortest Path in Binary Matrix
- Network Delay Time with only 0/1 weights
