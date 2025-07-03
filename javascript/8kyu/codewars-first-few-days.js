// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  
}

// My Solution
function positiveSum(arr) {
  let sum = 0;
  arr.forEach(num => {
    if(num > 0){
    sum += num;
  }
});
  return sum;
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  //...
}

// My Solution
function boolToWord( bool ){
  if(bool === true){
    return "Yes"
  }else{
    return "No"
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
}

// My solution
function opposite(number) {
  return -number
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
function makeNegative(num) {
  // Code?
}

// My Solution
function makeNegative(num) {
  return -Math.abs(num)
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  
}

// My Solution
function solution(str){
  const splitStr = str.split('')
  const reverseStr = splitStr.reverse()
  const result = reverseStr.join('')
  return result
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  // Return a string of the number here!
}

// My Solution
function numberToString(num1, num2, num3) {
  return num1.toString()
  return num2.toString()
  return num3.toString()
}

numberToString(123,999,-100)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. 8 kyu
function evenOrOdd(number) {
  
}

// My Solution
function evenOrOdd(number) {
  if(number % 2 === 0){
    return "Even"
  }else{
    return "Odd"
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This code does not execute properly. Try to figure out why. 8 kyu
function multiply(a, b){
  a * b
}

// <My Solution
function multiply(a, b){
  return a * b
}