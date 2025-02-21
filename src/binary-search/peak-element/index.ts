// Brute force O(n)
function findPeakElement1(nums: number[]): number {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (
      (i === 0 && nums[i + 1] < nums[i]) ||
      (i === len - 1 && nums[i] > nums[i - 1]) ||
      (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
    )
      return i;
  }
  return 0;
}

// Binary Search O(log n)
function findPeakElement(nums: number[]): number {
  const len = nums.length;
  // edge cases --> struggled here. Handle them beforehand only
  if (len === 1 || nums[0] > nums[1]) return 0;
  if (nums[len - 1] > nums[len - 2]) return len - 1;

  let low = 1,
    high = len - 2;
  let ans = -1;
  while (low <= high) {
    const mid = low + Math.trunc((high - low) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      ans = mid;
      break;
    } else if (nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
