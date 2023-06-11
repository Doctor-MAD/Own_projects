console.log("This is just a practice file for function in javascript.")

let greettext="Good Morning,"

function Greet(name, greettext= "Welcome to the coding world.") {
    console.log( greettext + " "+ name);
    console.log("Hello " + name + ". Now you are officially part of goolge. Welcome onboard.");
};

Greet("Akash", greettext);
Greet("Vruddhi", greettext);

function sum(x,y){
    let sum= x+y;
    return sum;
}

console.log(sum(5,10));

console.log(sum(10,50));

let retValue=sum(10,15)
console.log(retValue)