# Reverse Linked List

## Problem number

[LC-206](https://leetcode.com/problems/reverse-linked-list)

## Pattern

Iterative: Three Pointers / Recursion

- Time: O(n)
- Space: O(1) iterative, O(n) recursive

## Key Insight

- Think of it like reversing direction of arrows (→ becomes ←)
- Brute force: Store all nodes in array, create new reversed list O(n) space

## Test Case

Input: [1→2→3→4→5]
Expected: [5→4→3→2→1]

## Steps

Analogy(Iterative): "Arrow Reversal Dance"

1. Think of 3 dancers: prev, curr, next (for iterative)
2. curr points to prev, then all shift right
3. When curr hits null, prev is new head

Analogy(Recursive): "Domino Chain Reaction"

1. Base case: Single domino (node) stays as is
2. Main case - Imagine dominos [1→2→3→4→5]:
3. First travel to end (5)
4. Each domino tells next one "point back to me!"
5. Chain reaction comes back from 5 to 1

## Watch

- In iterative: Save next before breaking link
- In recursive: Break old link (head.next = null)

## Similar

- Reverse Linked List II
- Palindrome Linked List
