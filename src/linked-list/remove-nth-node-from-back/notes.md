# Remove Nth Node From End of List

## Problem number

[LC-19](https://leetcode.com/problems/remove-nth-node-from-end-of-list)

## Pattern

Two Pointers / Fast and Slow

- Time: O(n) - one pass through the list
- Space: O(1) - constant extra space

## Key Insight

- Use two pointers with n-gap between them to find the node to remove
- **Brute force**: Two passes - count length then remove n from back O(2n)

## Test Case

Input: `1->2->3->4->5`, `n=2`
Expected: `1->2->3->5`

## Steps

1. Create dummy node (prevents edge cases)
2. Position fast pointer n nodes ahead
3. Move both pointers until fast reaches end, then remove slow.next

## Watch

- Handle head node removal (dummy node helps)
- Ensure n is valid (not larger than list length)

## Similar

- Middle of the Linked List
- Linked List Cycle
