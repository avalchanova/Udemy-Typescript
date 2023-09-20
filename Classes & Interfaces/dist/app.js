"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("Length: " + this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('id1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manuel');
accounting.describe();
accounting.printEmployeeInformation();
var accountingCopy = { name: 's', describe: accounting.describe };
//# sourceMappingURL=app.js.map