"use strict";
const e1 = {
    name: "Alex",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
function printEmployee(emp) {
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
    drive() {
        console.log("Driving ...");
    }
}
class Truck {
    drive() {
        console.log("Driving the truck...");
    }
    loadCargo(ammount) {
        console.log("Loading " + ammount + " kg");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
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
//# sourceMappingURL=app.js.map