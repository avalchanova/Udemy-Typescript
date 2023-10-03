"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Alex', hobbies: ["Horse riding"] }, { age: 24 });
console.log(mergedObj.hobbies);
//# sourceMappingURL=app.js.map