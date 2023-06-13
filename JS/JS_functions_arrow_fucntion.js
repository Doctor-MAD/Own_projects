console.log("This is just a practice file for function in javascript.")

let greettext = "Good Morning,"

function Greet(name, greettext = "Welcome to the coding world.") {
    console.log(greettext + " " + name);
    console.log("Hello " + name + ". Now you are officially part of goolge. Welcome onboard.");
};

Greet("Akash", greettext);
Greet("Vruddhi", greettext);

function sum(x, y) {
    let sum = x + y;
    return sum;
}

console.log(sum(5, 10));

console.log(sum(10, 50));

let retValue = sum(10, 15)
console.log(retValue)

let greet = () => {
    console.log("Now we are using arrow function for this greet message.")
};
greet();

// let add=(x,y)=>{
//    return x+y
// };
let add = (x, y) => x + y;

let half = a => a / 2;

setTimeout(() => {
    console.log("here we are using arrow function for setTimeout.")
}, 2000);


let obj1 = {
    greeting: "Good Morning",
    names: ["I", "am", "professional", "web developer"],
    speak(){
        this.names.forEach(element => {
            console.log(this.greeting," Welcome ", element)
        });
    }
}

obj1.speak();

// one of the biggest difference between  normal function and arrow function is , 

// when we use this.(method_name) in function, then it will search this in function itself, but in arrow function it will go for parent object.