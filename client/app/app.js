var app = angular.module('myApp', [
  "ui.router",
  "myApp.main",
  "myApp.top100",
  "firebase"
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
        'top100': {
          controller: 'top100Controller',
          templateUrl: 'top100/top100.html'
        }
      }
    });
  
  $urlRouterProvider.otherwise("/main");
});

  // .state('home', {
  //       url: '/home',
  //       controller: 'HomeController',
  //       templateUrl: 'home/home.html'
  //     })

  //     views : {
  //       'searchTopStories': {
  //         templateUrl: "../partials/state2.html"