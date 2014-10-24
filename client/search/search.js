angular.module('myApp.search', [] )
	
	.factory('search', function($http){
		var searchObject = {};
		searchObject.url = "https://hacker-news.firebaseio.com/v0";
		searchObject.storyIds;
		searchObject.topStories = {
			data:[]
		};

		searchObject.fetchData = function(userName){
			console.log('Username', userName)
			$http({
				method: 'GET',
				url: searchObject.url + "/user/" + userName + ".json",
			}).success(function(userProfile, status){
				searchObject.storyIds = userProfile.submitted;
				var searchItems = [];
				searchObject.storyIds.forEach(function(storyId){
					$http({
						method: 'GET',
						url: searchObject.url + "/item/" + storyId + ".json",
						})
						.success(function(story, status){
						searchItems.push(story);
						if(searchItems.length === searchObject.storyIds.length){
							console.log('getting here a second time');
							var stories = searchItems.filter(function(story){
								return story.score;
							})
							var sortedStories = stories.sort(searchObject.sort);
							var topStoriesArray = sortedStories.slice(0,10);
							searchObject.topStories.data = topStoriesArray;
							console.log(searchObject.topStories.data);

							return searchObject.topStories.data;
						}
					})
				}) 
			})
			.error(function(error){
				console.log(error)
			})
		}

		searchObject.sort = function(a, b) {
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

		$scope.factory = search;
		// $scope.factory.topStories = search.topStories;
		$scope.topStories = search.topStories;
		$scope.searchUserName = function(userName){
			search.fetchData(userName);
		};

		$scope.storiesArray = search.topStories;
});
