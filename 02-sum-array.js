/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
debugger
  //create a starting sum with first ele of arr
  let sum = 0;

  //create base case to end recursion
  //when given arr is epmty return sum
  if(arr.length === 0) {

    return sum;

  }

  //create recursive step
  //assign last ele in arr to variable
  let currVal = arr[arr.length - 1];

  //add last ele of arr to sum
  sum = sum + currVal;

  //remove last ele of arr to move closer to base case
  arr.pop();

  //initiate recusrsion
  return sum + sumArray(arr);

};

console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
