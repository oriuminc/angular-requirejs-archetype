define([
	'angular',
	'angular-ui-router'
], function (angular) {
	'use strict';

	angular.module('app', [ 'ui.router' ])
        .config([ '$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        }])
		.controller('helloController', [ '$scope', function ($scope) {
			$scope.yourNameHere = 'Flat Eric';
		}])
		.config([ '$stateProvider', function ($stateProvider) {
			$stateProvider.state('main', {
				url: '/',
				template: '<h1>Hello Again, {{ yourNameHere }}.</h1>',
				controller: 'helloController'
			});
		}]);

	angular.bootstrap(document, [ 'app' ]);
});
