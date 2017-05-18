"use strict";

var app = angular.module("TaylorPerkins", ['ui.router', 'ui.bootstrap'])

.service('PageLocation', function(){
	this.location = "Home";
})

.config(function($stateProvider, $urlRouterProvider) {
				
	$urlRouterProvider.otherwise('');
	// HOME STATES AND NESTED VIEWS ========================================

	$stateProvider
	//'landing' state handles both login and register pages
	.state('wrapper', {
		url: '',
		templateUrl: '../partials/Wrapper.html',
		controller: "WrapperCtrl"			      		           
  	});
})

.run(($location) => {	

	console.log("I am working in app.js");

});

