abstract class Department {
    static fiscalYear = 2020
    // This is how we initialize props and methods without a shorthand:
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

    constructor(protected readonly id: string, public name: string) { 
        // this is a method --> any function in classes are called methods
        // readonly is in TS only and makes sure that the id cannot be rewritten
        // STATIC fiscalYear is not accessible here with this: this.fiscalYear
        // but we can access it by typing Department.fiscalYear
    }

    static createEmployee(name:string){
        return{
            name:name
        }
    }

    // ABSTRACT:
    // when one or more methods in a class are abstract, the class must be abstract as well
    // abstract method is just confined here (below) how this method should look like
    // but we are not stating anything else beside this
    // abstract methods are used we want to reinforce any new class that is created
    // on a instance of a given class to HAVE THIS METHOD, because it won't have any other option
    // and the abstract method does not hold any specific logic,
    // the new class takes care of the logic
    // AN ABSTRACT CLASS: is a class that can only be inherited from, it cannot be instantiated themselves
    abstract describe(this: Department): void;

    //}{
    // this: Department is a dummy parameter
        // We are saying: when Describe is executed,
        // the keyword this should always refer to an instance 
        // that is based on the Department class
        // the this keyword points to something in the current {} maybe (not sure though)
    //   console.log(`Department (${this.id}): ${this.name}`)  
    // always using the this keyword 
    // }
    
    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log("Length: " + this.employees.length)
        console.log(this.employees);
    }
}

// const accounting = new Department('id1', 'Accounting'); // this creates a new Department object
// this accounting is an instance of the Department class


// accounting.addEmployee('Max');
// accounting.addEmployee('Manuel');

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
// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = {name: 's', describe: accounting.describe}
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
    // we do not offer the describe method here anymore, that is why an err occurs 
    // so the abstract method must be implemented by ANY class that is based on the Department class
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
    describe() {
        console.log('IT Department ID: ' + this.id);
    }
}
const newITDep = new ITDepartment("id11", ["Alex"])
console.log(newITDep)



 
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment
    // meaning: i have a static prop which is accessible on the class itself, but only inside the class, and the value we store there will be of type AccountingDepartment
    // lastReport is private, so we won't be able to access it outside this class with the . notation
    // but we can add a GETTER method to still make it accessible
    // a getter always RETURNS something
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport; //this makes it accessible from the outside
        }
        throw new Error('No report found.')
    }

    // SETTER is a method which allows us to access and modify something
    // it allows us to set new data
    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    private constructor(id:string, private reports: string[]){
        // a private constructor ensures we cannot call a new instance 
        // therefore we will only ever have one accounting department
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    static getInstance(){
        // here we check if an instance of the Accounting Department exists
        // and if it doesn't exist we create a new one and return it either way
        // if(AccountingDepartment.instance){ --> this works as well as this.instance; it is the same in this case 
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting Department ID: ' + this.id);
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
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports);
    }
}
// A static method: we call it directly on the class
const employee1 = Department.createEmployee('Aleksandra')
console.log(employee1, Department.fiscalYear)
// const accountingDep = new AccountingDepartment('d2', []); // this does not work anymore since we made an instace and we strive for singledom 
// instead we do this:
const accountingDep = AccountingDepartment.getInstance();
// which return either the existing instance, or if there isnt one, creates and returns a new one
const accountingDep2 = AccountingDepartment.getInstance(); // this is the same instance 

console.log(accountingDep, accountingDep2); // will print the two completely identical instances

accountingDep.mostRecentReport = 'Year End Report' // SETTER: access is at as a property without ()
accountingDep.addEmployee('Max'); //won't save it because of our method logic
accountingDep.addEmployee('Manuel');
// accountingDep.printEmployeeInformation();

accountingDep.addReport('Something went wrong');

console.log(accountingDep.mostRecentReport); // GETTER
// we access as a property, so we do not type it mostRecentReport(), but without ()!!!

// accountingDep.printReports();

accountingDep.describe()


// Static Methods and Properties:

// allow us to add props and methods only on the class 
// used on utility functions or global constants
// an example is the JS Math construction (we can access the PI value, or pow method which calculates the power of a num )


// Singletons and Private Constructors:

// Singleton pattern: ensuring always only have ONLY ONE instance