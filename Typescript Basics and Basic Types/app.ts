function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number): void {
    console.log("The result is " + num)
}

// Any function which does not return a value is automatically
// cast as a function with type void

// And a function which returns nothing is also void but it can be 
// cast as a type of undefined 


printResult(add(5, 10))
// HOF: this is a Higher-order function: one that takes another
// function as a parameter