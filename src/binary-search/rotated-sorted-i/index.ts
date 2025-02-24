// Brute would be a simple linear search. O(n)
function search(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1;
  let idx = -1;
  while (low <= high) {
    const mid = low + Math.trunc((high - low) / 2);
    if (nums[mid] === target) {
      idx = mid;
      break;
    } else if (nums[low] <= nums[mid]) {
      // check for equality also. Struggled here
      // left half is sorted
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // right half is sorted
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return idx;
}
