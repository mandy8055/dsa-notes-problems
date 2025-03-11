# Count Substrings with K Consonants and All Vowels

## Problem number

Similar to LC-2062 (extension)

## Pattern

Sliding Window + Preprocessing

- Time: O(n)
- Space: O(n)

## Key Insight

- Maintain a window with exactly k consonants and all 5 vowels
- Precompute next consonant positions to quickly count valid substrings
- **Brute force**: Check each substring individually O(n³)

## Test Case

Input: "aeioubc", k=2
Expected: 1

## Steps

1. Precompute next consonant position for each index
2. Use sliding window to maintain vowel count and consonant count
3. When window has all vowels and k consonants, count valid substrings

## Watch

- Edge case when some vowels are missing
- Carefully manage frequency of each vowel in window
- Handle expanding/shrinking window based on consonant count

## Similar

- Count Vowel Substrings
- Substring with Concatenation of All Words
