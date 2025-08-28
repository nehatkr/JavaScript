// 1.create a function that return the last element of an array

let arr = [1,3,6,7,9,4,2,8];
 function getLastElement(localArray){
return localArray[localArray.length-1]
}

let lastElement = getLastElement(arr);
console.log('Last Element Of An Array :',lastElement);

// 2. Add two different array

let arr1 = [1,2,3,4];
let arr2 = [7,4,8,9,2];
let arr3 = ['a','b','c'];

let combinationOfArray = arr1.concat(arr2,arr3);

let combine2Array = [...arr1,...arr2,...arr3]

console.log('Array combine by concat methode:', combinationOfArray);
console.log('Array combine by spread operator methode:', combine2Array);


// 3.Generate randome number between 0 to 18
let randomNumber = Math.floor(Math.random()*19);
console.log('Random Number between 0 to 18:' ,randomNumber);
