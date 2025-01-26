function intToRoman(num: number): string {
  // highest to lowest is of atmost importance
  const dict = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let res = '';
  for (let k of Object.keys(dict)) {
    const div = Math.floor(num / dict[k]);
    num %= dict[k];
    if (div !== 0) {
      res += k.repeat(div);
    }
    if (num === 0) break;
  }
  return res;
}
