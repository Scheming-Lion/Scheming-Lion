var app = angular.module('myApp', [
  "ui.router",
  "myApp.main",
  "myApp.top100visual",
  "firebase",
  "d3",
  "myApp.directives"
  ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/main',
      controller: 'mainController',
      templateUrl: 'main/main.html'
    })
    .state('main.subviews', {
      views: {
        'search': {
          templateUrl: 'search/search.html'
        },
        'topStories': {
          templateUrl: 'topStories/topStories.html'
        },
        'top100visual': {
          controller: 'top100visualController',
          templateUrl: 'top100visual/top100visual.html'
        }
      }
    });
  
  $urlRouterProvider.otherwise("/main");
});
