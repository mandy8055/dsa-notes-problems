// Naive Brute force T.C: O(n^3), S.C: O(1)
function numOfSubarrays1(arr: number[]): number {
  let count = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum % 2 === 1) count++;
    }
  }
  return count;
}

// Better Brute Force T.C: O(n^2), S.C: O(1)
function numOfSubarrays2(arr: number[]): number {
  let count = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      if (sum % 2 === 1) count++;
    }
  }
  return count;
}

// Optimal T.C: O(n), S.C: O(1)
function numOfSubarrays3(arr: number[]): number {
  const MOD = 1e9 + 7;
  let ans = 0;
  let prefixSum = 0;
  let evenC = 1;
  let oddC = 0;

  for (let el of arr) {
    prefixSum += el;
    if (prefixSum % 2 === 0) {
      ans += oddC;
      evenC++;
    } else {
      ans += evenC;
      oddC++;
    }
  }

  return ans % MOD;
}
