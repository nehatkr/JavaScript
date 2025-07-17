// we have a javaScript question in we have given an array of numbers and character.
//  our task is to seperate the numbers and character in two different array

// const input = [1, 'a', 2, 'b', 3, 'c'];

const input = [1,'a','b',10,'d',100];

const number = input.filter(item => typeof item === 'number');
const character = input.filter(item => typeof item === 'string');

console.log("Numbers: " , number);
console.log("Character: " , character);
