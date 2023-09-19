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