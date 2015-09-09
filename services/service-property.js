/**
 * Created by Jackey Li on 2015/9/9.
 */
(function (angular) {
    'use strict';

    var serviceModule = angular.module('myApp.service', []);

    /**
     * Service 单例，存在于整个生命周期
     */
    serviceModule.factory('myService', [function () {
        var service = {},
            name = '';

        /**
         * get name
         * @returns {string}
         */
        service.getName = function () {
            return name;
        };

        /**
         * set name
         * @param data
         */
        service.setName = function (data) {
            name = data;
        };

        return service;
    }]);


})(angular);