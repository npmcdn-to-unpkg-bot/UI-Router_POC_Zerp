var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  var states = [
    { 
      name: 'home', 
      url: '/home',
	  /*views : {
	  	"": {*/
			controller: 'homeController as home',
			templateUrl: 'views/home.html'
		/*},
		"@" : {
			controller: 'ninjaController as ninja',
			templateUrl: 'views/ninjaUser.html'
		}
	  }*/
    },
	{
	  name: 'home.ninja',
	  url:'/ninjaUser',
	  views : {
	  	"@" : {
			controller: 'ninjaController as ninja',
			templateUrl: 'views/ninjaUser.html'
	  	}
	  }
	}
  ]

  states.forEach(function(state) {
    $stateProvider.state(state);
  });

  $urlRouterProvider.otherwise('/home');

});
