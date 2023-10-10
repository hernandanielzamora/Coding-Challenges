let nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] != 0) {
        console.log(nums);
        let partial = 0;
        partial = nums[j];
        nums[j] = nums[i];
        nums[i] = partial;
        console.log("i = ", nums[i]);
        console.log("j = ", nums[j]);
        console.log("Partial = ", partial);
        console.log("Arr = ", nums);
      }
    }
  }
};

moveZeroes(nums)