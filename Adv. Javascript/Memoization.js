
function squareWrapper (){
    const arr = [, , 4, , 16]
    function squareNumber(num){
        if(arr[num]){
            return arr[num]
        }
        const result = num * num
        arr[num] = result;
        return result ;
    }
    return squareNumber 
}

const optimizedSquareFn = squareWrapper();
let res = optimizedSquareFn(2); // --> first time it will calculate whole thing 
res = optimizedSquareFn(4)
res = optimizedSquareFn(2) // --> it will get from cache 

// Higher Order Function 

// Function which takes function as a parameter or return another function 

function print(callback){
    callback(); 
}

function printString(){
    console.log("Hi Akash, You are selected. Welcome to Google.");
}

print(printString);
