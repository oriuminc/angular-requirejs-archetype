define([
    'app',
    'text!./login.html'
], function (app, loginTmpl) {
    'use strict';

    app
        .controller('login', [ '$scope', '$state', function ($scope, $state) {
            $scope.login = function () {
                $state.go('portal');
            };
        }])
        .config([ '$stateProvider', function ($stateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                template: loginTmpl,
                controller: 'login'
            })
        }]);
});
