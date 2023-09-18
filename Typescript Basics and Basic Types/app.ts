function combine(
    n1: number | string,
    n2: number | string,
    typeParams: "as-number" | "as-string") {
    // genius 
    // we mix UNION AND LITERAL types
    let result
    if (typeof n1 === "number" && n2 === "number" || typeParams === "as-number") {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}

const combinedAges = combine(5, 7, "as-number")
console.log(combinedAges)

const combinedAgesAsStrings = combine("5", "7", "as-number")
console.log(combinedAges)

const combinedNames = combine('max', 'anne', "as-string");
console.log(combinedNames);