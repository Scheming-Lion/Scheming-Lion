angular.module('myApp.search', [] )
	
	.factory('search', function($http){
		var searchObject = {};
		searchObject.url = "https://hacker-news.firebaseio.com/v0";
		searchObject.storyIds;
		searchObject.topStories = {
			data:[]
		};
			searchObject.fetchData = function(userName){	
				return new Promise(function(resolve, reject){
				$http({
					method: 'GET',
					url: searchObject.url + "/user/" + userName + ".json",
				}).success(function(userProfile, status){
					if(userProfile === null){
						console.log('sorry not a valid user');
						reject();
					}
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
								var stories = searchItems.filter(function(story){
									return story.score;
								})
								var sortedStories = stories.sort(searchObject.sort);
								var topStoriesArray = sortedStories.slice(0,10);
								searchObject.topStories.data = topStoriesArray;
								resolve();
							}
						})
					}) 
				})
				.error(function(error){
					console.log('this is the error', error);
					reject(error);
				});
			});
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
	

	.controller('searchCtrl', function($scope, search){
		$scope.factory = search;
		$scope.loading = false; 
		$scope.good = false;
		$scope.topStories = search.topStories;
		$scope.searchUserName = function(userName){
			$scope.error = false;
			$scope.loading = true; 
			search.fetchData(userName).then(function(){
				$scope.good = true;
				$scope.$apply(function(){
					$scope.loading = false;
					$scope.userName = '';
				});
			}).catch(function(error){
					console.log('error', error);
					$scope.$apply(function(){
					$scope.good = false;
					$scope.loading = false;
					$scope.userName = '';
					$scope.error = true; 
				})
			})
		};

		$scope.storiesArray = search.topStories;
});
