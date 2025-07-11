// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

function reverse(n){
n = n + "";
return n.split("").reverse().join("");
}

console.log(Number(reverse(1234567)));
