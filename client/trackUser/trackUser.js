angular.module('myApp.trackUser', [] )

	.controller('trackUserController', function($scope){
		$scope.userToTrack;
		$scope.userKarma;
		$scope.userSubmitted;
		// var userData = $firebase();
		$scope.trackUser = function(user){
			var url = "https://hacker-news.firebaseio.com/v0/user/";
			var fullUrl = url.concat(user);
			var hackerNewsRef = new Firebase(fullUrl);
			hackerNewsRef.on('value', function (snapshot) {
				console.log('updated', snapshot);
				$scope.userToTrack= snapshot.val().id;
				$scope.userSubmitted = snapshot.val().submitted;
				$scope.userKarma = snapshot.val().karma;
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			});	
		}
});







