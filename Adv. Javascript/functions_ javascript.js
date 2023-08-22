let num1= 4;
let num2= 6;
let num3= 8;

//  SIMPLE FUNCTION
function average(num1,num2,num3){
    return (num1+num2+num3)/2;
}

let a = average(4,6,8);
console.log(a);

// to roung off any thing in javascript :- Math.round( number or returned function to save)

// ARROW FUNCTION
const sum = (a,b)=> {
    return a+b
}

console.log(sum(5,6))

let hello = ()=>{
    console.log("Hi How are you?")
}

hello()

//IFFI (for one time use and immidiatly called)

// let anyFunction = function () {

// })

var checkPercentage =  function (score){
    switch(true){
        case(score > 75):{
            console.log("A Rank");
            break;
        }
        case(score > 65):{
            console.log("B Rank");
            break;
        }
        case(score > 55):{
            console.log("C Rank");
            break;
        }
        case(score >= 45):{
            console.log("D Rank");
            break;
        }
        default:{
            console.log("Fail")
        }
    }
}

checkPercentage(88);
