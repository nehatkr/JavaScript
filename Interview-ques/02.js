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

// Question 3
let str1 = 'Neha';
let str2 = 'Thakur';
let answer = "";
n = str1.length;
m = str2.length;

let i= 0, j=0;
while (i <n && j<m) {
    answer += str1[i];
    answer += str2[j];
    i++;
    j++;

}

if (i==n) {
    while(j<m){
        answer += str2[j];
        j++;
    }
}
if (j==m) {
    while(i<n){
        answer += str1[i];
        i++;
    }
}
console.log(answer);