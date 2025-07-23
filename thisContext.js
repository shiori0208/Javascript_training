const person = {
    name: "Shiori",
    greet() {
        console.log(`Hi this is ${this.name}!`);
    }
};

person.greet();
//this has context here 

const greetFunction = person.greet;
//greetFunction(); 
//context is lost when memory is transferred 

// Provide a default context to avoid 'this' being undefined
greetFunction.call(person);

const boundGreet = person.greet.bind({name: "Zoey"}); 
boundGreet();
//context is now changed 