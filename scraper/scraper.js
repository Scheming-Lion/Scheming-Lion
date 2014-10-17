var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};



app.use(allowCrossDomain);
app.use(bodyParser.urlencoded());



app.post('/', function(req, res) {


  console.log(req.body);


  fs.appendFile('items-1-1000.txt', JSON.stringify(req.body) + '\n', function(err, data) {
    if(err) console.log(err);
    else {
      res.send(200,'sent');
    }
  });
})

app.get('/', function(req, res) {
  console.log('get');
  res.send('bldh');
})

console.log('listening on 8000');
app.listen(8000);