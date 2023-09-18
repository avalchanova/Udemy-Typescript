let userInput: unknown;
let username: string;

userInput = 5
console.log(userInput)
userInput = "Alex"
// username = userInput
// this fires an error if the userInput is of type "unknown"
// however, if it is of type "any" no error occurs

// This error can be avoided if we have an if that checks the type
if (typeof userInput === "string") {
    username = userInput
    console.log(username)
}

// "unknown" is better than "any" because it is more narrow in focus 
