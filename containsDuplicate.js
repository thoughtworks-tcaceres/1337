// var containsDuplicate = function(nums) {
//   nums.sort();
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function(nums) {
  let setNums = new Set([...nums]);
  return setNums.size === nums.length ? false : true;
};
