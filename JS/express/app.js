const express = require('express');

const app = express();
port = 3000;

app.get("/", (req, res) => {
    res.send("This is my hoem page of first exrpess app with Akash")
});
app.get("/about", (req, res) => {
    res.send("This is my about page of first exrpess app with Akash")
});

app.post("/about", (req, res) => {
    res.send("This is about page of first exrpess app with Akash with post request.")
});
app.get("/this", (req, res) => {
    res.status(404).send("Page you are looking not found.")
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});