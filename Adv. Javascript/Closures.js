// Closures
    // It is an example of lexical scope.
    // Function along with its lexical scope is known as closure.

 function sum(a,b){
    console.log(a+b);
 }

 sum(10,20);

 let e = 10 ;
 let f = 5 ;
 const g = 2;

 sum1 = (a,b) =>{
    let c = 50;
    let d = 100;
    console.log((a+b+c+d+e+f)*g)
 }

 sum1(4,5);

 function sumWrapper(k){
    var j = 10;
    function sum(a,b){
        console.log(a+b+j);
    }
    return sum
 }

 const newSum = sumWrapper(100);

 console.log(newSum); // Here we are returning sum function to the new function and in the last newSum will become sum, no need to give params
 console.log(newSum(4,5));  // after returned sum to variable, we can directly give params to newSum 