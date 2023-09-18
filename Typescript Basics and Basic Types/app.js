// we usually use type Aliases in addition to type Union
// 
function combine(n1, n2, typeParams) {
    // genius 
    // we mix UNION AND LITERAL types
    var result;
    if (typeof n1 === "number" && n2 === "number" || typeParams === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(5, 7, "as-number");
console.log(combinedAges);
var combinedAgesAsStrings = combine("5", "7", "as-number");
console.log(combinedAges);
var combinedNames = combine('max', 'anne', "as-string");
console.log(combinedNames);
var u1 = { name: 'Max', age: 30 }; // this works!
console.log("".concat(u1.name, " is ").concat(u1.age, " years old"));
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
