define([
	'angular',
	'angular-ui-router',
	'text!./hello.html'
], function (angular, uiRouter, helloTmpl) {
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
				template: helloTmpl,
				controller: 'helloController'
			});
		}]);

	angular.bootstrap(document, [ 'app' ]);
});
