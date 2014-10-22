var app = angular.module('myApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state2");
  //
  // Now set up the states
  $stateProvider
    .state('state2', {
    	views : {
	    	'searchTopStories': {
	    		templateUrl: "state2.html"
	    	}
	    }
    })
});

// $stateProvider.state("home", {
//     views: {
//         "main": {
//             template: "<h1>HELLO!</h1>"
//         }
//     }    
// })