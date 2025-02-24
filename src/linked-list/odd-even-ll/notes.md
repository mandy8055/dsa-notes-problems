# Segregate Odd and Even Linked List

## Problem number

[LC-328](https://leetcode.com/problems/odd-even-linked-list)

## Pattern

Two-pointer / List manipulation

- Time: O(n)
- Space: O(1)

## Key Insight

- Maintain separate chains for odd and even indices, then connect
- **Brute force**: Create new list copying nodes O(n) space

## Test Case

```
Input: 1->2->3->4->5
Expected: 1->3->5->2->4
```

## Steps

1. Track oddHead/oddTail and evenHead/evenTail
2. Build chains by index (odd/even)
3. Connect oddTail to evenHead

## Watch

- Break old links to prevent cycles
- Handle lists with < 2 nodes

## Similar

- Partition List
- Split Linked List in Parts
