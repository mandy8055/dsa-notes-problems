# Count Vowel Substrings

## Problem number

Leetcode 2062

## Pattern

Sliding Window / HashMap

- Time: O(n)
- Space: O(1)

## Key Insight

- Track last seen positions of each vowel and last consonant
- Count valid substrings ending at each vowel
- **Brute force**: Generate all substrings and check each one O(n³)

## Test Case

Input: "aeiou"
Expected: 1

## Steps

1. Track last position of each vowel and last consonant
2. At each vowel, find earliest vowel seen after last consonant
3. Add count of valid substrings ending at current position

## Watch

- Reset tracking when hitting consonants
- Ensure all 5 vowels are present in substring
- Handle case where some vowels haven't appeared yet

## Similar

- Substring with Concatenation of All Words
- Count Number of Nice Subarrays
