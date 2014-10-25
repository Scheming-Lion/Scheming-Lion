angular.module('myApp.main', ["myApp.search"] )

.controller('mainController', function($scope, $state){
	$state.transitionTo('main.subviews');

  $scope.current;

  $scope.chooseView = function(view) {
    $scope.current = view;
  };

  $scope.primary = function(view) {
    if ($scope.current === undefined) {
      $scope.current = 'search';
    }
    return $scope.current === view;
  };

  $scope.primary('search');
});
