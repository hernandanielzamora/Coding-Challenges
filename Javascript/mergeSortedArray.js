let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let n = 3;
nums2 = [2, 5, 6];

var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m && nums1[i] === 0) {
      nums1[i] = nums2[j];
      j++;
    }
  }

  for (let j = 0; j < nums1.length; j++) {
    for (let k = j + 1; k < nums1.length; k++) {
      if (nums1[j] > nums1[k]) {
        let partial = 0;
        partial = nums1[j];
        nums1[j] = nums1[k];
        nums1[k] = partial;
        console.log("J = ", nums1[j]);
        console.log("K = ", nums1[k]);
        console.log("Partial = ", partial);
        console.log("Arr = ", nums1);
      }
    }
  }
};

merge(nums1, m, nums2, n);
