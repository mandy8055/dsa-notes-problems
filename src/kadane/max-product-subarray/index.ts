// T.C: O(n), S.C: O(1)
function maxProduct(nums: number[]): number {
  let ans = -Infinity;
  let cP = 1;
  const len = nums.length;
  for (let el of nums) {
    cP *= el;
    ans = Math.max(ans, cP);
    if (cP === 0) cP = 1;
  }
  cP = 1;
  for (let i = len - 1; i >= 0; i--) {
    cP *= nums[i];
    ans = Math.max(ans, cP);
    if (cP === 0) cP = 1;
  }
  return ans;
}
