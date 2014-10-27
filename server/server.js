var express = require('express');
var Promise = require("bluebird");
var fs = require('fs');
var split = require('split');
var db = require('./database/database.js');
var https = require('https');
var bodyParser = require('body-parser');
var StringDecoder = require('string_decoder').StringDecoder;

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

app.use(bodyParser());

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

// allows other domains to interact with the server.
app.use(allowCrossDomain);

// route for the home page.
app.get('/', function(req, res) {
  res.render('index');
});

///////////////////////////////////////////////////////
// Only used to import data into the mysql database. //
///////////////////////////////////////////////////////

/*   Inserting user information into the users table

app.get('/populateUsers', function(request, response) {

  var decoder = new StringDecoder('utf8');

  var users = [];


  fs.createReadStream('./scraper/data/users.txt', { encoding: 'utf8'})
    .pipe(split())
    .on('data', function (user) {
      var usernameURL = 'https://hacker-news.firebaseio.com/v0/user/' + user + '.json';

      https.get( usernameURL , function(res) {

        var userInfo = '';

        res.on('data', function(chunk) {
          userInfo += decoder.write(chunk);
        });

        res.on('end', function() {
          var userDetails =  JSON.parse(userInfo);
          if (userDetails !== undefined) {
            console.log(userDetails.id);
            db.updateUser(userDetails);
          }
        });

      });

    })
    .on('error', function(error) {
      console.log(error);
    })
    .on('end', function() {
      console.log('done');
    });
});

*/

/* Import the hacker news api items into the database.

app.get('/importData', function(req, res) {
  var stories = [];
  var comments = [];
  var jobs = [];
  var polls = [];
  var pollOptions = [];
  var users = [];
  var username = [];

  // change to location and name of the file.

  fs.createReadStream('./scraper_data/items-1154966-1692160.txt', { encoding: 'utf8'})
    .pipe(split())
    .on('data', function (item) {
      item = JSON.parse(item);
      
      if (item.type === 'story') {
      
        item.kids = JSON.stringify(item.kids);
        stories.push(item);
      
      } else if (item.type === 'comment') {
      
        item.kids = JSON.stringify(item.kids);
        comments.push(item);
      
      } else if (item.type === 'job') {
      
        jobs.push(item);
      
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
      console.log('Done sorting items by type.');
      db.create(db.Story, stories);
      db.create(db.Comment, comments);
      db.create(db.Job, jobs);
      db.create(db.Poll, polls);
      db.create(db.PollOption, pollOptions);
      db.create(db.User, users);
    });

});

*/

module.exports = app;