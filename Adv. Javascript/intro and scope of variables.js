function intrestCalc(amount, interest){
    let value = (amount * (interest/100)) ;
    return value;
}


console.log(intrestCalc(10000,12));

number = 100;
let sum = 0;
let i = 1;
while(i <= number){
        sum += i;
        i++;
}
console.log(sum)


// type of datatypes in javascript

// Primitive Datatypes
let a = null;
let b = 345;
let c = true;
let d = BigInt("567")
let e = "Harry"
let f = Symbol("This is specific type of symbol")
let g = undefined

console.log(a,b,c,d,e,f,g);

//Non-Primitive or Ojbects

const person = {
    name : "Akash",
    age: "31",
    location: "Ahmedabad",
    occupation: "Software Developer"
}

console.log(person.name)
console.log(person.age)
console.log(person.occupation)

// Var , let and Const scope continue

// Var -->  Functional and global scope, can access through window object

// Let and Const have block scope in - means scope is limited to curly braces , scope is script scope , can't access through window object 

let x = 30 ;
let y = 30 ;

{
    let x = 20; // defined x again in brackets, this known as shadowing or overriding 
    y = 40; // Here we have not declare y in curly brackets, but only reassign so it will change y of the outside curly brackets too.
    console.log(x);
    console.log(y);
}
console.log(y);

let z = 30 ;
var aa = 10
{
    let aa = 20;
    // var z = 20;  // here we are using var inside brackets only but not in function. so it has global scope so we have already let 
                // so defining again with same variable is not allowed 
    console.log(z);
}
console.log(z);

function any(){
    var z = 20
    console.log(z)
}