var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');


//necessary to circumvent Same-origin policy - DON'T TOUCH THIS PART
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

//This allows us to properly barse data from the request (TODO: do we know why?)
app.use(bodyParser.urlencoded());

/*
We whip up a local node server that takes all post requests and writes the data
to a file. We separate JSON objects with a '\n' character to make parsing easier.
*/
app.post('/', function(req, res) {
  fs.appendFile('items-1-1000.txt', JSON.stringify(req.body) + '\n', function(err, data) {
    if (err) {
      console.log(err);
      console.log("ID NUMBER: " + req.body.id);
      res.send(404, err);
    } else {
      res.send(200,'sent');
    }
  });
});


console.log('listening on 8000');
app.listen(8000);