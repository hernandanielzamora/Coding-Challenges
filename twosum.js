/* Using the 2 pointers technique */

const arr = [1, 2, 3, 4, 5];
let target = 5;

/* Find elements that add up to 6 */

const two_sum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) === target)
        console.log(`${array[i]} + ${array[j]} = ${target}`);
    }
  }
}

two_sum(arr, target);

const two_sum_double = (array, target) => {
  let pointerOne = 0;
  let pointerTwo = array.length - 1;
  
  while (pointerOne < pointerTwo) {
    let sum = array[pointerOne] + array[pointerTwo];
    if (sum === target) {
      console.log(`Found! ${array[pointerOne]} + ${array[pointerTwo]} = ${target}`);
      return true;
    } else if (sum < target){
      pointerOne += 1;
    } else {
      pointerTwo -= 1;
    }
  }
}

two_sum_double(arr, target);