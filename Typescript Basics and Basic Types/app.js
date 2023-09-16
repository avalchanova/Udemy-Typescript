// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] // a tuple: a fixed array (not necessarily of two elements)
// } = {
//     // const person = {
//     name: "Alex",
//     age: 24,
//     hobbies: ['Tennis', 'Hiking'],
//     role: [2, "Author"]
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// the enum type is a custom type therefore we write it with a capital letter
// ADMIN is 0; READ_ONLY is 1 and so on like an index of an array
var person = {
    name: "Alex",
    age: 24,
    hobbies: ['Tennis', 'Hiking'],
    role: [2, "Author"]
};
// person.role[1] = 10 // this blows an error because the second element is fixed as a string
// person.role.push('admin') // this changes the tuple an is somehow acceptable even though it violates
// the requirement two be an array of a number and a string: two els in total
// push is a loophole
// person.role = [2,"Author", "Admin"] // is not accepted and will also blow an error
var favouriteActivities;
favouriteActivities = ['Tennis'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
