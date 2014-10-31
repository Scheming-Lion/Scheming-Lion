angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
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
