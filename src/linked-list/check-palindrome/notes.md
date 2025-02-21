# Palindrome Linked List

## Problem number

[LC-234](https://leetcode.com/problems/palindrome-linked-list)

## Pattern

Two Pointers (Fast/Slow) + Reversal

- Time: O(n)
- Space: O(1) [or O(n) for recursive]

## Key Insight

- Find middle, reverse second half, compare with first half
- **Brute force**: Convert to array and check palindrome O(n) space

## Test Case

Input: `1->2->2->1`
Expected: true

## Steps

1. Find middle using fast/slow pointers
2. Reverse second half starting from slow.next
3. Compare first half with reversed second half

## Watch

- Handle even vs odd length lists
- Restore list to original state if needed

## Similar

- Reverse Linked List
- Middle of Linked List

## Review

2025-02-21
