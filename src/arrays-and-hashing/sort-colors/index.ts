// Brute Force: Sort the array T.C: O(nlogn), S.C: O(1)
// function sortColors(nums: number[]): void {
//     nums.sort((a, b) => a - b);
// };
// Better T.C: O(n), S.C: O(1). why O(1) map is of size 3 only?
// function sortColors(nums: number[]): void {
//     const len = nums.length;
//     const map = new Map<number, number>();
//     for(let el of nums){
//         map.set(el, (map.get(el) || 0) + 1);
//     }

//     let ct = 0;
//     let i = 0;
//     while(map.size > 0){
//         let nm = map.get(ct)!;
//         while(nm--){
//             nums[i++] = ct;
//         }
//         map.delete(ct++);
//     }
// };

// Another approach T.C: O(n), S.C: O(1)
function sortColors(nums: number[]): void {
  const len = nums.length;
  let i = 0,
    j = 0,
    k = len - 1;
  while (i <= k) {
    if (nums[i] === 2) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k--;
    } else if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }
}
