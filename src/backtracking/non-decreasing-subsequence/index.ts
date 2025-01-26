function findSubsequences1(nums: number[]): number[][] {
  const res: number[][] = [];
  const temp: number[] = [];
  const len = nums.length;

  const solve = (st: number): void => {
    // base case
    if (temp.length >= 2) {
      res.push(temp.slice());
    }

    // main case
    const set = new Set<number>();
    for (let i = st; i < len; i++) {
      // take
      if (
        !set.has(nums[i]) &&
        (temp.length === 0 || nums[i] >= temp[temp.length - 1])
      ) {
        temp.push(nums[i]);
        // explore
        solve(i + 1);
        // remove
        temp.pop();
        set.add(nums[i]);
      }
    }
  };

  solve(0);
  return res;
}

// Classic Backtracking template and without using Set
function findSubsequences2(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  const temp: number[] = [];
  // const set = new Set<number>();

  const solve = (idx: number) => {
    // base case
    if (idx > len) {
      if (temp.length >= 2) {
        res.push(temp.slice());
      }
      return;
    }

    if (temp.length === 0 || nums[idx] >= temp[temp.length - 1]) {
      // take
      temp.push(nums[idx]);
      //explore
      solve(idx + 1);
      // reject
      temp.pop();
    }
    if (idx > 0 && temp.length > 0 && nums[idx] === temp[temp.length - 1])
      return;
    // explore
    solve(idx + 1);
  };

  solve(0);
  return res;
}
