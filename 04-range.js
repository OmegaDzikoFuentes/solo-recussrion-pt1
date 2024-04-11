/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

debugger
function range(start, end) {

  //if start greater than end return empty arr
  if(start > end) {

    return [];

  }
  let arr = [start]
  //create base case
  if(start === end - 1) {

    return arr;
  }
  //create recusrsive step
  return arr = [...arr, ...range(start + 1, end)];

}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
