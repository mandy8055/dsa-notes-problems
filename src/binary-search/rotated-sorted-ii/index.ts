function search(nums: number[], target: number): boolean {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      return true;
    }
    // Only this condition gets added
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      // Reduce the search space
      low++;
      high--;
      continue;
    }
    // Identify the sorted half
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
}
