function majorityElement3(nums: number[]): number[] {
  const res: number[] = [];
  // Moore's voting
  // Find Winner
  const len = nums.length;

  let c1 = 1;
  let c2 = 0;
  let v1 = nums[0];
  let v2 = nums[0];
  let i = 1;

  while (i < len) {
    if (nums[i] === v1) {
      c1++;
    } else if (nums[i] === v2) {
      c2++;
    } else {
      if (c1 === 0) {
        v1 = nums[i];
        c1++;
      } else if (c2 === 0) {
        v2 = nums[i];
        c2++;
      } else {
        c1--;
        c2--;
      }
    }
    i++;
  }
  // Verify
  (c1 = 0), (c2 = 0);
  for (let el of nums) {
    if (el === v1) c1++;
    else if (el === v2) c2++;
  }

  if (c1 > Math.floor(len / 3)) {
    res.push(v1);
  }

  if (c2 > Math.floor(len / 3)) {
    res.push(v2);
  }

  return res;
}
