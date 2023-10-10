/* Find the smallest subarray that >= sum */

const arr = [4, 2, 2, 7, 8, 1, 2, 8, 1, 0];

const k = 8;

const smalles = (arr, k) => {
  let size = Infinity;
  let sum = 0;
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= k) {
      size = Math.min(size, i - j + 1);
      sum -= arr[j];
      j++;
    }
  }

  return size;
};

const result = smalles(arr, k);

console.log(result);
