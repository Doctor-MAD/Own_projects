let a = 6;
let b = "6" ;

console.log(a == b);
console.log(a != b);
console.log(a !== b);

// following will compare values and their types too
console.log(a === b); 
let aa = "16";
aa = Number.parseInt(aa);
console.log(aa);


const passion = "gaming";

switch(passion){
    case 'music':
        console.log("Music is your passion.");
    case 'gaming':
        console.log("Gaming is your passion.");
    case 'cricket':
        console.log("Cricket is your passion.");
}
const passion1 = "gaming";

// switch(passion1){
//     case 'music':
//         console.log("Music is your passion.");
//     case 'gaming':
//         console.log("Gaming is your passion.");
//         break;
//     case 'cricket':
//         console.log("Cricket is your passion.");
// }

let age = 19;

let akash = age > 18? "You can drive" : "You can not drive";
console.log(akash)

console.log(age>45? "You are buddha" : "You are not buddha");

// if else, if ..else if...else also considered in conditional expression , like control flow in python

let marks = 35;

let passStatus = marks >= 70? "Awesome" : (marks >= 60 && marks <70 ? "Best" : (marks>=50 && marks < 60 ? "good" : ( marks < 50 && marks >=40 ? "pass" : "Fail")));
console.log(passStatus)