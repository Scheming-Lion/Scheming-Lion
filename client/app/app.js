var app = angular.module('myApp', ["ui.router", "myApp.main", "myApp.search"]);

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
          templateUrl: '/search/search.html',
          controller: 'searchCtrl'
        }
      }
    })
  
  $urlRouterProvider.otherwise("/main");
});