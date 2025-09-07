let arr = ["a", "b", "a", "c", "b", "a"];
let freq = {};

arr.forEach(item => {
  freq[item] = (freq[item] || 0) + 1;
});

console.log(freq); 
// { a: 3, b: 2, c: 1 }


