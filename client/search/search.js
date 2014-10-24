angular.module('myApp.search', [] )
	
	.factory('search', function($http){
		var searchObject = {};
		searchObject.url = "https://hacker-news.firebaseio.com/v0";
		searchObject.items = [];
		searchObject.storyIds;
		searchObject.topStories;

		searchObject.hello = function(){
			alert(this.url);
		}

		searchObject.fetchData = function(userName){
			$http({
				method: 'GET',
				url: searchObject.url + "/user/" + userName + ".json",
			}).success(function(userProfile, status){
				searchObject.storyIds = userProfile.submitted;
				searchObject.storyIds.forEach(function(storyId){
					$.get(searchObject.url + "/item/" + storyId + ".json", function(story, status){
						searchObject.items.push(story);
						if(searchObject.items.length === searchObject.storyIds.length){
							var stories = searchObject.items.filter(function(story){
								return story.score;
							})
							// var sortedStories = searchObject.sort(stories);
							var sortedStories = stories.sort(searchObject.sort);
							searchObject.topStories = sortedStories.slice(0,10);
							console.log(searchObject.topStories);
						}
					})
				}) 
			})
			.error(function(error){
				console.log(error)
			})
		}
		searchObject.sort = function(a,b) {
		  if (a.score < b.score)
		     return 1;
		  if (a.score > b.score)
		    return -1;
		  return 0;
		}
		return searchObject;
	})
	

	.controller('searchCtrl', function($scope, search, $location){
		// Currently the $location(path) is not working 
		// $scope.go = function( path ){
		// 	console.log( path );
		// 	$location.path( path ); 
		// };
		$scope.fact = search;
		$scope.username;
		$scope.searchUserName = function(userName){
			$scope.fact.fetchData(userName);
		}
});
