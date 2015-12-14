/**
 * Created by Jackey Li on 15/12/8.
 */
(function (angular) {
    'use strict';

    angular.module(globals.appName).constant('platformScrollToTopConfig', {
        textColor: '#ffffff',
        bgColor: '#404048'
    });

    /**
     * 
     */
    angular.module(globals.appName).directive('platformScrollToTop',
        ['platformBrowserTeller', 'platformScrollToTopConfig',
            function (platformBrowserTeller, config) {
                return {
                    restrict: 'EA',
                    scope: {
                        content: '@'
                    },
                    replace: true,
                    template: '<div class="scrollToTop">{{::content}}</div>',
                    link: function (scope, element) {

                        scope.content = scope.content || 'TOP';

                        element.css('background-color', config.bgColor);
                        element.css('color', config.textColor);
                        element.bind('click', function () {

                            if (platformBrowserTeller && (platformBrowserTeller.mozilla || platformBrowserTeller.msie)) {
                                //firefox IE
                                document.documentElement.scrollTop = 0;
                            }
                            else {
                                //chrome safari
                                document.body.scrollTop = 0;
                            }
                        });

                        scope.$on('$destroy', function () {
                            element.unbind('click');
                        });
                    }
                };
            }]);
})(angular);