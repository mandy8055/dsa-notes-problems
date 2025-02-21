# Flood Fill

## Problem number

[LC-733](https://leetcode.com/problems/flood-fill/)

## Pattern

DFS (can also be solved with BFS)

- Time: O(m\*n) where m,n are image dimensions
- Space: O(m\*n) worst case for recursion stack

## Key Insight

- Change color and recursively fill adjacent pixels of same original color
- **Brute force**: BFS with queue to track pixels to fill O(m\*n)

## Test Case

Input:

```
image = [[1,1,1],
         [1,1,0],
         [1,0,1]],
sr = 1, sc = 1, color = 2
```

Expected:

```
[[2,2,2],
 [2,2,0],
 [2,0,1]]
```

## Steps

1. Check if starting pixel already has target color (optimization)
2. DFS from start pixel, changing colors
3. Recursively fill in all 4 directions

## Watch

- Check if new color equals old color to avoid infinite loop
- No need to track visited since we change colors as we go

## Similar

- Number of Islands
- Island Perimeter
- Max Area of Island
