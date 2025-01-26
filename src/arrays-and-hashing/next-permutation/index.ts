// T.C: O(k), k = number of digits in number(can be constant), S.C: O(k)
function nextGreaterElement1(n: number): number {
  // Convert number to string array
  const digits = [...n.toString()];
  const len = digits.length;
  // Find the first dip index
  let i = len - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) i--;

  // edge case
  if (i < 0) return -1;

  let j = len - 1;
  while (j > i && digits[j] <= digits[i]) j--;
  // Swap digits[i] with digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];
  // Reverse all numbers starting from i + 1
  digits
    .splice(i + 1)
    .reverse()
    .forEach((d) => digits.push(d));

  const ans = parseInt(digits.join(''));

  return ans > 2 ** 31 - 1 ? -1 : ans;
}

// Another approach which leverages next permutation
function nextGreaterElement2(n: number): number {
  const nextPermutation = (nums: string[]): void => {
    const len = nums.length;
    // find the dip index
    let i = len - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
      // find first index from left where nums[j] is greater than nums[i]
      let j = len - 1;
      while (j > i && nums[j] <= nums[i]) j--;
      // swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let l = i + 1,
      r = len - 1;
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  };
  const digits = [...n.toString()];
  nextPermutation(digits);
  const res = parseInt(digits.join(''));
  return res > 2 ** 31 - 1 || res <= n ? -1 : res;
}
