/* Using type aliases: */
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"; /* Literals */

/* Using 'union' makes data type more flexible: */
function combine(
  input1: Combinable, 
  input2: Combinable,
  resultConversion: ConversionDescriptor
){
  let result;

  /* But some extra logic is needed: */
  if(typeof input1 === "number" && typeof input2 === "number" || resultConversion==="as-number"){
    result = +input1 + +input2; /* Mas é meio gambiarrado isso aqui... */
  }
  else{
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Daniel", "Brito", "as-text");
console.log(combinedNames);