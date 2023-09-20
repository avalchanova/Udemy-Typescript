class Department {
    // private id: string
    // public name: string; // looks like an object but this is not a key-value, here we only we name the key we will use later and the type of that key 
    // name is a property
    // by default props are public

    // private employees: string[] = []
    // keyword "private" can be used on properties and methods
    // means that the prop/method is accessible only inside the class they are defined
    // and not accessible in a new class that inherits this one

    protected employees: string[] = []
    // with protected we can access this prop in a class that inherits Department
    // unaccessible from the outside but accessible inside of an inherited class

    constructor(private readonly id: string, public name: string) { 
        // this is a method --> any function in classes are called methods
        // readonly is in TS only and makes sure that the id cannot be rewritten
    }
    describe(this: Department) { // this: Department is a dummy parameter
        // We are saying: when Describe is executed,
        // the keyword this should always refer to an instance 
        // that is based on the Department class
      console.log(`Department (${this.id}): ${this.name}`)  
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

const accounting = new Department('id1', 'Accounting'); // this creates a new Department object
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
// interesting: if compiled it will work because JS only recently introduced the private keyword

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



// Inheritance:

class ITDepartment extends Department{
    admins: string[]; // can use the shorthand initialization
    // we can only inherit from one class 
    constructor(id: string, admins: string[]){
        // whenever we add our own constructor in a class
        // that inherits another class we have to add super in the
        // inheritance class
        super(id, 'IT') // super calls the constructor of the base class (the Department class in this case)
        // super is always called first; especially before using the "this" keyword
        // we can harcode the name since it is expected to be an IT dep it can be a fixed name "IT"
        this.admins = admins 
    }
}
const newITDep = new ITDepartment("id11", ["Alex"])
console.log(newITDep)

 
class AccountingDepartment extends Department {
    constructor(id:string, private reports: string[]){
        super(id, 'IT');
    }

    //overriding a method
    addEmployee(name: string){
        if (name === "Max"){
            return
        }
        this.employees.push(name)
    
    }

    // We are adding two methods that the base class (Department) doesn't have
    // and also another property "reports"
    addReport(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }
}

const accountingDep = new AccountingDepartment('ddthf2', []);
accountingDep.addEmployee('Max'); //won't save it because of our method logic
accountingDep.addEmployee('Manuel');
accountingDep.printEmployeeInformation();

accountingDep.addReport('Something went wrong');
accountingDep.printReports();