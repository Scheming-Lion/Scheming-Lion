angular.module('myApp.trackPost', [] )

	.controller('trackPostController', function($scope){
		$scope.postToTrack;
		// $scope.userSubmitted;
		$scope.trackPost = function(url){
			$scope.loading = true;
			$scope.show = false; 
			$scope.postAuthor = '';
			$scope.createdAt = '';
			$scope.text = '';
			var url = "https://hacker-news.firebaseio.com/v0/item/";
			var postId = $scope.postToTrack;
			var postRef = new Firebase(url + postId);
			// Attach an asynchronous callback to read the data at our post reference
			postRef.on('value', function (snapshot) {
			  console.log(snapshot.val());
			  $scope.$apply(function(){
				  $scope.loading = false;
					$scope.show = true; 
				  $scope.postAuthor = snapshot.val().by;
				  var time = snapshot.val().time;
				  var date = new Date(0);
				  $scope.createdAt = date.setUTCSeconds(time);
				  $scope.text = snapshot.val().text;
				});
			}, function (errorObject) {
			  console.log('The read failed: ' + errorObject.code);
			});
		}

	});


