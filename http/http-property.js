/**
 * Created by Jackey Li on 2015/9/16.
 */
(function (angular) {
    'use strict';

    angular.module('myApp.httpModule', [])
        .factory('httpService',
        ['$http', function ($http) {
            var service = {};

            return service;
        }]);
})(angular);