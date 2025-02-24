# Construct Binary Tree from Preorder and Inorder Traversal

## Problem number

[LC-105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)

## Pattern

Tree Construction / Divide & Conquer

- Time: O(n) optimal, O(n²) brute force
- Space: O(n) for hash map + recursion stack

## Key Insight

- First element in preorder is root, use it to split inorder into left/right subtrees
- **Brute force**: Using indexOf for each node search O(n²)

## Test Case

```
Preorder: [3,9,20,15,7]
Inorder:  [9,3,15,20,7]
Expected:    3
           /   \
          9    20
              /  \
             15   7
```

## Steps

1. Use preorder[idx] as root
2. Find root in inorder (using map for O(1))
3. Recursively build left & right using split ranges

## Watch

- Maintain correct preorder index across recursion
- Handle base cases (empty ranges)

## Optimizations

1. Naive: O(n²) using indexOf
2. Better: O(n) with hashmap for index lookup
3. Best: O(n) using parent value as bound (no map needed)

## Similar

- Construct Binary Tree from Inorder and Postorder
- Serialize and Deserialize Binary Tree

## How the most optimal approach works?

### Key Algorithm (O(1) Space)

Instead of finding split point in inorder:

1. Pass parent value as bound for each subtree
2. When inorder[inIdx] matches bound, subtree is complete
3. Left child bound is current node's value
4. Right child bound is parent's value

This works because:

- We know preorder: root -> left -> right
- We know inorder: left -> root -> right
- When we hit parent value in inorder, it means we've completed that subtree

For Example:

```
Preorder: [1,2,4,5,3,6]
Inorder: [4,2,5,1,6,3]

Process:

1. root(1) -> left(bound=1)
   - root(2) -> left(bound=2)
     - root(4) -> left(bound=4)
       - hits 4 in inorder, return
     - right(bound=2)
       - root(5) -> left(bound=5)
         - hits 5, return
       - right(bound=2)
         - hits 2, return
   - right(bound=1)
     ...continues
```

This is more space efficient as it avoids using a hashmap and only uses the recursion stack.
