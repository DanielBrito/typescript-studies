/* Some crazy data types: */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Daniel";

if(typeof userInput === "string"){
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw{message: message, erroCode: code};
}

generateError("An error occured!", 500);