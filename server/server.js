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
  var options = {
        encoding: 'utf8'
      };
  fs.readFile('./scraper/data/items-1-1000.txt', options, function(err, data) {
    if (err) throw err;
    data = data.replace(/\n/g, ",");
    data = "["+data.slice(0,-2)+"}]";
    var items = JSON.parse(data);

    var stories = [];
    var comments = [];
    var jobs = [];
    var polls = [];
    var pollOptions = [];
    var users = [];
    var username = [];

    for (var i = 1; i < items.length; i++) {
      if (items[i].type === 'story') {
        items[i].kids = JSON.stringify(items[i].kids);
        stories.push(items[i]);
      } else if (items[i].type === 'comment') {
        items[i].kids = JSON.stringify(items[i].kids);
        comments.push(items[i]);
      // } else if (items[i].type === 'job') {
      //   job.push(items[i]);
      } else if (items[i].type === 'poll') {
        items[i].kids = JSON.stringify(items[i].kids);
        polls.push(items[i]);
      } else if (items[i].type === 'polloption') {
        pollOptions.push(items[i]);
      }

      if (username.indexOf(items[i].by) === -1) {
        var newUser = {
          about: null,
          created: null,
          delay: null,
          id: items[i].by,
          karma: null,
          submitted: null
        };
        username.push(items[i].by);
        users.push(newUser);
      }
    }

    // console.log(stories[0]);
    // console.log(comments[0]);

    db.create(db.Story, stories);
    db.create(db.Comment, comments);
    db.create(db.Poll, polls);
    db.create(db.PollOption, pollOptions);
    db.create(db.User, users);

  });
});

module.exports = app;