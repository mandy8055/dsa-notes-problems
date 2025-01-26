// Binary Search on answers T.C: O(log n), S.C: O(1)
function mySqrt(x: number): number {
  if (x === 0) return 0;
  let l = 1,
    h = x;
  let ans = 0;
  while (l <= h) {
    const mid = l + Math.trunc((h - l) / 2);
    const res = mid * mid;
    if (res === x) {
      ans = mid;
      break;
    } else if (res > x) {
      h = mid - 1;
    } else {
      ans = mid;
      l = mid + 1;
    }
  }
  return ans;
}
