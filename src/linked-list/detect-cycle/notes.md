# Detect Cycle in LinkedList

## Problem number

[LC-141](https://leetcode.com/problems/linked-list-cycle)

## Pattern

Two Pointers (Floyd's Cycle Finding)

- Time: O(n)
- Space: O(1)

## Key Insight

- Think "Circular Track Race": Fast runner will catch slow runner if track loops
- Brute force: Store visited nodes in Set O(n) space

## Test Case

Input: [3→2→0→-4⟲2] (2 is cycle point)
Expected: true

## Steps

Analogy: "Race Track"

1. Fast runner (2x speed) and slow runner start same point
2. If track loops, they'll meet eventually
3. If fast reaches null, no cycle

## Watch

- Check equality AFTER moving pointers
- Check fast AND fast.next for null

## Similar

- Find Cycle Start Point
- Find Cycle Length
