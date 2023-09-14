const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return +num1 + +num2;
        // adding the + sign in front of the value input will convert it into number
    }

}

button.addEventListener("click", function () {
    console.log(add(input1.value, input2.value));
    // in JS when accessing the value of an input element it is ALWAYS A STRING
    // so we are adding two string which is why concatenation occurs and not simple math
});
