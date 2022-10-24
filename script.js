//the function has Linear time complexity. The bigger n gets the longer time takes to process it.
// function sumUp(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// let start = 0;
// let end = 0;
// console.log((start = performance.now()));
// console.log(sumUp(2000));
// console.log((end = performance.now()));
// console.log(end - start);

//the function has Constant time complexity. The tame to execute the function is always the same no matter of a size of n.
// function sumUp2(n) {
//   return (n / 2) * (1 + n);
// }

// console.log((start = performance.now()));
// console.log(sumUp2(2000000));
// console.log((end = performance.now()));
// console.log(end - start);

//PRACTICE
// #1 task
//way-1
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str == reversed;
}

console.log(palindrome("wow"));
console.log(palindrome("no"));

//way-2
function palindrome1(str) {
  str.split("").every((char, i) => {
    return char == str[str.length - i - 1];
  });
}

//every() returns true if all elements in an array pass a test (provided as a function).
console.log(palindrome1("wow"));
console.log(palindrome1("no"));

// #2 task
//Constant Time Complexity - The best solution
function calcArrSum(arr) {
  return arr.reduce((sum, currNum) => sum + currNum, 0); //the line runs only 1.
}
console.log(calcArrSum([1, 2, 3]));

//T = 1 => O(1) => Constant Time Complexity

//Linear Time Complexity  - more numbers takes more time to process
function CalcArrSum2(numbersArray) {
  let sum = 0; //the line runs 1
  for (const number of numbersArray) {
    //the line runs 1
    sum += number; //the line runs n (n for each number in an array, which depends from given array of numbers)
  }
  return sum; //the line runs 1
}
//T = 1 + 1 + 1 + n = 3 + n or 3 + 1*n
// T = 1*n or T = n => O(n) => Linear Time Complexity

console.log(CalcArrSum2([5, 7, 10]));
