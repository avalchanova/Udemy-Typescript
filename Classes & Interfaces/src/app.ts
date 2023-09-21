interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
    // this is the syntax of an interface method
    // no logic inside the method; only params and what should return (void in this case)
}

// an interface can't have an initializer -> meaning that name cannot = "Max", we can only state the type

let user1: Person 
// we use our interface as a type

user1= {
    name:'Alex', 
    age: 27, 
    greet(phrase: string){ // here we write the logic of the method: 
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi there, I am')