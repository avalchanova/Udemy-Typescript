// ARROW FUNCTIONS and default argument
const add = (a:number, b:number=3) => {
    return a+b
}
// we can add default arguments like the b in that case but 
// they must always be the last argument in the list, we cannot
// put the b argument at the front

const addAgain = (a:number, b:number) =>  a+b


console.log(add(2))

const printOutput = (output: string | number)=> {
    console.log(output)
}

const printOutputAgain: (a:number|string)=> void = output => console.log(output)

const button = document.querySelector('button')
if (button){
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5,9))

// THE SPREAD OPERATOR (...)

const hobbies = ["Football", "Cooking"]
const activeHobbies = ["Hiking"]

// activeHobbies.push(hobbies) // this will push an array in the array which is not okay
activeHobbies.push(hobbies[0], hobbies[1]) // that is okay but too long
activeHobbies.push(...hobbies) 
// pull out all the elements of the hobbies array 
// and add them in the activeHobbies array

const person = {
    name: 'Max',
    age:30
};

// const copiedPerson = person //we are coping the pointer at the Person object
// which only points the copiedPerson obj to the memory where the Person obj is stored
// not really creating a copy 

const copiedPerson = {...person} // pulls out all the key-value pairs and they are 
// added in the new copiedPerson object and it makes a perfect copy this way


const addOneMoreTime = (...numbers: number[]) => {
    // let result = 0
    // one way:
    // for (let index = 0; index < numbers.length; index++) {
    //     result += numbers[index]
    // }
    // return result

    // another way:
    return numbers.reduce((currResult, currValue)=>{
        return currResult+currValue
    },0)
};

const addedNumbers = addOneMoreTime(5,6,8,11,20.5,133.3);
console.log(addedNumbers);
