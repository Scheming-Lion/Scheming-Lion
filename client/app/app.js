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
<<<<<<< HEAD
          templateUrl: 'search/search.html'
        },
        'topStories': {
          templateUrl: 'topStories/topStories.html'
        },
        'top100visual': {
          controller: 'top100visualController',
          templateUrl: 'top100visual/top100visual.html'
=======
          templateUrl: 'search/search.html',
          // controller: 'search/search.js'
>>>>>>> (bug) took out a bug in ng-controller of search
        }
        // 'topStories': {
        //   templateUrl: 'topStories/topStories.html'
        // }
      }
    });
  
  $urlRouterProvider.otherwise("/main");
<<<<<<< HEAD
});
=======
});
>>>>>>> (bug) took out a bug in ng-controller of search
