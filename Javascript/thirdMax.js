const nums = [1, 2, 3];
const nums1 = [2];

var thirdMax = function (nums) {
  let may = 0;
  if (nums.length < 3) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i]) {
          may = nums[j];
        } else {
          may = nums[i];
        }
      }
    }
  }
};
