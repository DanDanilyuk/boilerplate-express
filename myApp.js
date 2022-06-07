let express = require('express');
let app = express();

app.use(function middleware(req, _res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(__dirname + "/public/index.html");
});

app.use('/public', express.static(__dirname + '/public'));

app.get("/json", (req, res, next) => {
  // res.send("Hello Express");
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});

console.log('Hello World');

 module.exports = app;
