var express = require('express');
var fs = require('fs');
var db = require('./database/database.js');

var app = express();

// enables the views of the application to use straight HTML files.
// essentially we are using ejs as the template for our server's views
// but not really using ejs in the files at all.
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// tells the application where to go to find the views so that they can
// be rendered.
app.set('views', __dirname + '/client');

// tells the application where to go to find static files.
app.use(express.static(__dirname + './../client'));

// route for the home page.
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/importData', function(req, res) {
  // will need to fsReadfile
});

module.exports = app;