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
//# sourceMappingURL=app.js.map