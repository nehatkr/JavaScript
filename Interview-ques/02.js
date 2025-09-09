const arr = [1,2, 4,6 ,5,8];
const ans = [];
for (let i = 0; i < arr.length; i++) {
   for (let j = i+1; j < arr.length; j++) {
    if (arr[i]+arr[j] == 10) {
        ans.push(i);
        ans.push(j)        
    }
    
   }
    
}
console.log(ans);
console.log(isNaN("neha"))
console.log(Boolean("neha"))