// Function Declaration (Hoisted) (Can call before declaration)
greet(); // This works because of hoisting
function greet(){
    console.log("Hello, World!");
};

// Function Expression (Not Hoisted) (Cannot call before declaration)
const greetExp = function(){
    console.log("Hello from expression!");
};
greet();
greetExp();