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

// Generic function: 
    function merge<T extends Object, U extends Object>(objA: T, objB: U){
        return Object.assign(objA, objB);
    }
    // here we say that generic type T can by anything
    // and generic type U can also be anything but most likely it will be different from T

const mergedObj = merge({name:'Alex', hobbies:["Horse riding"]}, {age:24});
console.log(mergedObj.hobbies); 