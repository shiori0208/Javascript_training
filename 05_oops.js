let car = {

    make: "Toyota" ,

    model: "Camry" , 

    year: 2020 ,

    start: function () {

        return `${this.make} car got started in ${this.year}`;

    }

}
 
//console.log(car.start());
 
function Person(name, age){

    this.name = name

    this.age = age

}
 
let jane = new Person("Jane Doe", 20);

//console.log(jane);
 
function Animal(type){

    this.type = type

}
 
Animal.prototype.sound = function(){

    return `${this.type} makes a sound`

}
 
Array.prototype.shio = function() {

    return `Zoey says HIII ${this}`

}
 
let Huntrix = ["Mira", "Rumi", "Mystery"];

//console.log(Huntrix.shio());

let Arr = [1, 2, 3];

//console.log(Arr.shio());

//Inheritance
 
class Vehicle {

    constructor(make, model){

        this.make = make;

        this.model = model;

    }

    start() {

        return `${this.model} is a car from ${this.make}`;

    }

}
 
class Car extends Vehicle {

    drive() {

        return `${this.make} : This is an inheritance case`;

    }

}
 
let myCar = new Car("Toyota", "Corolla")

// console.log(myCar.start());

// console.log(myCar.drive());

 
let v = new Vehicle("Toyota", "Corolla");

//console.log(v.make);

 
//Encapsulation
 
class BankAcc {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;

        return this.#balance; 

    }

    getBalance() {

        return `$ ${this.#balance}`;

    }

}
 
let account = new BankAcc();

//console.log(account.balance);
 

//Abstraction

class CoffeeMachine {
    start() {
        //call DB
        // filter value 
        return `Starting the machine...`

    }

    brewCoffee() {
        //complex calc
        return `Brewing coffee...`;
    }

    pressStartButton() {
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1} \n ${msg2}`; 

    }

}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
//console.log(myMachine.pressStartButton());


//Polymorphism

class Bird {
    fly() {
        return `Flying...`;
    }

    hasWings() {
        return `Has wings...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `...but penguins swim instead!`;
    }

}

let birdie = new Bird();
let pengu = new Penguin();
console.log(birdie.fly());
console.log(pengu.hasWings());
console.log(pengu.fly());

//Static is a special method that can only be called by the class itself.

