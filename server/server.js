var express = require('express');
var Promise = require("bluebird");
var fs = require('fs');
var split = require('split');
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

// route for the home page.
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/importData', function(req, res) {
  var stories = [];
  var comments = [];
  var jobs = [];
  var polls = [];
  var pollOptions = [];
  var users = [];
  var username = [];

  // CHANGE TO NAME OF THE FILE
  fs.createReadStream('../../../Desktop/items-7541474-8474817.txt', { encoding: 'utf8'})
    .pipe(split())
    .on('data', function (item) {
      // console.log(item);
      // console.log(JSON.parse(item).type);
      item = JSON.parse(item);
      if (item.type === 'story') {
        item.kids = JSON.stringify(item.kids);
        stories.push(item);
      } else if (item.type === 'comment') {
        item.kids = JSON.stringify(item.kids);
        comments.push(item);
      } else if (item.type === 'job') {
        job.push(item);
      } else if (item.type === 'poll') {
        item.kids = JSON.stringify(item.kids);
        polls.push(item);
      } else if (item.type === 'polloption') {
        pollOptions.push(item);
      }

      if (username.indexOf(item.by) === -1) {
        var newUser = {
          about: null,
          created: null,
          delay: null,
          id: item.by,
          karma: null,
          submitted: null
        };
        username.push(item.by);
        users.push(newUser);
      }
    })
    .on('error', function(error) {
      console.log(error);
    })
    .on('end', function() {
      console.log('done');
      db.create(db.Story, stories);
      db.create(db.Comment, comments);
      db.create(db.Job, jobs);
      db.create(db.Poll, polls);
      db.create(db.PollOption, pollOptions);
      db.create(db.User, users);
    });

});

module.exports = app;