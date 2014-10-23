angular.module('myApp.top100visual', [] )

.controller('top100visualController', function($scope, $http, $firebase){
  $scope.dood = "dooood";

  var ref = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local object
  $scope.data = sync.$asArray();

  $scope.stories = [];

  $scope.data.$loaded()
    .then(function() {
      console.log($scope.data.$getRecord("0").$value);
      for (var index = 0; index < 100; index++) {
        var string = "" + index;
        // console.log(string);
        $http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.data.$getRecord(string).$value + ".json")
          .success(function(data) {
            $scope.stories.push(data.title);
          });
      }
    });


});