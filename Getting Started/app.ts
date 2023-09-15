// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Alex",
    age: 24,
    hobbies: ['Tennis', 'Hiking']
};

let favouriteActivities: string[];
favouriteActivities = ['Tennis'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}