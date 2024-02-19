const nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  let ptr1 = 0,
    ptr2 = 1,
    len = nums.length;

  while (ptr2 < len) {
    if (nums[ptr1] != nums[ptr2]) {
      ptr1++;
      nums[ptr1] = nums[ptr2];
    }
    ptr2++;
  }

  return ptr1 + 1;
};
