# Number of Substrings Containing All Three Characters

## Problem number

[LC-1358](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters)

## Pattern

Last Position Tracking

- Time: O(n)
- Space: O(1)

## Key Insight

- Track last position of each required character ('a', 'b', 'c')
- For each position, count all valid substrings that end at current position
- **Brute force**: Check each substring for required characters O(n²)

## Test Case

Input: "abcabc"
Expected: 10

## Steps

1. Track last position of each character ('a', 'b', 'c')
2. At each position, find the minimum last-seen position
3. Add (minimum_position + 1) to answer - represents subarrays starting from 0 to min_position

## Watch

- Initialize tracking positions to -1 to handle not-yet-seen characters
- Formula for counting: ans += minIdxOfLastSeen + 1
- Ensure all required characters are present before counting

## Mind Map: Last Position Tracking Pattern

- **When to apply**:

  - When counting substrings/subarrays containing specific set of elements
  - **When last occurrence is sufficient**:

    - In LC-1358: We only need to know where each character ('a', 'b', 'c') last appeared, not how many of each
    - In Vowel Substrings: We only track where each vowel ('a', 'e', 'i', 'o', 'u') was last seen, not their frequencies

  - **When earliest position determines substring count**:
    - In LC-1358: If at position 10, 'a' was last at position 7, 'b' at position 5, 'c' at position 9, then all substrings starting at positions 0-5 and ending at position 10 contain all three characters
    - In Vowel Substrings: If the earliest vowel appeared at position 4 after last consonant at position 2, then positions 3 and 4 can be starting points for valid substrings

## Similar

- Count Vowel Substrings of a String
- Subarrays with K Different Integers (variation)
