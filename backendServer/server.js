const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
const port = process.argv[2] || 8080; 
const jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


  // let cartList = [];

app.get('/getcart', (req, res) => {
  
  fs.readFile('cart.json', (err, data) => { 
    console.log(JSON.parse(data))
    res.send(data)
    // console.log(cartList)
  })
})

app.post('/postcart', (req, res) => {
  let cartList = req.body
  console.log(cartList)
  fs.writeFile('cart.json', JSON.stringify(cartList), (error) => {
  res.json({ success: true })

  })
})


app.listen(port, () => {
  console.log(`Server started on http://localhost: ${port}`);
  console.log('Press CTRL + C to stop server');
})