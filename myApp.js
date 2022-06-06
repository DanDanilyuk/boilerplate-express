let express = require('express');
let app = express();

app.get('', helloMessage(req, res));

function helloMessage(_req, res) {
  res.send('Hello Express');
}

console.log('Hello World');

 module.exports = app;
