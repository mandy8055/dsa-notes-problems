function maxAbsoluteSum(nums: number[]): number {
  // Get Max and Min subarray sum using Kadane's
  let maxSum = -Infinity;
  let minSum = Infinity;
  let cMaxS = 0;
  let cMinS = 0;
  for (let el of nums) {
    cMaxS += el;
    cMinS += el;
    maxSum = Math.max(maxSum, cMaxS);
    minSum = Math.min(minSum, cMinS);
    cMaxS = Math.max(cMaxS, 0);
    cMinS = Math.min(cMinS, 0);
  }

  return Math.max(Math.abs(maxSum), Math.abs(minSum));
}
