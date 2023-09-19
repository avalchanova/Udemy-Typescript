const add = (a:number, b:number) => {
    return a+b
}

console.log(add(2,5))

const printOutput = (output: string | number)=> {
    console.log(output)
}

const printOutputAgain: (a:number|string)=> void = output => console.log(output)

const button = document.querySelector('button')
if (button){
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5,9))