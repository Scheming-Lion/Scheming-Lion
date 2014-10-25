var app = angular.module('myApp', [
  "ui.router",
  "myApp.main",
  "myApp.top100visual",
  "myApp.search",
  "firebase",
  "d3",
  "myApp.directives"
  ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: 'mainController'
    })
    .state('main.subviews', {
      views: {
        'search': {
          templateUrl: 'search/search.html',
          controller: 'searchCtrl'
        },
        'top100visual': {
          controller: 'top100visualController',
          templateUrl: 'top100visual/top100visual.html'
        }
      }
    });
  $urlRouterProvider.otherwise("/main");
});
