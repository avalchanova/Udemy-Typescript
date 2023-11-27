/*
function Logger(constructor: Function){
  // a decorator is a function which is applied to something (e.g., to a class) in a certain way
  // the only special thing in this case so far is the capital L in Logger, otherwise it is just a function
  // but we can apply it as a decorator
  // decorators receive arguments
  // when a class is difined(like below) a decorator is executed
  // not when it is instanciated
  // so the decorator runs when JS finds the definition of a class that is using a decorator
  console.log('Logging...');
  console.log(constructor)
}
*/
// Decorator Factory
function Logger(logString: string) {
    console.log("Logger factory");
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    // return function(_: Function){ // adding _ in this case signals to TS that I know i need a constructor but i will not be using it so i add _
    console.log("Template factory");

    return function <T extends { new(...args: any[]): { name: string } }>(
        originalConstructor: T
    ) { //{new} tells TS that in the end this will be an object which can be mute
        // (...args:any[]) and this means the it will accept as many arguments as needed
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super(); // the rule is: if you add constructor func in a class that extends
                // another class then you have to call super( )

                // THIS template will only be rendered to the DOM if I instanciate this class --> @WithTemplate("<h1>My Person Object</h1>", "app")
                // which means this won't render every time this decator function is executed
                // which we saw happens as soon as we define the class
                console.log("Rendering template...");
                const hookElement = document.getElementById(hookId)
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1')!.textContent = this.name // accessing the name from the instance we are creating
                }
            }
        }
    };
}


// @Logger('LOGGING - PERSON') // when we want to apply the decorator in the decorator function
// we have to execute it, so now we add () and give an argument if there is one needed, but if we apply a normal decorator we call it like this (shown bellow, no ())
// the @ is a special identifier, after which we point at a function (Logger), just pointing, without () --> @Logger
// decorator: this is how we add a decorator to a class

@Logger('LOGGING')
@WithTemplate("<h1>My Person Object</h1>", "app")
// the @WithTemplate deco will run first, because decorators run from the bottom up, so first will be WithTemplate, the Logger, and so on
// but the factories run from top to bottom: so messy
class Person {
    name = "Alex";
    constructor() {
        console.log("Creating person object ...");
    }
}

const pers = new Person();

console.log(pers);


// ---

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator...');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
    // return here is possible
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);

}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

// decatorators that can return something are the ones we add to methods and to accessors
// these are Log2, Log3
// decorators on properties and params also return something but TS does not respect it  --- Log and Log4
class Product {
    @Log // here we add a decorator to a property (it needs target and a property)
        //in this case the decorator will run with the definition of the class
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid Price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }

}

const p1 = new Product('Book', 19)
const p2 = new Product('Book 2', 29)

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {

// this is the original: function Autobind(target: any, methodName: string, descriptor : PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            // what does this refer to here: well, this will refer to whatever is triggering this getter method
            return boundFn
        } // the getter is like having a value with extra logic that runs before the value is returned
    };
    return adjustedDescriptor

}
class Printer {
    message = "This works!"

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!; // the ! tells TS we are sure there is a button
button.addEventListener('click', p.showMessage);
// if we leave ('click', p.showMessage) the way it was, it would point to the button itself because the word "this" changes context
// this is why we bind p.showMessage with the context of p
// and now when we have the @Autobind decorator everything works seamlessly
// the extra layer of the getter method makes it work wonderfully

// ---

function Required() {

}

function PositiveNumber() {

}

function valite(obj: object) {}
class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    // we can validation logic here with "if"

    const createdCourse = new Course(title, price);
    console.log(createdCourse);

})