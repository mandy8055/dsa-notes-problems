# Multi-Source BFS

## Problem number

[Common Pattern] - LC 542 (01 Matrix), LC 994 (Rotting Oranges)

## Pattern

Matrix BFS with multiple starting points

- Time: O(m\*n) - visit each cell once
- Space: O(m\*n) - queue + distance matrix

## Key Insight

- Start BFS simultaneously from ALL source cells (1s in matrix)
- **Brute force**: Individual BFS from each source = O(k*m*n) where k = sources

## Test Case

```
[1 0 0]    [0 1 2]
[0 0 1] => [1 1 0]  // distance from nearest 1
```

## Steps

1. Collect ALL sources into queue + mark their dist=0
2. BFS: For each cell, check 4 directions
3. Only update unvisited cells (dist=Infinity) with curr_dist+1

## Watch

- First step is key: Add ALL sources to queue initially ⭐
- dist[r][c] = Infinity initially (not 0)
- Process dirs = [[1,0],[-1,0],[0,1],[0,-1]]
- Queue stores [row,col] pairs
- Boundary check: nr < rows && nc < cols

## Similar

- Walls and Gates (LC 286)
- Nearest Exit from Entrance (LC 1926)

## 🔍 When to Use Multi-Source BFS:

1. Problem Indicators:

- Multiple starting points need to process simultaneously
- Finding shortest distance/path from ANY of several sources
- Need to simulate spreading/expansion from multiple points
- Terms like "nearest", "closest", or "minimum distance" with multiple reference points

2. Common Scenarios:

- Distance calculation from multiple reference points
- Spreading/infection/growth patterns from multiple origins
- Time-based propagation from multiple starting points
- Finding zones of influence from multiple sources

3. Example Problem Types:

- "Find shortest distance to nearest [target]" where multiple targets exist
- "Time taken for [something] to spread" from multiple starting points
- "Nearest exit/path from multiple possible starting points"
- "Area of influence" or "coverage" problems with multiple sources

4. Red Flags That Suggest Multi-Source BFS:

- Single-source BFS solution looks O(k _ m _ n) where k = number of sources
- Problem involves finding minimum of multiple individual paths
- Need to process multiple points "simultaneously"
- Matrix contains multiple special cells that act as origins

### Example archetypes

1. Multi-Source BFS: Flood fill from multiple sources, Distance to nearest exit.
