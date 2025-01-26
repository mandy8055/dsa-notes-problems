type Dict = { [k: string]: number };
function romanToInt(s: string): number {
  // Take a result variable to return the result.
  // Iterate over the string. Check first two characters and make decision based on the second char.
  let res = 0;
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const len = s.length;
  let i = 0;
  while (i < len - 1) {
    const ch1 = s.charAt(i);
    const ch2 = s.charAt(i + 1);
    if (dict[ch1] >= dict[ch2]) {
      res += dict[ch1];
      i++;
    } else {
      res += dict[ch2] - dict[ch1];
      i += 2;
    }
  }

  if (i < len) {
    res += dict[s.charAt(i)];
  }

  return res;
}
