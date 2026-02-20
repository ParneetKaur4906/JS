let globalVar = "I am a global variable";

function myFunction() {
    let localVar = "I am a local variable";//local variable or function scope variable
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

myFunction();
console.log(globalVar); // Accessible
// console.log(localVar);  // Unaccessible, will throw an error

if(true){
    let blockVar = "Block Scope Variable";//block scope variable
    const blockConst = 100;
    console.log(blockVar); // Accessible
    console.log(blockConst); // Accessible
}
// console.log(blockVar); // Unaccessible, will throw an error
// console.log(blockConst); // Unaccessible, will throw an error