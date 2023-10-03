"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Alex', hobbies: ["Horse riding", "Tennis"] }, { age: 24 });
const mergedObj1 = merge({ name: 'Alex', hobbies: ["Horse riding", "Tennis"] }, { age: 24 });
console.log(mergedObj1.hobbies[1]);
//# sourceMappingURL=app.js.map