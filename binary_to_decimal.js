// Recursive function to convert a binary number to decimal
const binaryToDecimal = (binaryString, index = 0) => {
  // Base case: if the string is empty, return 0
  if (index === binaryString.length) {
    return 0;
  }

  // Get the current binary digit (0 or 1)
  const currentDigit = parseInt(binaryString[index]);

  // Recursive step: convert the rest of the string and update the result
  const restDecimal = binaryToDecimal(binaryString, index + 1);
  const currentDecimal = currentDigit * Math.pow(2, binaryString.length - index - 1);

  return currentDecimal + restDecimal;
};

// Test the function with different binary numbers
console.log(binaryToDecimal("1")); 
console.log(binaryToDecimal("0")); 
console.log(binaryToDecimal("10"));  
console.log(binaryToDecimal("101")); 
