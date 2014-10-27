angular.module('myApp.home', [])

	.controller('homeController', function($scope, $http){
    
    $scope.total;

    $scope.getTitle = function(title) {
      console.log("getting title");
      $http.post('http://localhost:1337/findTotal', { search: title })
        .success(function(data) {
          $scope.total = data;
        });
    };

    $scope.getTitle('stories');
	});