#!/usr/bin/node

const arg = process.argv[2];
const num = Number(arg);

function factorial(n) {
  if (isNaN(n)) {
    return 1;               // factorial of NaN
  }
  if (n <= 1) {
    return 1;               // base case: 0! = 1, 1! = 1
  }
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(num));
