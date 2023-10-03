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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Alex');
textStorage.addItem('Alie');
textStorage.addItem('Alexandra');
textStorage.addItem('Alexa');
textStorage.addItem('Alex1');
textStorage.removeItem('Alex1');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map