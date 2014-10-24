angular.module('myApp.main', ["myApp.search"] )

.controller('mainController', function($scope, $state){
	$state.transitionTo('main.subviews');
	$scope.search = true;
	$scope.topStories = false; 
	$scope.views = [$scope.search, $scope.views];

	$scope.toggleView = function( views ){
		$scope[views] = true;
	};
})

