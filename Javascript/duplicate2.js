let nums = [0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0];

let k = 1;

var containsNearbyDuplicate = function (nums, k) {
  let sum = 0;
  let founded = false;
  let minor = false;
  let succed = false;

  if (nums.length <= 1) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        sum = j - i;
        founded = true;
      }
    }
  }

  Math.abs(sum);

  if (sum <= k) {
    console.log(sum);
    minor = true;
  }

  if (minor && founded) {
    succed = true;
  }

  return succed;
};

const res = containsNearbyDuplicate(nums, k);

console.log(res);
