# Polynomial Addition

## Problem number

[LC-None] (Custom problem)

## Pattern

Linked List / Merge

- Time: O(m+n)
- Space: O(m+n)

## Key Insight

- Merge two polynomials based on exponent comparison
- **Brute force**: Convert to arrays, combine, sort by exponent, then rebuild list O(nlogn)

## Test Case

Input:

```
A: 3x^4 → 2x^2 → 1x^0
B: 5x^3 → 2x^2 → 4x^0
```

Expected: 3x^4 → 5x^3 → 4x^2 → 5x^0

## Steps

1. Compare exponents of current nodes from both lists
2. Add terms with same exponent, skip if sum is zero
3. Attach remaining nodes from non-empty list

## Watch

- Skip terms where coefficient sums to zero
- Remember to attach remaining list after main loop

## Similar

- Merge Two Sorted Lists
- Add Two Numbers
