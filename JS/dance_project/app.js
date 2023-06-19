const express = require('express')
const path = require('path')
const app = express();
const bodyparser = require('body-parser')
const port= 3000;

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  const Contact = mongoose.model('Contact', contactSchema);


// Express specific stuffs
app.use('/static', express.static('./static')); // For serving template files 
app.use(express.urlencoded())



// PUG specific stuffs
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, './views')); // set the view direcotries

// ENDPOINTS
app.get('/', (req,res)=>{
    const param = { }
    res.status(200).render('home.pug', param)
});

app.get('/contact', (req,res)=>{
    const param = { }
    res.status(200).render('contact.pug', param)
});
app.post('/contact', (req,res)=>{
    console.log(req.body)
    const myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database.")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database.")
    })
    // res.status(200).render('contact.pug', myData)
});

// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

