//the function has Linear time complexity. The bigger n gets the longer time takes to process it.
function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
let start = 0;
let end = 0;
console.log((start = performance.now()));
console.log(sumUp(2000));
console.log((end = performance.now()));
console.log(end - start);

//the function has Constant time complexity. The tame to execute the function is always the same no matter of a size of n.
function sumUp2(n) {
  return (n / 2) * (1 + n);
}

console.log((start = performance.now()));
console.log(sumUp2(2000000));
console.log((end = performance.now()));
console.log(end - start);

//PRACTICE
// #1
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
