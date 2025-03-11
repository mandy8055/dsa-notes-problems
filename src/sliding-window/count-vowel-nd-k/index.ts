/**
 * Counts substrings with exactly k consonants and all 5 vowels.
 * T.C: O(n), S.C: O(1)
 */
function countOfSubstrings(word: string, k: number): number {
  const len = word.length;
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelFreq = new Map<string, number>();

  let i = 0,
    j = 0;
  let consonantCount = 0;
  let ans = 0;

  // Pre-calculate next consonant positions
  const nextConsonantPos = new Array(len);
  let currConsonant = len;
  for (let i = len - 1; i >= 0; i--) {
    nextConsonantPos[i] = currConsonant;
    if (!vowelSet.has(word[i])) {
      currConsonant = i;
    }
  }

  while (j < len) {
    const currentChar = word[j];

    // Update window state based on current character
    if (vowelSet.has(currentChar)) {
      vowelFreq.set(currentChar, (vowelFreq.get(currentChar) || 0) + 1);
    } else {
      consonantCount++;
    }

    // Shrink window if we have too many consonants
    while (consonantCount > k) {
      const charToRemove = word[i];
      if (vowelSet.has(charToRemove)) {
        const freq = vowelFreq.get(charToRemove)!;
        if (freq === 1) {
          vowelFreq.delete(charToRemove);
        } else {
          vowelFreq.set(charToRemove, freq - 1);
        }
      } else {
        consonantCount--;
      }
      i++;
    }

    // If we have all vowels and exactly k consonants
    while (i < len && vowelFreq.size === 5 && consonantCount === k) {
      // All positions between j and next consonant form valid substrings
      ans += nextConsonantPos[j] - j;

      // Remove character at i from window
      const charToRemove = word[i];
      if (vowelSet.has(charToRemove)) {
        const freq = vowelFreq.get(charToRemove)!;
        if (freq === 1) {
          vowelFreq.delete(charToRemove);
        } else {
          vowelFreq.set(charToRemove, freq - 1);
        }
      } else {
        consonantCount--;
      }
      i++;
    }

    j++;
  }

  return ans;
}
