angular.module('myApp.top100', [] )

.controller('top100Controller', function($scope, $state, $firebase){
  $scope.dood = "dooood";

  var ref = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local object
  $scope.data = sync.$asObject();

});
