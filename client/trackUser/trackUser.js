angular.module('myApp.trackUser', [] )

	.controller('trackUserController', function($scope){
		// var userData = $firebase();
		$scope.trackUser = function(user){
			$scope.userToTrack;
			$scope.userKarma;
			$scope.userSubmitted;
			$scope.show = false;
			$scope.loading = true;
			var url = "https://hacker-news.firebaseio.com/v0/user/";
			var fullUrl = url.concat(user);
			var hackerNewsRef = new Firebase(fullUrl);
			hackerNewsRef.on('value', function (snapshot) {
				console.log('updated', snapshot);
				$scope.loading = false;
				$scope.show = true;
				$scope.userSubmitted = snapshot.val().submitted;
				$scope.userKarma = snapshot.val().karma;
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			});	
		}
});







