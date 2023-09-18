function combine(n1, n2, typeParams) {
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
