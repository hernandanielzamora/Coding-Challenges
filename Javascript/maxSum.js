/* Maximum sum of a contiguous subarray of size 3 */
/* Fixed length window */

const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
const k = 3;

const maxSum=  (arr, k) => {
  let sum = -1;

  let pointerOne = 0;
  let interSum = 0;

  for(pointerOne; pointerOne < arr.length; pointerOne++) {
    interSum += arr[pointerOne];

    if (pointerOne >= k - 1) {
      sum = Math.max(sum, interSum);
      interSum -= arr[pointerOne - (k - 1)];
    }
  }
  return sum
}

let result = maxSum(arr, k);

console.log(result);