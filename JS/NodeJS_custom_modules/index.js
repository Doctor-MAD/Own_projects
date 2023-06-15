console.log ("This is index file")

const mod = require("./module")
console.log(mod.avg([3,4]))
console.log(mod.hello);
console.log(mod.name1);
console.log(mod.repo);

const hello={
    name1: "Akash",
    hobby: "Gaming",
    hi:function(){
        console.log(`Hi, my name is ${this.name1} and my favourite hobby is ${this.hobby})`)
    }
};

console.log(hello.hi());