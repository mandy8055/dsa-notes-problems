function trap(height: number[]): number {
  const len = height.length;
  let l = 0,
    r = len - 1;
  let lM = height[l],
    rM = height[r];
  let ans = 0;
  while (l < r) {
    if (lM < rM) {
      l++;
      lM = Math.max(lM, height[l]);
      ans += lM - height[l];
    } else {
      r--;
      rM = Math.max(rM, height[r]);
      ans += rM - height[r];
    }
  }

  return ans;
}
