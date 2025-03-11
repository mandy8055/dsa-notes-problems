function twoSum(nums: number[], target: number): number[] {
  // 1. Take a map
  const len = nums.length;
  const map = new Map<number, number>();
  const res: number[] = [];
  // 2. Store the difference in that map.
  for (let i = 0; i < len; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      res.push(map.get(diff)!, i);
      break;
    }
    map.set(nums[i], i);
  }

  return res;
}
