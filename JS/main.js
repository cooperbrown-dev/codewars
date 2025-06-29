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