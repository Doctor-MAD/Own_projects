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