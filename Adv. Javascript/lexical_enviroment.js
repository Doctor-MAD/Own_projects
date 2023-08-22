// Understanding of lexical environment , scope and Closures are in hand written notes

function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b = 10;

a();