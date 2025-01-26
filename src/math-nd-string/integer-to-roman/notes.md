# Integer to Roman

## Problem number

- [LC-12](https://leetcode.com/problems/integer-to-roman/)

## Pattern:

Greedy highest-to-lowest conversion

- Time: O(1)
- Space: O(1)

## Key Insight:

- Process values from largest to smallest, including special combinations
- **Brute force**: Convert each digit position (ones, tens, hundreds) separately

## Test Case:

Input: 1994
Expected: "MCMXCIV" (1000 + 900 + 90 + 4)

## Steps:

1. Map all values including special cases (CM, CD, etc.)
2. For each symbol, divide num by its value and append symbol that many times
3. Update num to remainder and continue

## Watch:

- Order of map matters (highest to lowest)
- Include all special combinations (CM, CD, XC, XL, IX, IV)
