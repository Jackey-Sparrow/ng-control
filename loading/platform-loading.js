/**
 * Created by Jackey Li on 2015/12/9.
 */
(function (angular) {
    'use strict';

//	var prefix = 'app/components/';
    var prefix = '';

    angular.module(globals.appName).directive('platformLoading',
        [function () {
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: prefix + 'loading/templates/loading.html',
                link: function (scope) {
                    scope.close = scope.cancel;
                }
            };
        }]);

    angular.module(globals.appName).directive('platformSpinner', [function () {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: prefix + 'loading/templates/spinner.html'
        };
    }]);

    angular.module(globals.appName).factory('$platformLoading',
        ['$rootScope', '$compile', '$document',
            function ($rootScope, $compile, $document) {
                return {
                    show: function () {

                        var scope = $rootScope.$new(true);

                        scope.showLoading = function () {
                            scope.element = $compile('<platform-loading></platform-loading>')(scope);
                            $document[0].body.appendChild(scope.element[0]);
                        };

                        scope.cancel = function () {
                            $document[0].body.removeChild(scope.element[0]);
                            scope.$destroy();
                        };

                        scope.showLoading();

                        return scope.cancel;
                    }
                };
            }]);

})(angular);