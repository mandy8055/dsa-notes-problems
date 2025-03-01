// Brute Force O(n^2). Gives TLE on last test case
function rotate1(nums: number[], k: number): void {
  const len = nums.length;
  k %= len;

  for (let i = 0; i < k; i++) {
    // Save last element
    const last = nums[len - 1];

    // Shift all elements right by one
    for (let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }

    // Place last element at the beginning
    nums[0] = last;
  }
}

function rotate2(nums: number[], k: number): void {
  const len = nums.length;
  k %= len; // if k is larger than length of array

  const reverse = (st: number, end: number): void => {
    let i = st,
      j = end;
    while (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
      i++;
    }
  };

  // reverse the whole array
  reverse(0, len - 1);
  // reverse 0 to k
  reverse(0, k - 1);
  // reverse k + 1 to len
  reverse(k, len - 1);
}
