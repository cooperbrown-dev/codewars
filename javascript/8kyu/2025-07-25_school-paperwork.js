// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// My solution:
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }else{
  return n * m
    }
}

// Other solutions for review:
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}

paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m