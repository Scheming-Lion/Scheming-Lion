var express = require('express');

var app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/client');

app.use(express.static(__dirname + './../client'));

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;