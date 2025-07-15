// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  const splitStr = str.split('')
  const reverseStr = splitStr.reverse()
  const result = reverseStr.join('')
  return result
}