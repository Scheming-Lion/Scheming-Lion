var app = angular.module('myApp', [
  "ui.router",
  "myApp.main",
  "myApp.top100visual",
  "myApp.search",
  "firebase",
  "d3",
  "myApp.directives",
  "myApp.trackUser",
  "myApp.home"
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
        },
        'trackUser': {
          templateUrl: 'trackUser/trackUser.html',
          controller: 'trackUserController'
        },
        'home': {
          templateUrl: 'home/home.html',
          controller: 'homeController'
        }
      }
    });
  $urlRouterProvider.otherwise("/main");
});
