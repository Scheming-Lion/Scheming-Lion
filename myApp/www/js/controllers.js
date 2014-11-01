angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $http.get('http://localhost:3000/api/getstories').
  success(function(data, status, headers, config) {
    $scope.stories = data;
    console.log( $scope.stories );
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  $scope.seedData = [];
  var seedDataStory = {
    user: 'Will Chen',
    title: 'Awesome new JS library for open soure development',
    time: '3 hours ago',
    points: 75,
    link: 'http://www.google.com/',
    site: 'google.com'
  };
  $scope.seedData.push( seedDataStory );


})
