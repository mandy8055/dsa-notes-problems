function numberOfSubstrings(s: string): number {
  let idxA = -1,
    idxB = -1,
    idxC = -1;
  const len = s.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === 'a') idxA = i;
    else if (s[i] === 'b') idxB = i;
    else idxC = i;
    if (idxA === -1 || idxB === -1 || idxC === -1) continue;
    const minIdxOfLastSeen = Math.min(idxA, idxB, idxC);
    ans += minIdxOfLastSeen + 1;
  }
  return ans;
}
