const obj = {
  id: 1,
  details: { name: "Neha", skills: ["JS", "React"] },
};
const {
  details: {
    name,
    skills: [s1],
  },
} = obj;
console.log(name, s1);

// q2
let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a, b);

// q3
const obj1 = {
  id: 1,
  details: { name1: "Neha", skills: ["JS", "React"] },
};
const {
  details: {
    name1,
    skills: [s0],
  },
} = obj1;
console.log(name1, s0);

// print number from i to n
let n = 5;
for (let index = 1; index <= n; index++) {
  console.log(n - index);
}

//
