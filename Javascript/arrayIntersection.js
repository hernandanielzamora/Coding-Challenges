const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

var intersection = function (nums1, nums2) {
  let result = [];
  
  for(let i = 0; i < nums1.length; i++) {
    if(nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i])
    }
  }

  for(let j = 0; j < nums2.length; j++) {
    if(nums1.includes(nums2[j]) && !result.includes(nums2[j])){
      result.push(nums2[j])
    }
  }
  return result;
};

let res = intersection(nums1, nums2);
console.log(res);
