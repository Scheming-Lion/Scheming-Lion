angular.module('myApp.main', ["myApp.search"] )

.controller('mainController', function($scope, $state){
	$state.transitionTo('main.subviews');

	$scope.search = false;
	$scope.topStories = false;
  $scope.top100visual = true;
});
