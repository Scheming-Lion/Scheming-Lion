angular.module('myApp.search', [] )
	
	.factory('search', function(){
		var searchObject = {};
		searchObject.url = "https://hacker-news.firebaseio.com/v0/";
		searchObject.items = [];
		searchObject.storyIds;
		searchObject.topStories;

		searchObject.fetchData = function(userName){
			$http({
				method: 'GET',
				url: this.url + "/users/" + userName + ".json",
			}).success(function(userProfile, status){
				this.storyIds = userProfile.submitted;
				this.storyIds.forEach(function(storyId){
					$.get(this.url + "/item/" + storyId + ".json", function(story, status){
						this.items.push(story);
						if(this.items.length === this.storyIds.length){
							stories = this.items.filter(function(story){
								return story.score;
							})
							this.topStories = stories.slice(0,10);
							console.log(this.topStories);
						}
					})
				}) 
			})
			.error(function(error){
				console.log(error)
			})
		}
		return searchObject;
	})

	.controller('searchCtrl', function($scope, search, $location){
		$scope.go = function( path ){
			console.log( path );
			$location.path( path ); 
		};
		$scope.username;
		$scope.test = function(){
			console.log($scope.userName);
			$scope.userName = '';
		}
});
