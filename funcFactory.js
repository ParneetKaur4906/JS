//A function factory is a function that creates and returns another function.

function greetFactory(greeting){
    return function(name){
        console.log(greeting+","+name);
    }
}
let sayHello = greetFactory("Hello");
let sayHi = greetFactory("Hi");
sayHello("Abhey");
sayHi("Parneet");

//Multiplier Factory
function createMultiplier(multiplier){
    return function(number){
        return number*multiplier;
    }
}
let double = createMultiplier(2);
let triple = createMultiplier(3);
console.log(double(5));
console.log(triple(5));