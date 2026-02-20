//A recursive function is a funcation that calls itself to solve a problem.

function factorial(n){
    if (n===1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));

function fib(n){
    if (n<=1){
        return n;
        
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(10));