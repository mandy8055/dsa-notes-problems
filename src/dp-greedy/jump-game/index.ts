// Recursion(TLE) T.C: O(n^k), k = Max(nums), n = length
function canJump1(nums: number[]): boolean {
  const len = nums.length;
  const recurse = (idx: number): boolean => {
    // base case
    if (idx === len - 1) return true;
    // main case
    for (let i = nums[idx]; i >= 1; i--) {
      if (recurse(idx + i)) {
        return true;
      }
    }
    return false;
  };

  return recurse(0);
}

// Recursion and Memoization T.C: O(kn)
function canJump2(nums: number[]): boolean {
  const map = new Map<number, boolean>();
  const len = nums.length;
  const recurse = (idx: number): boolean => {
    // base case
    if (idx === len - 1) return true;
    if (map.has(idx)) return map.get(idx)!;
    // main case
    for (let i = nums[idx]; i >= 1; i--) {
      if (recurse(idx + i)) {
        map.set(idx, true);
        return true;
      }
    }
    map.set(idx, false);
    return false;
  };

  return recurse(0);
}

// Bottom up T.C: O(n^2)
function canJump3(nums: number[]): boolean {
  const len = nums.length;
  const dp: boolean[] = new Array(len).fill(false);
  dp[0] = true;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (j + nums[j] >= i && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len - 1];
}

// Greedy T.C: O(n) -> Optimal
function canJump4(nums: number[]): boolean {
  const len = nums.length;
  let maxReachable = 0;
  for (let i = 0; i < len; i++) {
    if (i > maxReachable) {
      return false;
    }
    maxReachable = Math.max(maxReachable, nums[i] + i);
  }
  return true;
}
