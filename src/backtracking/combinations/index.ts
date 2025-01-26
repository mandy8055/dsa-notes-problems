// T.C: nCk C(n, k), Approach 1
function combine1(n: number, k: number): number[][] {
  const res: number[][] = [];
  const temp: number[] = [];
  const solve = (st: number, k: number): void => {
    // base case
    if (k === 0) {
      res.push(temp.slice());
      return;
    }
    if (st > n) return;
    // main case
    // take
    temp.push(st);
    // explore
    solve(st + 1, k - 1);
    // remove
    temp.pop();
    // explore
    solve(st + 1, k);
  };

  solve(1, k);
  return res;
}

// Approach 2, T.C: exactly same but different way of writing code
function combine2(n: number, k: number): number[][] {
  const res: number[][] = [];
  const temp: number[] = [];

  const solve = (st: number, k: number): void => {
    // base case
    if (k === 0) {
      res.push(temp.slice());
      return;
    }
    // main case
    for (let i = st; i <= n; i++) {
      // take
      temp.push(i);
      // explore
      solve(i + 1, k - 1);
      // reject
      temp.pop();
      // for loop will take care of exploration after rejection
    }
  };

  solve(1, k);
  return res;
}
