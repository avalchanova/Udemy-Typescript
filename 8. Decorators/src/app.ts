function Logger(constructor: Function){
  // the only special thing in this case so far is the capital L in Logger, otherwise it is just a function
  // but we can apply it as a decorator
  // decorators receive arguments
  // when a class is difined(like below) a decorator is executed
  // not when it is instanciated
  // so the decorator runs when JS finds the definition of a class that is using a decorator
  console.log('Logging...');
  console.log(constructor);
}


@Logger
class Person {
  name = "Alex";

  constructor(){
    console.log("Creating person object ...");
  }
}

const pers = new Person();

console.log(pers);