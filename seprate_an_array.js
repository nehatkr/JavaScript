// we have a javaScript question in we have given an array of numbers and character.
//  our task is to seperate the numbers and character in two different array

// const input = [1, 'a', 2, 'b', 3, 'c'];

const input = [1,'a','b',10,'d',100];

const number = input.filter(item => typeof item === 'number');
const character = input.filter(item => typeof item === 'string');

console.log("Numbers: " , number);
console.log("Character: " , character);


// Separate Integers and Floats
const arr2 = [1.2, 3, 4.5, 6, 7.0];

const integers = arr2.filter(num => Number.isInteger(num));
const floats = arr2.filter(num => !Number.isInteger(num));

console.log("Integers:", integers); // [3, 6, 7]
console.log("Floats:", floats);     // [1.2, 4.5]


// Separate Alphanumeric and Special Characters

const arr6 = ['a', '1', '%', 'b', '*', '2'];

const alphanumeric = arr6.filter(char => /^[a-zA-Z0-9]$/.test(char));
const special = arr6.filter(char => !/^[a-zA-Z0-9]$/.test(char));

console.log("Alphanumeric:", alphanumeric); // ['a', '1', 'b', '2']
console.log("Special Characters:", special); // ['%', '*']
