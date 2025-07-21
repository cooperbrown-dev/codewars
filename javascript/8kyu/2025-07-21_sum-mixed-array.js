// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My solution:

function sumMix(x){
  const allIntegers = x.map(Number);
  return allIntegers.reduce((acc, c) => acc + c, 0);
}

// Other solution for review:

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}