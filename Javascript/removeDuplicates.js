const nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  let ptr1 = 0;
  let ptr2 = 0;
  let len = nums.length;

  while (ptr2 < len) {
    if (nums[ptr1] != nums[ptr2]) {
      ptr1++;
      nums[ptr1] = nums[ptr2];
    }
    ptr2++;
  }

  return ptr1 + 1;
};
