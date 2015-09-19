/**
 * Created by Jackey Li on 2015/9/16.
 */
(function (angular) {
    'use strict';

    angular.module('myApp.httpModule', [])
        .config(function ($httpProvider) {
            var interceptor = function ($q, $rootScope/*, Auth*/) {
                return {
                    'response': function (response) {
                        if (response.config.url === '/api/login') {
                            //set token
                            //Auth.setToken(response.data.token);
                        }
                        return response;
                    },
                    'responseError': function (rejection) {
                        switch (rejection.status){
                            case 401:
                                if(rejection.config.url !=='api/login'){
                                    $rootScope.$broadcast('auth:loginRequired');
                                }
                                break;
                            case 403:
                                $rootScope.$broadcast('auth:forbidden');
                                break;
                            case 404:
                                $rootScope.$broadcast('page:notFound');
                                break;
                            case 500:
                                $rootScope.$broadcast('server:error');
                                break;
                        }
                        return $q.reject(rejection);
                    }
                    //'request': function () {
                    //
                    //},
                    //'requestError': function () {
                    //
                    //}
                };
            }

            $httpProvider.interceptors.push(interceptor);
        });
})(angular);