// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// My solution:
function mergeArrays(arr1, arr2) {
  if (arr1.length > 1 && arr1[0] > arr1.length - 1){
    arr1 = arr1.reverse();
  }
  if (arr2.lenght > 1 && arr2[0] > arr2.length - 1){
    arr2 = arr2.reverse();
  }
  return [...new Set([...arr1, ...arr2])].sort((a,b) => a - b);
}

// Other solution for review:
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}