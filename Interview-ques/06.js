const obj = { 
  id: 1, 
  details: { name: "Neha", skills: ["JS", "React"] }
};
const { details: { name, skills: [s1] } } = obj;
console.log(name, s1);


// q2
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);
