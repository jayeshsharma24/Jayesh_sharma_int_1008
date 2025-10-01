console.log("Before Callback");

function name(){
    console.log("My name is jayesh");
}

setTimeout(name,2000); // Here set timeOut is a function with another function as an argument.
                        // Here name is a callback function.because it is passed as an argument to another function.

console.log("After Callback");

//----------------------------------------- Example 2 -------------------------------------------------------
function sum (a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function calculator(a,b,sum){
    return sum(a,b);
}
calculator(5,6,sum);
calculator(5,6,sub);