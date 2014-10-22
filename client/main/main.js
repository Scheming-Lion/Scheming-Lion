angular.module('myApp.main', [] )

.controller('mainController', function($scope, $state){
	$state.transitionTo('main.subviews');
<<<<<<< HEAD
	$scope.search = false;
	$scope.topStories = false;
  $scope.top100visual = true;
});
=======
	$scope.search = true;
	// $scope.topStories = false;
})
>>>>>>> (bug) took out a bug in ng-controller of search

