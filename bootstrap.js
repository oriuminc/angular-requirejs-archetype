define([
	'angular',
	'text!./hello.html',
	'app'
], function (angular, helloTmpl, app) {
	'use strict';

	app
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
