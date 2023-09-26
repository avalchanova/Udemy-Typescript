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

type ElevatedEmployee = Admin & Employee; // the result is a new obj type that encapsulated Admin and Employee

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

// Intersection Types:
type Universal = Combinable & Numeric;
// the intersection combinator can be used with
// any types and then builds the intersection of these types

// Type Guards:
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is a type guard
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

type UnknownEmployee = Admin | Employee; // again, this is union type (when we use |)

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
