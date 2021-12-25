const button = document.querySelector("button");
/* '!' specifies that the element will never be null: */
const input1 = document.getElementById("num1")! as HTMLInputElement; 
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number){
    return num1 + num2
}

button.addEventListener("click", function(){
  /* 'value' attribute always return string: */
  console.log(add(+input1.value, +input2.value))
})