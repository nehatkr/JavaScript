// Write a JavaScript program where the program takes a random integer between 1 and 10, 
// and the user is then prompted to input a guess number. 
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Generate a random integer between 1 and 10 (inclusive)
var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt('Guess the number between 1 and 10 inclusive');

// Check if the guessed number matches the generated random number
if (gnum == num)
    // Log a message if the guessed number matches the random number
    console.log('Matched');
else
    // Log a message if the guessed number does not match, and also provide the correct number
    console.log('Not matched, the number was ' + gnum); 
