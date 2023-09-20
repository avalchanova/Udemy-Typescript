class Department {
    name: string; // looks like an object but this is not a key-value, here we only we name the key we will use later and the type of that key 
    // name is a property
    private employees: string[] = []

    // keyword "private" can be used on properties and methods
    // means that the prop/method is accessible only inside the created object
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
    
    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log("Length: " + this.employees.length)
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting'); // this creates a new Department object
// this accounting is an instance of the Department class

accounting.addEmployee('Max');
accounting.addEmployee('Manuel');

// accounting.employees[3] = "Anne"
// another way we can access the employees without a method 
// we can see that if we put it in a further index place it will leave
// an "empty" space for the missed index positions
// having two approaches is not preferred because when many people
// are working on a project consistency is good
// that is why we made this property private so it can be accessed only
// inside the instance of the class and not outside

// Calling the method of the class instance "Accounting"
accounting.describe();
accounting.printEmployeeInformation();

const accountingCopy = {name: 's', describe: accounting.describe}
// when we add a name prop in here, because now TS sees that the object
// on which we are calling the describe method now has a name prop just
// like "this" expects it to have because it is based on the Department class

// accountingCopy.describe()
// this will console undefined because 
// because it relies on the instance of the class (accounting)
// and since the accountingCopy has no name, when this is called
// it refurres to an empty space