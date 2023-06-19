const express = require('express');
const path= require('path');
const fs= require('fs');

const app = express();
port = 3000;

// Express specific stuffs
app.use('/static/', express.static('./static')); // For serving template files 
app.use(express.urlencoded())



// PUG specific stuffs
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, './views')); // set the view direcotries



// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "I am the best developer in the world."
    const param = {'title': "DoctorMAD's Fitness", 'content':con}
    res.status(200).render('index.pug', param)
});

app.post('/', (req,res)=>{
    name1 = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    let outputToWrite= `the name of the cleint is ${name1}, ${age} years old, ${gender}, residing at ${address}.`
    fs.writeFileSync("output.txt", outputToWrite)
    const param = {'message': "Your form is successfully commited."};
    res.status(200).render('index.pug',param)
})


// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});














// app.get("/", (req, res) => {
//     res.send("This is my hoem page of first exrpess app with Akash");
// });
// app.get("/about", (req, res) => {
//     res.send("This is my about page of first exrpess app with Akash which showig my details");
// });

// app.post("/about", (req, res) => {
//     res.send("This is about page of first exrpess app with Akash with post request.");
// });
// app.get("/this", (req, res) => {
//     res.status(404).send("Page you are looking not found.");
// });
