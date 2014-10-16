define([
	'app',
	'text!./portal.html'
], function (app, portalTmpl) {
	'use strict';

	app
		.controller('portal', [ '$scope', '$state', function ($scope, $state) {
			$scope.logout = function () {
				$state.go('login');
			};
		}])
		.config([ '$stateProvider', function ($stateProvider) {
			$stateProvider.state('portal', {
				url: '/portal',
				template: portalTmpl,
				controller: 'portal'
			})
		}]);
});