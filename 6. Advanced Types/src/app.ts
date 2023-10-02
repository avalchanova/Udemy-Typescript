// Intersection Types --> &

type Admin = {
  // difing a type
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // the result is a new obj type that encapsulates Admin and Employee

// we can achieve the same if instead of types the Admin and the Employee are interfaces
// then we will create an interface ElevatedEmployee extends Admin, Employee
// and the e1 will give the same result
const e1: ElevatedEmployee = {
  name: "Alex",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// the intersection combinator can be used with
// any types and then builds the intersection of these types


// Type Guard ("typeof"):
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is a type guard
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

type UnknownEmployee = Admin | Employee; // again, this is union type (when we use | )

// Type Guards for objects ("in" and "instanceof")
function printEmployee(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Starting Date: " + emp.startDate);
  }
}
printEmployee(e1);
printEmployee({ name: "Alejandro", privileges: ["admin"] });

class Car {
  // this example (instanceof) won't work with interfaces, because it needs to be compiled in JS to be checked and JS does not support interfaces
  drive() {
    console.log("Driving ...");
  }
}

class Truck {
  drive() {
    console.log("Driving the truck...");
  }
  loadCargo(ammount: number) {
    console.log("Loading " + ammount + " kg");
  }
}

type Vehicle = Car | Truck; // union type (repetition is the mother of knowledge :))) )

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    // instanceof is a vanilla js operator and will execute in runtime just like typeof
    // with instance of we check if some object is based on a given class
    vehicle.loadCargo(1000);
  }
}

useVehicle(v2);

// Descriminated Union:

interface Bird {
  type: "bird"; // literal type, meaning it has a an exact value "bird" (literal types can be strings, nums and booleans)
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse; // union types 

function moveAnimal(animal: Animal) {
  // we cannot check instanceof here because the code is compiled to JS before checking it and JS does not support interfaces
  let speed;
  // this is descriminated union:
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("The " + animal.type + " is moving with " + speed + "km/h");
}

moveAnimal({ type: "bird", flyingSpeed: 45 });


// Type Casting:

const paragraph = document.querySelector('p'); // TS returns type of element HTMLParagraph or null
// because in tsconfig.json we have included the dom library in the "lib" array
// const paragraph = document.getElementById('messageOutput');  // TS returns type of element HTMLElement  or null
// TS needs to know what HTML element it is because it will throw an error
// if we try to access the userInputElement's value
// that is why we cast types (2 ways): 
// 1st way: const userInputElement = <HTMLInputElement>document.getElementById('userInput') // TS returns type of element HTMLElement or null
// 2nd way: const userInputElement = document.getElementById('userInput')! as HTMLInputElement
// chose one and be consistent with it throughout the project 

const userInputElement = document.getElementById('userInput') as HTMLInputElement

// The Exclamation Mark !
// used to say to TS that everything before ! is not going to return null
// we guarantee it to TS