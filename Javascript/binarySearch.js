let nums = [-1, 0, 3, 5, 9, 12];
let target = 2;

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let found = false;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      found = true
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  if(found) {
    return left
  } else {
    return -1;
  }
};

const res = search(nums, target);

console.log(res);
