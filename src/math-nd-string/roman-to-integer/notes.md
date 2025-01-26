# Roman to Integer

## Problem Number

- [LC-13](https://leetcode.com/problems/roman-to-integer/description/)

## Problem Pattern:

Compare adjacent characters for special cases

- Time: O(n)
- Space: O(1)

## Key Insight:

- When current < next, subtract current from next (IV = 5-1 = 4)
- **Brute force**: Simply add values left to right, then handle special cases

## Test Case:

Input: "MCMXCIV"
Expected: 1994 (1000 + (1000-100) + (100-10) + 4)

## Steps:

1. Create value mapping for Roman numerals
2. Compare current & next chars - if current smaller, subtract & skip 2 chars
3. Otherwise add current & move 1 char

## Watch:

- Last character needs separate handling
- Special cases: IV(4), IX(9), XL(40), XC(90), CD(400), CM(900)
