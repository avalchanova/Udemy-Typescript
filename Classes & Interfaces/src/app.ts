class Department {
    name: string; // looks like an object but this is not a key-value, here we only we name the key we will use later and the type of that key 
    // name is a property
    constructor(n: string) { // this is a method --> any function in classes are called methods
        this.name = n; 
    }
}

const accounting = new Department('Accounting'); // this creates a new Department object

console.log(accounting);