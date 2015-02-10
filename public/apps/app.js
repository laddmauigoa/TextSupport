var app = angular.module('textSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
$routeProvider

	.when('/', {
		templateUrl: 'apps/mainHomeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/support', {
		templateUrl: 'apps/supportTmpl.html',
		controller: 'supportCtrl'
	})
	
	.otherwise({
		redirectTo: '/'
	})

}) 