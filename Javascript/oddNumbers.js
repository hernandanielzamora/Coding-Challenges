/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */
let l = 2;
let r = 5;

function oddNumbers(l, r) {
  // Write your code here
  let arr = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      arr.push(i)
    }
  }

  return arr;
}

const res = oddNumbers(l,r);
console.log(res);