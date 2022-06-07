let express = require('express');
let app = express();

app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(__dirname + "/public/index.html");
});

app.use('/public', express.static(__dirname + '/public'));

app.get("/json", (req, res) => {
  // res.send("Hello Express");
  res.json({"message": "Hello json"});
});

console.log('Hello World');

 module.exports = app;
