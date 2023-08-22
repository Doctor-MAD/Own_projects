let arr = [45, 23, 21];

// map creates new array and return the values as per our requirement while for each loop iterate only existing arrray and doesn't create any new array

// Array map method
let a = arr.map((value) => {
    console.log(value)
    return value;
});
console.log(a);
let a1 = arr.map((value, index) => {
    console.log(value)
    return value + index;
});
console.log(a1);

// Array Filter method
let arr2 = [45, 23, 21, 0, 3, 5];

let a2 = arr2.filter((a) => {
    return a < 10;
});
console.log(a2);

// Array Reduce Method

let arr3 = [1, 2, 3, 5, 2, 1];
let newArr3 = arr3.reduce((a1, a2) => {
    return a1 + a2;
});

console.log(newArr3);

// let ask;
// let arr4 = [1,2,3,4,5];
// do{
//     ask = prompt("Enter number:- ");
//     ask = Number.parseInt(ask);
//     arr4.push(ask)
// }while(ask != 0);
// console.log(arr4); 

//filter problem
let arr5 = [10, 22, 30, 58, 23, 1];
let a3 = arr5.filter((x)=>{
    return x%10 == 0;
})
console.log(a3)

let arr6 = [10, 22, 30, 58, 23, 1];
let a4 = arr6.map((x)=>{
    return x**2;
})
console.log(a4)

let arr7 = [10, 22, 30, 58, 23, 1];
let a5 = arr7.reduce((x1, x2)=>{
    return x1 * x2 ;
})
console.log(a5);
