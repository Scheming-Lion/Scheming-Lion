var app = angular.module('myApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "../partials/state1.html",
      templateUrl: "../partials/state1.html",
      controller: function( $scope ) {
        $scope.things = ['hello','oleg'];
      }
    })
    .state('state2', {
    	url: "../partials/state2.html",
    	templateUrl: "../partials/state2.html",
    	controller: function( $scope ){
    		$scope.things = ['beuenos', 'dias', 'oleg'];
    	}
    })
});
