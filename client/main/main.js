angular.module('myApp.main', [] )

.controller('mainController', function($scope, $state){
	$state.transitionTo('main.subviews');
	$scope.search = true;
	// $scope.topStories = false;
})

