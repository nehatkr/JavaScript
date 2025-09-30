const obj = { 
  id: 1, 
  details: { name: "Neha", skills: ["JS", "React"] }
};
const { details: { name, skills: [s1] } } = obj;
console.log(name, s1);
