// STRING ARRAY AND TUPLE 
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


// ENUM 
enum Role { ADMIN = 10, READ_ONLY, AUTHOR };
// the enum type is a custom type therefore we write it with a capital letter
// ADMIN is usually 0; READ_ONLY is 1 and so on like an index of an array
// but in this case we wanted to start the counting from 10 and TS cathes on our logic and continues
// enum Role { ADMIN = 10, READ_ONLY = 0, AUTHOR = 11 };
// we can also assign whatever numbers we want
// or we can use string ADMIN = 'admin', etc. or mix string and number for different enums

const person = {
    name: "Alex",
    age: 24,
    hobbies: ['Tennis', 'Hiking'],
    role: Role.ADMIN
};

// ANY - type can be used when we absolutely have no idea what input will come
// be it is to be avoided because it ruins the whole idea of TYPEscript

// person.role[1] = 10 // this blows an error because the second element is fixed as a string
// person.role.push('admin') // this changes the tuple an is somehow acceptable even though it violates
// the requirement two be an array of a number and a string: two els in total
// push is a loophole
// person.role = [2,"Author", "Admin"] // is not accepted and will also blow an error
let favouriteActivities: string[];
favouriteActivities = ['Tennis'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log('Author')
}