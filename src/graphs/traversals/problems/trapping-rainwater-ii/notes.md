# Trapping Rain Water II

## Problem number

[LC-407](https://leetcode.com/problems/trapping-rain-water-ii)

## Pattern

Priority Queue + BFS from boundaries

- Time: O(mn\*log(m+n))
- Space: O(mn)

## Key Insight

- Water flows from higher to lower elevation - use min heap to process cells from boundary inward
- **Brute force**: Check min height of boundaries for each cell O(m²n²)

## Test Case

Input: [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Expected: 4

## Steps

1. Add boundary cells to min heap and mark visited
2. Process cells from min height, track water trapped
3. BFS inward updating heights and trapped water

## Watch

- Process boundaries first before interior cells
- Track visited cells to avoid cycles
