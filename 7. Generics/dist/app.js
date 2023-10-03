"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Alex', hobbies: ["Horse riding", "Tennis"] }, { age: 24 });
const mergedObj1 = merge({ name: 'Alex', hobbies: ["Horse riding", "Tennis"] }, { age: 24 });
console.log(mergedObj1.hobbies[1]);
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("I have elements."));
console.log(countAndDescribe(["Cooking", "Eating", "Working out"]));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: 'Alex' }, 'name'));
//# sourceMappingURL=app.js.map