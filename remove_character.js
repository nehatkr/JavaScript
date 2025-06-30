// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// Define a function named remove_character that takes two parameters, str and char_pos
function remove_character(str, char_pos) {
  // Extract the substring from the beginning of str up to (but not including) char_pos
  part1 = str.substring(0, char_pos);
  // Extract the substring from char_pos + 1 to the end of str
  part2 = str.substring(char_pos + 1, str.length);
  // Return the concatenation of part1 and part2, effectively removing the character at char_pos
  return (part1 + part2);
}

// Log the result of calling the remove_character function with the arguments "Python" and 0 to the console
console.log(remove_character("Python", 0));

// Log the result of calling the remove_character function with the arguments "Python" and 3 to the console
console.log(remove_character("Python", 3));