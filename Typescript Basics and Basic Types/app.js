function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("The result is " + num);
}
// Any function which does not return a value is automatically
// cast as a function with type void
// And a function which returns nothing is also void but it can be 
// cast as a type of undefined 
printResult(add(5, 10));
// HOF: this is a Higher-order function: one that takes another
// function as a parameter
// FUNCTION AS A TYPE
var combineValues;
// that is how we create a variable of type function 
// which we take arguments of specific type and is expected
// to return a specific type in the end
combineValues = add;
// combineValues = printResult
// combineValues = 5
console.log(combineValues(77, 12));
// FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1, n2, cb) {
    // meaning: addAndHandle is a function which strictly takes 
    // two numbers as arguments and also a callback function (cb) with only one 
    // argument which is a number and returns nothing since it is void
    // however, the returning void is not mandatory and it won't fire an error
    // it just means that if we have a return value, we won't be using it in any way
    var result = n1 + n2;
    return cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
// callback functions can return something, even if the argument 
// on which they're passed does NOT expect a returned value.
