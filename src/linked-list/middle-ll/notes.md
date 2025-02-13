# Middle of Linked List

## Problem number

[LC-876](https://leetcode.com/problems/middle-of-the-linked-list)

## Pattern

Two Pointers (Fast & Slow)

- Time: O(n)
- Space: O(1)

## Key Insight

- Fast moves 2x speed of slow pointer
- **Brute force:** Count nodes then traverse to middle O(2n)

## Test Case

Input: [1,2,3,4,5]
Expected: [3,4,5]

## Steps

1. Move fast pointer 2 steps, slow 1 step
2. When fast reaches end, slow is at middle
3. Return slow pointer node

## Watch

- For even length, returns second middle
- Check fast AND fast.next in while condition

## Similar

- Find Middle Element
- Detect Cycle in LinkedList
