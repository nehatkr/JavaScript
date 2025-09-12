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
// let str = "Javascript is amazing";

// let charCount = {}
// for(let char of str){
//     if (char == " ")continue; 
//     charCount[char] = (charCount[char] || 0) + 1
// }
// console.log(charCount)


// const obj = {
//     name : 'Neha',
//     abc : {
//         name : 'thakur',
//         experence : '6 months'
//     }
// }
// const obj2 = {...obj}
// obj2.abc.name = 'developer'
// console.log(obj2.abc.name)


const obj1= {}, obj2={
    name: "Neha"
},obj3= {
    name : "rishika"
}

obj1[obj2] = {name:"shweta"}
obj1[obj3] = {name:"Rahul"}

console.log(obj1[obj2])