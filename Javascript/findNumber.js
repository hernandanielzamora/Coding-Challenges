/*
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findNumber(arr, k) {
  // Write your code here
  let res = 'NO';
  for (let i = 0; i < arr.length; i++) {
    if(k === arr[i]) {
      res = 'YES'
    }
  }

  return res;
}
