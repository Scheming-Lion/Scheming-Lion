angular.module('myApp.home', [])

	.controller('homeController', function($scope, $http, totalGraph){
    
    $scope.total = [];

    $scope.getTitle = function(title, last) {
      $http.post('http://localhost:1337/findTotal', { search: title })
        .success(function(data) {
          var text = data.num_rows.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          $scope.total.push([title, data.num_rows, text]);
          if (last) { totalGraph.link($scope); }
        });
    };

    $scope.getTitle('stories', false);
    $scope.getTitle('comments', false);
    $scope.getTitle('users', true);
	});