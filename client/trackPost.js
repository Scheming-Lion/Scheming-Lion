var Firebase = require('firebase');

var url = "https://hacker-news.firebaseio.com/v0/item/";
var postId = 3000; //hard-coded for now. Will need to get this from an input tag

var postRef = new Firebase(url + postId);

// Attach an asynchronous callback to read the data at our post reference
postRef.on('value', function (snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});