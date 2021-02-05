function add(n1: number, n2: number, showResult: boolean, phrase: string){
  // if(typeof n1 != "number" || typeof n2 != "number"){
  //   throw new Error("Incorrect input");
  // }
  const result = n1 + n2;

  if(showResult){
    console.log(phrase + result);
  }
  else{
    return result;
  }
}

/* Using type inference, so 'number1: number = 10' is redundant: */
const number1 = 10; // Same as 10.0, because numbers are float by default
const number2 = 2.5;
const printResult = true;
const resultPhrase = "Result is ";

/* Explicitly defining type for future usage of 'number3': */
let number3: number;
number3 = 15;

const result = add(number1, number2, printResult, resultPhrase);