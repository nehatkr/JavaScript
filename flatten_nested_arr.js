// Input:- [1, [2, [3, [4, [5]]]]]
// output:- [1, 2, 3, 4, 5]

function flattenArray(arr) {
  let result = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element)); // recursively flatten
    } else {
      result.push(element);
    }
  });

  return result;
}

// Test
const input = [1, [2, [3, [4, [5]]]]];
console.log(flattenArray(input)); // Output: [1, 2, 3, 4, 5]
