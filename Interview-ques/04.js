// count  each character of the string with space:
// let str = "Javascript is amazing";

// let charCount = str.split("").reduce((acc, char)=>{
//     if (char !== "") {
//         acc[char] = (acc[char]||0)+1;
//     }
//     return acc;
// },{})

// console.log(charCount)


// without space
let str = "Javascript is amazing";

let charCount = {}
for(let char of str){
    if (char == " ")continue; 
    charCount[char] = (charCount[char] || 0) + 1
}
console.log(charCount)
