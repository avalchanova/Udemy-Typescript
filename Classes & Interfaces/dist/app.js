"use strict";
var Person = (function () {
    function Person(n, outp) {
        this.age = 27;
        this.name = n;
        if (outp) {
            this.outputName = outp;
        }
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name + ". Output name: " + this.outputName);
    };
    return Person;
}());
var user1;
user1 = new Person("Max", "maximilianin");
user1.greet("Hi there, I am");
console.log(user1);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var add2;
add2 = function (n1, n2) {
    return n1 + n2;
};
console.log(add2(1999494.544554, 12));
//# sourceMappingURL=app.js.map