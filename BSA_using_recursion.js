// Recursive binary search function
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  // Base case: target not found
  if (start > end) {
    return -1;
  }
  // Calculate middle index
  const mid = Math.floor((start + end) / 2);
  // Check if target is at the middle
  if (arr[mid] === target) {
    return mid;
  }
  // If target is smaller, search in the left half
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  // If target is larger, search in the right half
  return binarySearch(arr, target, mid + 1, end);
};
// Test the binary search function
const sortedArray1 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
const target1 = 6;
const sortedArray2 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
const target2 = -1;
console.log(`Index of ${target1}: ${binarySearch(sortedArray1, target1)}`);
console.log(`Index of ${target2}: ${binarySearch(sortedArray2, target2)}`); 
