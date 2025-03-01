// Approach 1: T.C: O(n), S.C: O(n)
// function majorityElement(nums: number[]): number {
//     const len = nums.length;
//     const map = new Map<number, number>();
//     for(let el of nums){
//         map.set(el, (map.get(el) || 0) + 1);
//     }
//     for(let k of map.keys()){
//         if(map.get(k) > Math.floor(len / 2)){
//             return k;
//         }
//     }
//     return -1; // unreachable since there will always be a majority element
// };

// Approach 2: Moore's voting algorithm
function majorityElement(nums: number[]): number {
  const len = nums.length;
  let ans = nums[0];
  let mCount = 1;
  // Voting
  for (let i = 1; i < len; i++) {
    if (nums[i] === ans) {
      mCount++;
    } else {
      if (--mCount <= 0) {
        ans = nums[i];
        mCount = 1;
      }
    }
  }

  // verification
  // Not required here since in the question it is mentioned that there will always be a ME
  return ans;
}
