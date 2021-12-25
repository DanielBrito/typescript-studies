/* Return type inference (number): */
function add(n1: number, n2: number) {
  return n1 + n2;
}

/* Explicitly defining a return type: */
function printResult(num: number): void {
  console.log(`Result = ${num}`)
}

printResult(add(10, 12))

/* Working with callbacks: */
function addAndHandle(n1: number, n2: number, callback: (num: number) => void){
  const result = n1 + n2;
  
  callback(result);
}

addAndHandle(10, 30, (result) => {
  console.log(result)
})