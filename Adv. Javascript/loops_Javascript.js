for (let i= 0; i<10 ; i++){
    console.log(i)
}

let obj = {
    maths: 100,
    science: 99,
    computer: 100
}


// works well with objects
for (let i in obj){
    console.log( i, obj[i] )
}


list = [ "Akash", "Businessman", "Successful", "Software Developer"]
//works better with iterable objects like arrays and strings
for ( let b of list){
    console.log(b)
}

for ( let b in list){
    console.log(b, list[b])
}


n = 10;
var x = 0;

// while(i<n){
//     console.log(i)
//     i++
// }

do{
    console.log(x);
    x++;
} while(x<n);

function checkEven(num){
    if( num % 2 == 0){
        console.log("It is Even number");
    } else {
        console.log("It is Odd number.");
    }
}

for (initial = 1 ; initial<10; initial++){
    checkEven(initial);
};