angular.module('myApp.main', ["myApp.search"] )

.controller('mainController', function($scope, $state){
	$state.transitionTo('main.subviews');
<<<<<<< HEAD
	$scope.search = false;
	$scope.topStories = false;
  $scope.top100visual = true;
});
=======
	$scope.search = true;
	$scope.topStories = false; 
	$scope.views = [$scope.search, $scope.views];

	$scope.toggleView = function( views ){
		$scope[views] = true;
	};
})
>>>>>>> (bug) took out a bug in ng-controller of search

