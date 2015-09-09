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

    /**
     * User Provider
     *
     * 可以在config里面配置整个系统需要的服务
     */
    serviceModule.provider('User', [function () {
        //closure
        var name;

        /**
         * private function
         * @param data
         * @private
         */
        this._setName = function (data) {
            name = data;
        };

        /**
         * private function
         * @returns {*}
         * @private
         */
        this._getName = function () {
            return name;
        };

        /**
         * return factory
         * @returns {{setName: (Function|*), getName: (Function|*)}}
         */
        this.$get = function () {
            return {
                setName: this._setName,
                getName: this._getName
            };
        }
    }]);

    //myApp.config(function (UserProvider) {
    //    console.log(UserProvider);
    //    UserProvider._setName('hhhh');
    //});
    //UserProvider： $get:(相当于一个factory)
    //                    Closure:name
    //                    $inject
    //               _setName(private)
    //               _getName(private)
    //什么时候用provider: 如果在应用开始前要对服务进行配置，那就使用provider

})(angular);