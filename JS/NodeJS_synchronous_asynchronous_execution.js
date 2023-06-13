const fs = require("fs"); // simlilar import numpy as np in python

//  Non-blocking or Asynchronous ( No line by line execution , callbacks will fire)

fs.readFile("dele.txt", "utf-8", (err,data)=> {console.log(err,data)});
console.log("This is the message.");

//  Blocking or synchronous (it will execute code line by line)

let text=fs.readFileSync("dele.txt", "utf-8");
console.log(text)
console.log("This is the message.");



