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
  outputName?: string; // OPTIONAL property: if we do not want to force every implement of this inheritance to have an output
}

interface Greetable extends Named {
  // if we switch the word "interface" w/ "type" it will still work
  // extending more than one interface is possible, just separate them with a ,
  // in classes inheriting more than one is impossible
  greet(phrase: string): void;
  // this is the syntax of an interface method
  // no logic inside the method; only params and what should return (void in this case)
}

class Person implements Greetable {
  // Greetable inherits Named and now Person is forced to have all of their props and methods
  // we can implement more than one interface by separating them with a ,
  // we are forced to use the structure of the used interface, so in this case,
  // we have to have a name and a method for greeting, but we can add new props and else
  name: string;
  outputName?: string;
  age = 27; // i do not understand why the types of name and output are strings, but the number has a concrete value

  constructor(n: string, outp?: string) {
    // if the prop is optional in the class, we write a ? here
    this.name = n;
    if (outp) {
      // since this prop is optional, we first check if it exists, then we continue
      this.outputName = outp;
    }
  }

  greet(phrase: string) {
    // here we write the logic of the method:
    console.log(phrase + " " + this.name + ". Output name: " + this.outputName);
  }
}
// an interface can't have an initializer -> meaning that name cannot = "Max", we can only state the type

let user1: Greetable;
// we use our interface as a type

user1 = new Person("Max", "maximilianin");

user1.greet("Hi there, I am");
console.log(user1);

// Custom Function Type (we already learned):

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// We can create a function types with interface

interface AddFn2 {
  (a: number, b: number): number; // the syntax is exactly like defining a method
  // this is like a anonimous function and does not have the arrow syntax, only a : and the return type
  // syntax: (parameters:types): return type
}

let add2: AddFn2;
add2 = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add2(1999494.544554, 12));

// * however, using the custom type functions instead of the interface functions is a bit more common

// We cannot store union types in interfaces
// side note: instantiate = create
