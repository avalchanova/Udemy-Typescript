const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
// adding the ! means that we reasure Typescript that there will be 
// an element with this ID, which means that we have to be 100% sure
// their is really an element with this ID
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;

}

button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
    // in JS when accessing the value of an input element it is ALWAYS A STRING
    // so we are adding two string which is why concatenation occurs and not simple math
    // adding the + sign in front of the value input will convert it into number

});
