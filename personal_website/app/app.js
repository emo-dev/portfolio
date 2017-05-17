"use strict";

var app = angular.module("TaylorPerkins", ['ui.router', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {
				
	$urlRouterProvider.otherwise('');
	// HOME STATES AND NESTED VIEWS ========================================

	$stateProvider
	//'landing' state handles both login and register pages
	.state('home', {
		url: '',
		templateUrl: '../partials/Home.html',
		controller: "HomeCtrl"			      		           
  	});
})

.run(($location) => {	

	console.log("I am working in app.js");

});

