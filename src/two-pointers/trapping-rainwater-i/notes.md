# Trapping Rain Water

## Problem Number:

- [LC-42](https://leetcode.com/problems/trapping-rain-water/)

## Problem Pattern

Two pointers with max height tracking

- Time: O(n)
- Space: O(1)

## Key Insight

- Water at index i = min(maxLeft, maxRight) - height[i]
- Brute: Find maxLeft & maxRight separately O(n^2)

## Test Case

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Expected: 6 (water units trapped)

## Steps

1. Track max heights from left and right using two pointers
2. Move pointer from smaller max side, update max & add trapped water
3. Continue until pointers meet

## Watch

- Move pointer from smaller max side (ensures **min(maxLeft,maxRight)** is used)
- Water can only be trapped if there are higher bars on both sides
