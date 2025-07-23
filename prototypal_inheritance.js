function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Heya this is ${this.name}!`);
};

//injecting prototype in the actual constructor 

let shio = new Person("Shio");
shio.greet(); 

