// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

// Define a function named last_digit with parameters x, y, and z
function last_digit(x, y, z) {
  // Check if x, y, and z are greater than 0
  if (x > 0 && y > 0 && z > 0) {
    // Check if the last digits of x, y, and z are equal
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    // If any of the numbers is not greater than 0, return false
    return false;
  }
}

// Log the result of calling last_digit with the arguments 20, 30, and 400 to the console
console.log(last_digit(20, 30, 400));

// Log the result of calling last_digit with the arguments -20, 30, and 400 to the console
console.log(last_digit(-20, 30, 400));

// Log the result of calling last_digit with the arguments 20, -30, and 400 to the console
console.log(last_digit(20, -30, 400));

// Log the result of calling last_digit with the arguments 20, 30, and -400 to the console
console.log(last_digit(20, 30, -400)); 
