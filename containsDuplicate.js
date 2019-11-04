/*method 1*/
// var containsDuplicate = function(nums) {
//   nums.sort();
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };

/*method 2*/
// var containsDuplicate = function(nums) {
//   let setNums = new Set([...nums]);
//   return setNums.size === nums.length ? false : true;
// };

/*method 3*/

var containsDuplicate = function(nums) {
  let setNums = new Set(nums);
  return setNums.size < nums.length;
};
