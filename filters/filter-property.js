/**
 * Created by Jackey Li on 2015/9/15.
 */
(function (angular) {
    'use strict';

    /**
     * filter
     *
     * 1 {{ expression | filter }}
     * 2 {{ expression | filter1 | filter2 | ... }}
     * 3 {{ expression | filter:argument1:argument2:... }}
     */
    angular.module('myApp.filters', [])

    /**
     * @exapmle <div>{{info.myName|filterProperty}}</div>
     */
        .filter('filterProperty', [function () {
            return function (input) {
                return input + ' hello world';
            }
        }])

    /**
     * @example <div>{{info.myName|filterProperty1:' hello': 'world'}}</div>
     */
        .filter('filterProperty1', [function () {
            var fn = function (input, sep1, sep2) {
                return input + sep1 + sep2;
            };
            return fn;
        }]);

    //@example
    //2 {{ expression | filter1 | filter2 | ... }}
    //<div>{{info.myName | filterProperty | filterProperty1:' hello':' world'}}</div>
})(angular);