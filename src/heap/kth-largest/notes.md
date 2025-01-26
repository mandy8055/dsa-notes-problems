# Kth Largest Element

## Problem number

[LC-215](https://leetcode.com/problems/kth-largest-element-in-an-array)

## Pattern

MinHeap or QuickSelect

- Time: O(nlogk) with heap, O(n) average with QuickSelect
- Space: O(k) with heap, O(1) with QuickSelect

## Key Insight

- Keep k largest elements in minHeap or partition around kth position
- **Brute force**: Sort array and return n - kth element O(nlogn)

## Test Case

Input: [3,2,1,5,6,4], k=2
Expected: 5

## Steps

1. Build minHeap of first k elements
2. For remaining elements, add to heap if > heap.peek()
3. Return heap.peek() as kth largest

## Watch

- MinHeap vs MaxHeap choice affects implementation
- Index conversion for kth largest to kth smallest

## Similar

- Top K Frequent Elements
- Sort Colors (QuickSelect variant)
