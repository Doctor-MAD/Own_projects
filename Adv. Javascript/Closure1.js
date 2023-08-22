// A function return with its lexical environment known as closure. 

message = "Good Global";

function hello1(){
    let message = "Good Morning";
    {
        let message = "Good Afternoon";
        console.log("Hello 1:"+ message);
    }
    let c = function hello2(){
        console.log("I am C "+ message);
    }
    return c;
}

c = hello1();
c();

