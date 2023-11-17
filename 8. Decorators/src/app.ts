function Logger(constructor: Function){
  // a decorator is a function which is applied to something (e.g., to a class) in a certain way
  // the only special thing in this case so far is the capital L in Logger, otherwise it is just a function
  // but we can apply it as a decorator
  // decorators receive arguments
  // when a class is difined(like below) a decorator is executed
  // not when it is instanciated
  // so the decorator runs when JS finds the definition of a class that is using a decorator
  console.log('Logging...');
  console.log(constructor);
}


@Logger // the @ is a special identifier, after which we point at a function (Logger)
// decorator: this is how we add a decorator to a class
class Person {
  name = "Alex";

  constructor(){
    console.log("Creating person object ...");
  }
}

const pers = new Person();

console.log(pers);