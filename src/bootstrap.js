define([
    'angular',
    'app',
    'login/login',
    'portal/portal'
], function (angular, app) {
    'use strict';

    app.config([ '$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }]);

    angular.bootstrap(document, [ 'app' ]);
});
