// getting-started.js
//  import mongoose and then connent with local database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.01:27017/');
    console.log("We are connected")
}

// First we need to define schema
const kittySchema = new mongoose.Schema({
    name: String
});


// before we create model, we have to define any ,methods we want to run
kittySchema.methods.speak = function () {
    const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
    console.log(greeting);
};

// Here we are creating model, collection name also will be based on model name, but in plural
const Kitten = mongoose.model('Kitten', kittySchema);


// Based on model, now we are just adding variables or name of kittens into that schema
const fury= new Kitten({ name: 'fury' });
// console.log(madkitty.name); // 'Silence'

const feirry = new Kitten({name:"feirry"});


//Here we have called a method that we have created earlier
// fluffy.speak();


//Here we are saving our document that we have created

fury.save();

feirry.save();


// Here we are finding documents with name "fluffy"
Kitten.find({ name: /^fluff/ })
 .then(kittens=>{
    console.log(kittens);
 })
 .catch(err=>{
    console.log(err);
 })


