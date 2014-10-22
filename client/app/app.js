var app = angular.module('myApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      views : {
        'searchTopStories': {
          templateUrl: "../partials/state2.html"
        }
      }
    })
$urlRouterProvider.otherwise("/main");
});

// $stateProvider.state("home", {
//     views: {
//         "main": {
//             template: "<h1>HELLO!</h1>"
//         }
//     }    
// })