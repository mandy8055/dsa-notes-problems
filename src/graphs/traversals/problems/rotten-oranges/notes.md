# Rotting Oranges

## Problem number

[LC-994](https://leetcode.com/problems/rotting-oranges/)

## Pattern

Multi-Source BFS

- Time: O(m\*n) where m,n are grid dimensions
- Space: O(m\*n) for queue

## Key Insight

- Start BFS from all rotten oranges simultaneously
- **Brute force**: Simulate minute by minute spread O(m*n*k) where k is minutes

## Test Case

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Expected: 4 (minutes until all oranges rot)

## Steps

1. Add all rotten oranges to queue with time 0
2. BFS level by level, tracking max time
3. Check if any fresh oranges remain

## Watch

- Check for remaining fresh oranges at end
- Track maximum time, not queue size

## Similar

- Walls and Gates
- As Far from Land as Possible
- Jump Game III
