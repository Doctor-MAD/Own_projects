const fs = require("fs"); // simlilar import numpy as np in python

let text= fs.readFileSync("dele.txt", "utf-8");

text= text.replace("content", "Akash");

console.log("THe content of the file is: ");

console.log(text);

fs.writeFileSync("akash.txt",text);

