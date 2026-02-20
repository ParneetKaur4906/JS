//Required (Positional) Arguments
function greet(name){
    console.log("Hello",name);
}
greet("Computer Science");
greet(); //JavaScript will not throw an error, but it will print "Hello undefined"

//Keyword Arguments 
//JS doesn't support true keyword arguments,but objects are used to achieve similar behaviour.
function student(details){
    console.log("Name",details.name);
    console.log("Roll Number",details.rollNumber);
    console.log("Course",details.course);
}

student({name: "Parneet", rollNumber: 14, course: "Computer Science"}); //Order of arguments does not matter in keyword arguments
student({rollNumber: 14, course: "Computer Science", name: "Parneet"}); //Order of arguments does not matter in keyword arguments

//Default Arguments
// Used when no argument or undefined is passed during the function call
function greet(name,msg="Good Morning"){
    console.log(msg+" "+name);
}
greet("Parneet");
greet("Parneet","Welcome");

//Variable Length Arguments
//Available in normal function(not arrow functions)
//Used when the number of arguments is unknown
function add(){
    let sum = 0;
    for (let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(add(10,20,30));

//Rest Parameters (ES6)
//Allows a function to accept an indefinite number of arguments and represents them as an array

function add(...numbers){
    let sum = 0;
    for (let n of numbers){
        sum+=n;
    }
    return sum;
}
console.log(add(5,10,15,20));

//Passing Arguments
//JS behaves differently based on data type.

//For primitive types (number, string, boolean, null, undefined, symbol), the value is passed by value. This means that a copy of the value is passed to the function, and changes to the parameter inside the function do not affect the original variable outside the function.
function update(val){
    val=50;
}
let x = 10;
update(x);
console.log(x); //x is unchanged because primitive types are passed by value

// For non-primitive types (objects, arrays, functions), the reference to the value is passed by reference. This means that changes to the parameter inside the function will affect the original variable outside the function because both the parameter and the original variable point to the same object in memory.
function updateArray(arr){
    arr.push(4);
}
let nums = [1,2,3];
updateArray(nums);
console.log(nums); //Original data is modified