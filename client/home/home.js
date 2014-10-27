angular.module('myApp.home', [])

	.controller('homeController', function($scope, $http, totalGraph){
    
    $scope.total = [];

    $scope.getTitle = function(title, last) {
      console.log("getting title");
      $http.post('http://localhost:1337/findTotal', { search: title })
        .success(function(data) {
          $scope.total.push([title, data.num_rows]);
          if (last) { totalGraph.link($scope) }
        });
    };

    $scope.getTitle('stories', false);
    $scope.getTitle('comments', false);
    $scope.getTitle('users', true);
	});