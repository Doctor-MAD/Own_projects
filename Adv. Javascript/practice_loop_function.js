 // write a program to print the marks of a student in an object using for loop
const obj = {
    "harry" : 98,
    "rohan": 70,
    "akash":100
 };
for (let i in obj){
    console.log( "Marks of", i ,"are ", obj[i]);
};

// for..(of) loop wont work for object as they are not iterable  
// for(let a of obj){
//     console.log(a)
// }

for (let j=0; j< Object.keys(obj).length; j++){
    console.log("the marks of "+ Object.keys(obj)[j]+ " are " + obj[Object.keys(obj)[j]])
}

// Tell user to enter correct number and till then keep asking

// let cn = 43;
// let i;

// while (i != cn){
//     console.log("Try Again");
//     i = prompt("Enter a number")
// }

console.log("You have entered correct number.")

const mean = (a,b,c,d)=>{
    return(a+b+c+d)/4
}

console.log(mean(4,5,6,7))