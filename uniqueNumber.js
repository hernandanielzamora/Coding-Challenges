let nums = [2, 2, 1];

var singleNumber = function (nums) {
  let hash = {};

  for (const number of nums) {
    hash[number] = hash[number] + 1 || 1;
  }

  for (const key in hash) {
    if(hash[key] === 1) {
      return key
    }
  }
};

singleNumber(nums);
