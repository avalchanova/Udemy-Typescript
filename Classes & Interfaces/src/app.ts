class Department {
    name: string; // looks like an object but this is not a key-value, here we only we name the key we will use later and the type of that key 
    // name is a property
    constructor(n: string) { // this is a method --> any function in classes are called methods
        this.name = n; 
    }
    describe(this: Department) { // this: Department is a dummy parameter
        // We are saying: when Describe is executed,
        // the keyword this should always refer to an instance 
        // that is based on the Department class
      console.log('Department: ' + this.name)  
    // always using the this keyword 
    }
}

const accounting = new Department('Accounting'); // this creates a new Department object
// this accounting is an instance of the Department class

// Calling the method of the class instance "Accounting"
accounting.describe()

const accountingCopy = {name: 's', describe: accounting.describe}
// when we add a name prop in here, because now TS sees that the object
// on which we are calling the describe method now has a name prop just
// like "this" expects it to have because it is based on the Department class

accountingCopy.describe()
// this will console undefined because 
// because it relies on the instance of the class (accounting)
// and since the accountingCopy has no name, when this is called
// it refurres to an empty space