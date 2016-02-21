'use strict';
require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-animate');
console.log("This is starting the entry point");

const app = angular.module('TestApplication', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

/** This is for demostration purposes
	For larger projects and for organization, should break out the states, controllers, and factories
	into separate files and just require into this file
	example :
	require("./states")
	require("./controllers")
	require("./factories")
	or follow a more fractal approach
*/
app.config(function ($stateProvider) {
    // Register the home state
    $stateProvider.state('home', {
        url: '/home',
        controller: 'HomeController',
        template: `
			<div>Home State</div>
			<div>This is testing home state </div>
        `
    });
});

app.controller('HomeController', function ($scope) {


});