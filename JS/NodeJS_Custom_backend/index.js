// To make the server the code begins as-
const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1'
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if (url == '/') {
        res.end(home);
    }
    else if (url == '/about.html') {
        res.end(about);
    }
    else if (url == '/services.html') {
        res.end(services);
    }
    else if (url == '/contact.html') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1> 404 not found </h1>");
    }
})

server.listen(port, hostname, () => {
    console.log(`Connection to server is established. Website link is: http://${hostname}:${port}`)
});



