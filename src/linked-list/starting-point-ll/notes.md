# Find Start of Linked List Cycle (Floyd's Algorithm)

## Problem number

[LC-142](https://leetcode.com/problems/linked-list-cycle-ii)

## Pattern

Two-pointer / Floyd's Cycle Detection

- Time: O(n)
- Space: O(1)

## Key Insight

- After meeting, distance from head to cycle start equals distance from meeting point to cycle start
- **Brute force**: Hash visited nodes O(n) space

## Test Case

```
Input: 3->2->0->-4
           ↑_____↓
Expected: node with value 2
```

## Steps

1. Use fast/slow to detect cycle and find meeting point
2. Reset one pointer to head
3. Move both one step until they meet again

## Watch

- Handle no cycle case
- Both pointers must move at same speed in phase 2

## Similar

- Linked List Cycle
- Happy Number

## Mathematical Proof

Let's prove why this works:

1. Let's say:

   - Distance from head to cycle start = x
   - Distance from cycle start to meeting point = y
   - Remaining cycle length = z

2. When they meet:

   - Slow pointer distance = x + y
   - Fast pointer distance = x + y + n(y + z)
     where n is number of cycle completions

3. Since fast moves 2× speed:

   ```
   2(x + y) = x + y + n(y + z)
   2x + 2y = x + y + n(y + z)
   x + y = n(y + z)
   x = n(y + z) - y
   ```

4. From meeting point, to reach cycle start:
   - From head: need to travel x
   - From meeting point: need to travel n(y + z) - y = x

Therefore, both pointers will meet at cycle start!
