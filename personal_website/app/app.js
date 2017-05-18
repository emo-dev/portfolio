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
		url: '/',
		templateUrl: '../partials/Wrapper.html',
		controller: "WrapperCtrl"			      		           
  	})
	.state('wrapper.about', {
           url: '^/about',
           templateUrl: '../partials/About.html',
           controller: "AboutCtrl"
	})
	.state('wrapper.projects', {
           url: '^/projects',
           templateUrl: '../partials/Projects.html',
           controller: "ProjectsCtrl"
	})
	.state('wrapper.contact', {
           url: '^/contact',
           templateUrl: '../partials/Contact.html',
           controller: "ContactCtrl"
	});
})

.run(($location) => {	

	console.log("I am working in app.js");

});

