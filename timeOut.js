setTimeout(function(){
    console.log("Hello after 3 secs");
},3000);

setTimeout(()=>{
    console.log("Welcome Abhey");
},2000);

//Cancel setTimeout()
let timer = setTimeout(()=>{
    console.log("This will not run");
},5000);
clearTimeout(timer);