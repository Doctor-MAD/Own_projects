

let name = "Akash";

console.log(name.length);

console.log(name[0]);
console.log(name[2]);

//Template Literals
let boy1 = "Pramod"
let boy2 = "Nikhil"

let vakya = `${boy1} and ${boy2} are great friends.`

console.log(vakya)

let name3 = ' Adam D\'angelo'
console.log(name3)

let one = null;
let two = undefined;

console.log( one == two);
console.log( one === two);

// String Methods

// Method Name: length
let name1 = "Akash";

// escape sequence characters "\" will not be considered in length
console.log(name1.length);

console.log(name1.toUpperCase()); // Method ni pachal () aa rakhvu pade je execute karvama help karse
console.log(name1.toLowerCase());
console.log(name1.slice(1,4));
console.log(name1.replace("Aka", "Aaka"));
console.log(name1);
console.log(name1.concat(" gets a job in Google."));

let friend1= "      Akash      ";
let friend2= "Akash";
console.log(friend1.trim());
console.log(friend1);
console.log(friend1[10]);

for(let i in friend2){
    console.log( friend2[i]);
};

// Practice Set of String and its methods

let str = "Aka\""
console.log(str.length);

let sent = "Akash gets a job in google with a 50 lakh package."

let word = "50 lakh"
console.log(`I got a package "${word}" ${sent.includes(word) ? 'is' : 'is not' } in the sentence`);

console.log(sent.startsWith("Akash"));
console.log(sent.startsWith("Akash", 2));
console.log(sent.startsWith("Akash", 0));
console.log(sent.startsWith("gets", 6));
console.log(sent.endsWith("package."));

// to extract number from sentence and convert it to number
let str2 = "I have to collect 10000 rupees";
let amount = Number.parseInt(str2.slice("I have to collect ".length));
console.log(amount);
console.log(typeof(amount)); 

// substring method
var sentence1 = "My name is Akash";
console.log(sentence1.substring(-1,3)); // end index will not included in output, negative index will be changed to 0 when we use substring and only in substring we can use negative index

// substr
var sentence2 = "My name - is / Akash";
console.log(sentence2.substr(1,3)) // first param will be starting index and second param will be length of the values you want to use as substring

//charAt

console.log(sentence2.charAt(9));

// Split

console.log(sentence2.split(" "))
console.log(sentence2.split("-"))
console.log(sentence2.split("/"))

let name5 = "My Name is Akash";

// practice to convert any string to camelCase string
lowerName5 = name5.toLowerCase();
console.log(lowerName5);
let splitLowerName5 = lowerName5.split(" ");
console.log(splitLowerName5);
let result1 = splitLowerName5.reduce((a,b)=> {
    return a + b.charAt(0).toUpperCase()+ b.slice(1)
})

console.log(result1);

// a proper function to convert any string to camelCase string
let str1 = "I am richest person on earth."

function camelCase(str){
    let ans = str.toLowerCase();
    return ans.split(" ").reduce((a,b) => {
        return a + b.charAt(0).toUpperCase()+ b.slice(1)
    })
}

console.log(camelCase(str1));

