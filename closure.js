// function outer(){
//     let x = 5;
//     return function inner(){
//         console.log(x); 
//     }
// }
// The inner function forms a closure that captures the variable x from the outer function's scope.

// function greet(name,callback){
//     console.log("Hello "+name);
//     callback();
// }

// function sayBye(){
//     console.log("Goodbye!");
// }
// greet("Alice", sayBye);

// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// let counter = outer();
// counter();
// counter();
// counter();

//Creating Private Variables with Closures
function counter(){
    let count = 0;
    return{
        increment: function(){
            count++;
            console.log(count);
        },
        decrement: function(){
            count--;
            console.log(count);
        }
    };
}
let c = counter();
c.increment();
c.increment();
c.decrement();
console.log(c.count); //undefined