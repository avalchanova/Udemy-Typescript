// Interface VS Type:

// Interfaces can only be used to describe the structure of an obj
// Inside of a type we can do that as well but we can also store union types, and stuff from earlier in the course
// Interface is clearer, Type is more flexible 
// When defining an object types we would more often find interfaces than custom types
// Interface we can use to implement an interface in a class (we can also do it with type)
// The interface sets the structure and forces us to use it whenever we want to implement the given interface

// Interface vs Abstract classes
// Interface has no implementation details at all
// Whereas abstract classes have concrete implementation

// Inheritance:
// combining two interfaces to work together, look at the greetable interface

interface Named {
    readonly name: string; // we can use a readonly on a prop to ensure it won't be changed in the future
                           // this can also happen with custom types
}

interface Greetable extends Named { // if we switch the word "interface" w/ "type" it will still work
    greet(phrase: string): void;
    // this is the syntax of an interface method
    // no logic inside the method; only params and what should return (void in this case)
}

class Person implements Greetable{ // Greetable inherits Named and now Person is forced to have all of their props and methods
    // we can implement more than one interface by separating them with a , 
    // we are forced to use the structure of the used interface, so in this case,
    // we have to have a name and a method for greeting, but we can add new props and else
    name: string;
    age = 27

    constructor (n:string){
    this.name=n   
    }

    greet(phrase: string){ // here we write the logic of the method: 
        console.log(phrase + ' ' + this.name);
    }
}
// an interface can't have an initializer -> meaning that name cannot = "Max", we can only state the type

let user1: Greetable 
// we use our interface as a type

user1 = new Person('Max') 

user1.greet('Hi there, I am')
console.log(user1);