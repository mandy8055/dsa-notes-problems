# First Missing Positive

## Problem number

[LC-41](https://leetcode.com/problems/first-missing-positive)

## Pattern

Array indexing as hash table

- Time: O(n)
- Space: O(1)

## Key Insight

- Use array indices to mark presence of numbers
- Negative marking avoids extra space
- **Brute force**: Sort and check consecutive numbers O(nlogn)

## Test Case

Input: [3,4,-1,1]
Expected: 2

## Steps

1. Check if 1 exists, convert invalid numbers to 1
2. Mark presence by negating at index (num-1)
3. First positive index+1 is answer

## Edge Cases

```typescript
// Basic
[1]             // => 2
[]              // => 1
[1,2,3]         // => 4

// Negatives & Zero
[-1,-2]         // => 1
[0,1,2]         // => 3

// Duplicates
[1,1,1]         // => 2
[1,1,2,2]       // => 3

// Missing 1
[2,3,4]         // => 1

// Large gaps
[1,10,100]      // => 2

// Out of range
[Integer.MAX]   // => 1
```

## Watch

- Check for presence of 1 first
- Handle numbers outside valid range (≤0 or >n)

## Similar

- Missing Number
- Find All Numbers Disappeared in Array
