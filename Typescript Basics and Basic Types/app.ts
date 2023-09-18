type Combinable = number | string
// we usually use type Aliases in addition to type Union
// 

function combine(
    n1: Combinable,
    n2: Combinable,
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

// Type aliases can be used to "create" your own types. 
// You're not limited to storing union types though - you can also provide
// an alias to a (possibly complex) object type.

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
console.log(`${u1.name} is ${u1.age} years old`)


// THIS:

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }

// BECOMES THIS: 

type UserObj = { name: string; age: number };

function greet(user: UserObj) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: UserObj, checkAge: number) {
    return checkAge > user.age;
}
