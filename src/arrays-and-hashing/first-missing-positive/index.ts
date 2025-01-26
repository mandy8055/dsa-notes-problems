// Naive approach: T.C: O(nlogn), S.C: O(n)

function firstMissingPositive1(nums: number[]): number {
  const t = Array.from(
    new Set([...nums].sort((a, b) => a - b).filter((el) => el > 0)),
  );
  const len = t.length;
  for (let i = 0; i < len; i++) {
    if (t[i] !== i + 1) {
      return i + 1;
    }
  }
  return len + 1;
}

// Better but with S.C.: O(n)
function firstMissingPositive2(nums: number[]): number {
  const len = nums.length;
  let sum = 0;
  const present = new Array(len).fill(false);
  for (let el of nums) {
    if (el > 0 && el <= len) {
      sum += el;
    }
  }
  return present.indexOf(false) + 1 || len + 1;
}

// Optimal: T.C: O(n), S.C: O(1)
function firstMissingPositive3(nums: number[]): number {
  const len = nums.length;
  let contains1 = false;
  // Check if 1 is present and convert all out of range numbers( <= 0 && > n) to 1.
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) contains1 = true;
    if (nums[i] <= 0 || nums[i] > len) {
      nums[i] = 1;
    }
  }

  // if contains1 is false return 1
  if (!contains1) return 1;

  // Iterate over the array once again and mark all available value's indices as negative
  for (let i = 0; i < len; i++) {
    const num = Math.abs(nums[i]);
    const idx = num - 1;
    if (nums[idx] < 0) continue;
    nums[idx] *= -1;
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return len + 1;
}
