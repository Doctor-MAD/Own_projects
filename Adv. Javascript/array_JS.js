// Why we use array in Javascript ?
// - List of items 
// - more than one value
// - Continuous/Contigous Memory allocation 
// - we can added multiple data type values in single array
// - Variable of arrat i.e. marksClass12 will store the address of the first value's memory location
// - Array is an object and object is collection of Key value pair. In Array, Key will be index position of the value and value will be itself.

// Array Literal - One way of creating Array
let marksClass12 = [90, 95, 89, 74, 46, "Not Found", false];
marksClass12[9]= "Akash";

console.log(marksClass12.flat());

// Creating Array 
let insstructors = new Array();
console.log(insstructors);

//using Array Constructor
let topics = new Array("HTML","CSS", "Javascript");

console.log(marksClass12);
console.log(marksClass12.length);
console.log(marksClass12[2]);
marksClass12[6] = 94;
console.log(marksClass12);

for (let i in marksClass12) {
    console.log("Marks are ", marksClass12[i]);
};

// Methods in array 
// to convert into string
let str = marksClass12.toString();
console.log(str, typeof str);

//to join values in arrays
let str1 = marksClass12.join("_");
console.log(str1, typeof str1);

// to pop last element from the array and store into another array
let arr1 = marksClass12.pop();
console.log(marksClass12);
console.log(arr1)

arr2 = marksClass12.push(56);
console.log(marksClass12);
console.log(arr2) //this will return the array lenth 


let s1 = marksClass12.shift() //remove the element from the start of the array 
console.log(marksClass12, s1)

//unshift will add element to the start of the added 
let s2 = marksClass12.unshift(97);
console.log(marksClass12, s2)

//delete method will remove the element from that perticular position but it will leave emplty item positon, so array length will not get affected
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num1= [11,12,13,14,15]
console.log(num.length, num)
delete num[0]
console.log(num.length, num)


//concate method will join multiple arrays together example:- arr1.concat(arr2,arr3....);
let newArray = num.concat(num1);
console.log(newArray);

//sort method, original will get change and also it will sort as 111,2222,33,,44,55,, not in ascending order

let num2 = [45,7486,461,898,1654,8,1413,74];

num2.sort();
console.log(num2);

//to sort ascending or descending order, we use compare function javascript 
let compare = (a, b)=>{
    return a - b
}

num2.sort(compare);
console.log(num2);

// to reverse the array elements
num2.reverse();
console.log(num2);

//splice method  , syntax =: arr.splice(position_number, numbers_of_elements_to_change, new_ele1, new_ele2,..... new_ele_n);

let new_num2 = num2.splice(2,3, 555,666,777);
console.log(new_num2);
console.log(num2);

let sliceNum2 = num2.slice(2,6) ;
console.log(sliceNum2);
console.log(num2);


// Loops and Arrays

let num4 = [1,5,6,87,4858,3,479];

for (let i = 0; i< num4.length; i++){
    console.log(num4[i]);
};

num4.forEach((Element)=> {
    console.log(Element*Element);
});

let name = "Akash";
let arr4 = Array.from(name);
console.log(arr4);

// this will iterate elements in objects or array
for ( let i of num4){
    console.log(i);
};

// This will iterate postion/index/keys from objects or arrays, for values we have to use num4[i]
for (let i in num4){
    console.log(i);
};
