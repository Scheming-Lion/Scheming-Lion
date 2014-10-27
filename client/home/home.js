angular.module('myApp.home', [])

	.controller('homeController', function($scope, $http, totalGraph){
    
    $scope.total = [];

    $scope.getTitle = function(title, callback) {
      $http.post('http://scheminglion.azurewebsites.net/findTotal', { search: title })
        .success(function(data) {
          var text = data.num_rows.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          $scope.total.push([title, data.num_rows, text]);
          callback();
        });
    };

    $scope.getTitle('users', function() {
      $scope.getTitle('stories', function() {
        $scope.getTitle('comments', function() {
          totalGraph.link($scope);
        });
      });
    });
	});