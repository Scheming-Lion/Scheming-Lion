angular.module('myApp.trackUser', [] )

	.controller('trackUserController', function($scope, $http, $firebase){
		//Firebase has a module that will handle data updating through its event handling system
		$scope.test = function(vr){
			console.log(vr);
		};
		// var userData = $firebase();
		$scope.trackUser = function(user){
			console.log('working', user);
			var url = "https://hacker-news.firebaseio.com/v0/user/";
			var fullUrl = url.concat(user)
			var hackerNewsRef = new Firebase(fullUrl);
			console.log(hackerNewsRef);
			var postRef = $firebase(fullUrl);
			postRef.on('value', function (snapshot) {
			  console.log(snapshot.val());
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			});	
		}
		// var username = "seanmccann"; //hard-coded for now. Will need to get this from an input ta

		// Attach an asynchronous callback to read the data at our post reference

});

//Firebase has a module that will handle data updating through its event handling system
// var Firebase = require('firebase');

// var url = "https://hacker-news.firebaseio.com/v0/user/";
// var username = "seanmccann"; //hard-coded for now. Will need to get this from an input tag

// var postRef = new Firebase(url + username);

// // Attach an asynchronous callback to read the data at our post reference
// postRef.on('value', function (snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log('The read failed: ' + errorObject.code);
// });