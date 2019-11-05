//attempt 1
var singleNumber = function(nums) {
  const numTimes = {};
  for (let i = 0; i < nums.length; i++) {
    numTimes[nums[i]] = numTimes[nums[i]] ? ++numTimes[nums[i]] : 1;
  }
  for (const i in numTimes) {
    if (numTimes[i] === 1) {
      return i;
    }
  }
};

// attempt 2
var singleNumber = function(nums) {
  const numTimes = {};
  for (let i = 0; i < nums.length; i++) {
    if (numTimes[nums[i]]) {
      delete numTimes[nums[i]];
    } else {
      numTimes[nums[i]] = 1;
    }
  }
  return Object.keys(numTimes)[0];
};

// attempt 3
var singleNumber = function(nums) {
  const numTimes = {};
  for (let i = 0; i < nums.length; i++) {
    numTimes[nums[i]] ? delete numTimes[nums[i]] : (numTimes[nums[i]] = 1);
  }

  return Object.keys(numTimes)[0];
};
