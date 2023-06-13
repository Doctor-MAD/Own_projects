const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CSS Grid Template_Area</title>
      <style>
        .container {
          display: grid;
          gap: 0.5rem;
          grid-template-areas: 
          'navbar navbar navbar navbar'
          'section section section aside'
          'footer footer footer footer'
          ;
        }
        .item {
          display: flex;
          background-color: tomato;
          border: 2px solid black;
          padding: 1rem;
          justify-content: center;
          align-items: center;
        }
        #navbar {
          grid-area: navbar;
        }
        #section {
          grid-area: section;
        }
        #aside {
          grid-area: aside;
        }
        footer {
          grid-area: footer;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="item" id="navbar">Home About Contact Us</div>
        <div class="item" id="section">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quasi!
        </div>
        <div class="item" id="aside">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem
          nesciunt aliquid nam, sint voluptates.
        </div>
        <footer class="item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
          praesentium?
        </footer>
        <!-- <div class="item">item-1</div>
          <div class="item">item-2</div>
          <div class="item">item-3</div>
          <div class="item">item-4</div>
          <div class="item">item-5</div> -->
        <!-- <div class="item">item-6</div>
          <div class="item">item-7</div>
          <div class="item">item-8</div>
          <div class="item">item-9</div>
          <div class="item">item-10</div> -->
      </div>
  
      <script>
          let items= document.getElementsByClassName("item");
          console.log(items);
  
          let aside=document.getElementById("aside");
          console.log(aside);
  
          let item=document.querySelector(".item");
          console.log(item)
  
          let item2=document.querySelectorAll(".item");
          console.log(item2)
  
      </script>
  
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});