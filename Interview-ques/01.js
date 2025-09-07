const arr = ["A","B","C","D","A","A"];
console.log(arr.indexOf("A",0));
console.log(arr.indexOf("A",1));
console.log(arr.indexOf("A",2));
console.log(arr.indexOf("A",3));
console.log(arr.indexOf("A",-1));


let arr1 = [,,,];
console.log(arr1.length);
console.log(arr1);

console.log([] == []);
// console.log([] === []);

let abc = 2;
let a = !--abc;
let b = !--abc;
console.log(a,b);

function sum(){
    console.log("Hello");
    return 2+2;
    
}
function squar(){
    console.log("Hello");
    return 4*4;
    
}
let sum1 = (sum(),squar())
console.log(sum1);
