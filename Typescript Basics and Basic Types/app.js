var userInput;
var username;
userInput = 5;
console.log(userInput);
userInput = "Alex";
// username = userInput
// this fires an error if the userInput is of type "unknown"
// however, if it is of type "any" no error occurs
// This error can be avoided if we have an if that checks the type
if (typeof userInput === "string") {
    username = userInput;
    console.log(username);
}
// "unknown" is better than "any" because it is more narrow in focus 
// TYPE "NEVER"
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // this function never returns a value, it looks impossible
    // that is why this type is "never"
    // essentially this function is supposed to crash the code and never return a value
    // it can also be used in a never ending loop
}
generateError('An error occurred!', 500);
