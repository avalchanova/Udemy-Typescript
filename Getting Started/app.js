// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Alex",
    age: 24,
    hobbies: ['Tennis', 'Hiking']
};
var favouriteActivities;
favouriteActivities = ['Tennis'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
