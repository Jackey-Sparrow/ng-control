/**
 * Created by Jackey Li on 2015/9/9.
 */
(function (angular) {
    'use strict';

    /**
     * factory()
     * service()
     * constant()
     * value()
     * provider()
     *
     * @type {module}
     */
    var serviceModule = angular.module('myApp.service', []);

    /**
     * Factory 单例，存在于整个生命周期
     */
    serviceModule.factory('myFactory', [function () {
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

    /**
     * Service 可以注册一个支持构造函数的服务
     * 和Factory不同之处是Service需要new实例化服务对象
     */
    serviceModule.service('myService', [function () {

        /**
         * Person function
         * @param name
         * @constructor
         */
        var Person = function (name) {
            this.name = name || 'Jackey';
        };

        /**
         * get name
         * @returns {*|string}
         */
        Person.prototype.getName = function () {
            return this.name;
        }

        /**
         * set name
         * @param data
         */
        Person.prototype.setName = function (data) {
            this.name = data;
        }

        return Person;
    }]);


})(angular);