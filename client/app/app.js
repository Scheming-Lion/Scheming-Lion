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
	    		template: "<input type='text' class='userSearch' placeholder='Search for top user stories...''>"
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