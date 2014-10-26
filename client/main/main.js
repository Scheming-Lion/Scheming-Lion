angular.module('myApp.main', [] )

.controller('mainController', ['$scope', '$state', function($scope, $state) {
	$state.transitionTo('main.subviews');

  $scope.current;

  $scope.chooseView = function(view) {
    $scope.current = view;
  };

  $scope.primary = function(view) {
    if ($scope.current === undefined) {
      $scope.current = 'home';
    }
    return $scope.current === view;
  };

  $scope.primary('search');

}]);

