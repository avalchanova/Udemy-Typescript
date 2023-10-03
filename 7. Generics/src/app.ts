// Generic Type:
// is a type which is kind of connected with another type
// and is really flexible to which this other type is 

const names: Array<string> = []; // completely the same as: string[]
// in <> we can write: <any>, <string | number>, maybe obj..?
// it is always good to tell TS what type will be in the array, so we can use methods for the given type
// names[0].split(' ')

const promise: Promise<string> = new Promise((resolve, reject)=> {
    // we say to TS that this promise will resolve to string Promise<string>
    // we get better type safety
    setTimeout(()=>{
        resolve('This is done!')
    },2000);
});

promise.then(data=> {
    data.split(' ')
})