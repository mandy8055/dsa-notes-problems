// Brute T.C: O(n^3), S.C: O(1) TLE
function maxSubArray1(nums: number[]): number {
  let ans = -Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      ans = Math.max(ans, sum);
    }
  }
  return ans;
}

// Better Brute T.C: O(n^2), S.C: O(1) TLE
function maxSubArray2(nums: number[]): number {
  let ans = -Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      ans = Math.max(ans, sum);
    }
  }
  return ans;
}

// Optimal Kadane's algorithm T.C: O(n), S.C: O(1)
function maxSubArray(nums: number[]): number {
  let ans = -Infinity;
  let cS = 0;
  for (let el of nums) {
    cS += el;
    ans = Math.max(ans, cS);
    cS = Math.max(cS, 0);
  }
  return ans;
}
