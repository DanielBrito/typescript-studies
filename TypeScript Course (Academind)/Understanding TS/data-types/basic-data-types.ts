/* Enumerators assign labels to numbers: */
enum Role{ADMIN=1, READ_ONLY=2, DELETE=3}; /* Default: 0, 1, 2...

/* Allowing TypeScript infer data type: */
const person = {
  name: "Daniel",
  age: 28,
  hobbies: ["Programming", "Sports"],
  role: Role.ADMIN
}

/* Declaring an array of strings: */
let favoriteLanguages: string[];
favoriteLanguages = ["C", "C++", "JavaScript", "Python", "Java"]

/* Avoid using any, otherwise it'll be simply JavaScript: */
let favoriteActivities: any[];

/* Explicitly specifying data type: */
const pet: {
  nickname: string;
  age: number;
  specie: [number, string]; // Tuple, a fixed length array
} = {
  nickname: "Narutinho",
  age: 2,
  specie: [2, "feline"]
}

console.log(person.name);
console.log(pet.age);

for(const hobby of person.hobbies){
  /* Type inference provides available methods: */
  console.log(hobby.toUpperCase());
}

if(person.role===Role.ADMIN){
  console.log(`${person.name} is admin`);
}