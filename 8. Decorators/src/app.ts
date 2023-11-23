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
    return function (constructor: any) {
        console.log("Rendering template...");
        const hookElement = document.getElementById(hookId)
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = p.name
        }
    }
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

function Log2(target: any, name: string, descriptor: PropertyDecorator) {

}

class Product {
    @Log // here we add a decorator to a property (it needs target and a property)
        //in this case the decorator will run with the definition of the class
    title: string;
    private _price: number;

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

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }

}