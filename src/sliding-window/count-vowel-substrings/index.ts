function countVowelSubstrings(word: string): number {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  const len = word.length;
  let lastCons = -1;
  const lastSeenVowels: Record<string, number> = {
    a: -2,
    e: -2,
    i: -2,
    o: -2,
    u: -2,
  };
  let ans = 0;
  for (let i = 0; i < len; i++) {
    const ch = word[i];
    if (VOWELS.includes(ch)) {
      // vowel
      lastSeenVowels[ch] = i;
      const minIdxLastSeen = Math.min(...Object.values(lastSeenVowels));
      ans += Math.max(minIdxLastSeen - lastCons, 0);
    } else {
      // consonant
      lastCons = i;
    }
  }
  return ans;
}
