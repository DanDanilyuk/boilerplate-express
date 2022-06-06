let express = require('express');
let app = express();

app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(__dirname + "/public/index.html");
});

console.log('Hello World');

 module.exports = app;
