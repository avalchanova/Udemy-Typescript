function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(5, 7);
console.log(combinedAges);
var combinedNames = combine('max', 'anne');
console.log(combinedNames);
