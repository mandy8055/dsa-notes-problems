// T.C: O(n^2), S.C: O(1)
function threeSum(nums: number[]): number[][] {
  const res: [number, number, number][] = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const t = nums[l] + nums[r];
      if (t === -nums[i]) {
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
      } else if (t > -nums[i]) {
        r--;
      } else {
        l++;
      }
    }
  }

  return res;
}
