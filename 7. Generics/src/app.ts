// Generic Type:
// is a type which is kind of connected with another type
// and is really flexible to which this other type is 

const names: Array<string> = []; // completely the same as: string[]
// in <> we can write: <any>, <string | number>, maybe obj..?
// it is always good to tell TS what type will be in the array, so we can use methods for the given type
// names[0].split(' ')

//const promise: Promise<string> = new Promise((resolve, reject)=> {
    // we say to TS that this promise will resolve to string Promise<string>
    // we get better type safety
//     setTimeout(()=>{
//         resolve('This is done!')
//     },2000);
// });
/* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/
// promise.then(data=> {
//     data.split(' ')
// })

// Generic Function: 
    function merge<T extends Object, U extends Object>(objA: T, objB: U){
        // in this case we write extends Object, but it can extend:
        // - string, string || number, Animal (our own type), or we can skip extends and just write T
        // the convention is a single characater and usually the first one is T and then we go on with the alphabet letters
        return Object.assign(objA, objB);
    }
    // here we say that generic type T can by any type of object 
    // and generic type U can also be any type of object but most likely  it will be different from T

const mergedObj = merge<{name:string, hobbies: string[]}, {age:number}>({name:'Alex', hobbies:["Horse riding", "Tennis"]}, {age:24});
// we can write it like that but it is completely unnecessary since TS knows what's up 
const mergedObj1 = merge<{name:string, hobbies: string[]}, {age:number}>({name:'Alex', hobbies:["Horse riding", "Tennis"]}, {age:24});

console.log(mergedObj1.hobbies[1]);
console.log(mergedObj.age);
// so basically with generic types we pass some additional info to the function
// in order to work better with the result of the function

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    // we ensure that the function returns a tuple value -> an array with generic type T and a string
    // but i do not understand how the Lengthy interface is extended?]
    // maybe string, arrays, etc have property length out of the box (type number does not have!)
    // and that is how we ensure the element will be of correct type 
    let descriptionText = "Got no value."
    if(element.length === 1){
        descriptionText = "Got 1 element."
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText]
}

console.log(countAndDescribe("I have elements.")); // counts the characters from the string
console.log(countAndDescribe(["Cooking", "Eating", "Working out"])); // counts the elements in the array
console.log(countAndDescribe([])); // empty array

// the "keyof" Constraint

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T, 
    key: U
) {
    return "Value: " + obj[key];
}

console.log(extractAndConvert({name: 'Alex'}, 'name'));

// Generic Classes:

class DataStorage<T extends string | number | boolean> {
    private data: T[]=[]; // this is an array full of generic types
    
    addItem(item: T){ // this is a generic type element which is a part of the array 
        this.data.push(item);
    }
    // we can have new generic types in the methods - e.g <U>
    removeItem(item: T){ 
        if (this.data.indexOf(item) === -1){ // i do not get this?
            return 
        }
        this.data.splice(this.data.indexOf(item), 1) //-1
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10) // will return an error 
textStorage.addItem('Alex')
textStorage.addItem('Alie')
textStorage.addItem('Alexandra')
textStorage.addItem('Alexa')
textStorage.addItem('Alex1')
textStorage.removeItem('Alex1')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:"Max"})
// objStorage.addItem({name:"Manu"})
// // ...
// const maxObj = {name: 'Max'}
// objStorage.removeItem(maxObj) // by functionality the removedItem will always remove the last object in the array 
// console.log(objStorage.getItems());
// OBJECTS IN JS ARE REFERENCE TYPES therefore if we first delete Manu and then switch it with Max
// 

// the idea behind using generic types is that it provides us with
// flexibility but still it is strongly typed 
// therefore it gives us amazing type support and eases our work

// Generic Utility Types:

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    // return {
    //     title: title,
    //     description: description,
    //     completeUntil: date
    // }

// Generic Utility Type 'Partial'
    let courseGoal: Partial<CourseGoal> = {};
    // we are saying: this is an object which at the end will hold a CourseGoal
    // but initially Pаrtial will hold all these props but they will be optional
    // this allows us to set the initial value as an empty {} and later add
    // the props step by step

    courseGoal.title = title;
    courseGoal.description= description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; // which forces the Partial to become CourseGoal
    // this is a much less used case-scenario
}

// Generic Utility Type 'Readonly'
const nameArr: Readonly<string[]> = ["Max", 'Sports'];
// nameArr.push('Manu'); //throws an error because it is readonly
// nameArr.pop() // again an error 

// Generic types VS Union types 

// in one word it makes everything messy
// errors occur
// we cannot say 'string[] | number[] | boolean[]' instead of
// <T extends string | number | boolean> 
// we use union types if we want a function which we can be called with any type of the given; 
// we are flexible (with union types) to have a different type with every method or function call
// generic types are great if we want to lock in a certain type; use the same type throughout the
// entire function