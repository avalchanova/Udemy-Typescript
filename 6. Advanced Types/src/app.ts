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
// then we will create an interface ElevatedEmployee extends Admin and Employee
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


// Function overloads:
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: string, b: number): string
function add(a: number, b: string): string
// here we make all of the possible overloads for the add()

// Type Guard ("typeof"):
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is a type guard
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

// Optional chaining:
const fetchedUserData = {
    id: "u1",
    name: "Alex",
    job: {title: "CEO", description: "My own company"}
};
// if we try to fetch data from the backend and do not have a job property,
// we can check the JS way:
// we try to access job and if there is job we dive deeper in the title
// which will avoid runtime errors
// console.log(fetchedUserData.job && fetchedUserData.job.title);

console.log(fetchedUserData?.job?.title);
// this is the TS way of checking if the fetchedUserData exists and the if the job property exists
// this way we can check for nested props and objects in the main data object


// Nullish Coalescing = сливане

const userInput = ""
// remember in this case TS knows whats up with userInput, but if it comes from the backend, it would not have this on-the-go knowledge

const storedData = userInput || "DEFAULT";
// if the first value is faulsy (e.g "", undefined, null, 0, NaN, etc) the storedData will have a string value "DEFAULT"
const storedData2 = userInput ?? "DEFAULT"
// this way if the userInput is undefined or null (only) it will return "DEFAULT"
console.log(storedData);
console.log(storedData2);

const result = add('Mark', 'Twen') as string
// TS predicts that the function add() will always return a Combinable value
// which is in a way true, but actually it will return either a string or a number
// the consequance is that we cannot call string functions like split() on the result
// because TS does not see the result as a string but as a Combinable
// our solutions is to type cast (writing 'as string' at the end)
// but this is not optional because we write unnecasary code
// the real solution is overloading a function (look above the original function add())

// with a ? we can make one of the params to be optional, example:
// function add(a: Combinable, b?: Combinable) {...}
// if we hover over add('Mark', 'Twen') we will see that there are 3 overloads on this function

result.split(' ')



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
// but we do this ONLY if we are sure that the element we are accessing is an existing element

// The Exclamation Mark !
// used to say to TS that everything before ! is not going to return null
// we guarantee it to TS

// however, if we are not sure the input element exists we can put it in an if() statement:

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!'
}


// Index Type:

interface ErrorContainer { // {email: "Not a valid email", username: "Must start with a character"}
    [prop: string]: string; // with that we say: i do not know the exact property name, i also do not know the property count, i just know every prop must have a prop name (being a string) and a value (string)

}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: "Must start with a letter",
}

// Function overloads:

