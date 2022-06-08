let express = require('express');
let app = express();

app.use(function middleware(req, _res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

const nameMiddleware = () => {
  const first = req.query.first;
  const last = req.query.last;
  req.name = { first: first, last: last }
}

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

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});

app.get("/:word/echo", (req,  res) => {
  const word = req.params.word;
  res.send({
    echo: word
  });
})

app.get('/name', nameMiddleware, (req, res) => {
  res.json({
    name: `${req.name.first} ${req.name.last}`
  })
})

console.log('Hello World');

module.exports = app;
