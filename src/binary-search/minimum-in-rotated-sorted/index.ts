// Brute would be a simple linear search. O(n)
function findMin(nums: number[]): number {
  let min: number = Infinity;
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = low + Math.trunc((high - low) / 2);
    // Identify the sorted half
    if (nums[low] <= nums[mid]) {
      // left half is sorted
      min = Math.min(min, nums[low]);
      low = mid + 1;
    } else {
      // right half is sorted
      min = Math.min(min, nums[mid]);
      high = mid - 1;
    }
  }

  return min;
}
