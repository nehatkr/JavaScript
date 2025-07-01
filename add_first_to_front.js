// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

// Define a function named front_back that takes a parameter str
function front_back(str) {
  // Extract the first character of str
  first = str.substring(0, 1);
  // Return the concatenation of first, str, and first
  return first + str + first;
}

// Log the result of calling the front_back function with the argument 'a' to the console
console.log(front_back('a'));

// Log the result of calling the front_back function with the argument 'ab' to the console
console.log(front_back('ab'));

// Log the result of calling the front_back function with the argument 'abc' to the console
console.log(front_back('abc')); 
