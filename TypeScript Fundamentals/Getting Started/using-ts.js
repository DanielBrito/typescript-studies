var button = document.querySelector("button");
/* '!' specifies that the element will never be null: */
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    /* 'value' attribute always return string: */
    console.log(add(+input1.value, +input2.value));
});
