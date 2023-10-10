const x = 121;

var isPalindrome = function (x) {
  let num = x.toString();
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    console.log(num[num.length - 1 - i]);
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const res = isPalindrome(x);

console.log(res);