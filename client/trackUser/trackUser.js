angular.module('myApp.trackUser', [] )

	.controller('trackUserController', function($scope){
		$scope.alert = function(xr){
			alert(xr);
		}
		// //Firebase has a module that will handle data updating through its event handling system
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

});
