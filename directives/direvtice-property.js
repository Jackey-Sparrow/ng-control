/**
 * Created by Jackey Li on 15/9/6.
 */
(function (angular) {
    'use strict';

    /**
     * directive package
     * @type {module}
     */
    angular.module('directiveDemo', [])

        .constant('alertConfig', {
            xxx: true
        })
        .controller('myAppCtrl',
        ['$scope', '$attrs', 'alertConfig',
            function ($scope, $attrs, alertConfig) {
                console.log('run second');
                this.close = function () {
                };
                $scope.yourName = 'hi';
            }])
        .directive('alert',
        [function () {
            return {

                restrict: 'AE',//A:attribute E:element C:class M:comment

                //scope: false,//default value, parent scope
                //scope: true,//child scope
                //scope:{
                // myText:'=otherName',// two way
                // title:'@otherTitle' //pass string
                // fn:'&otherFnName'//pass function,use '='is good too
                // },//isolate scope

                //replace: true,//get rid of the outside element
                controller: 'myAppCtrl',
                require: ['alert'],
                //get the myAppCtrl controller，
                //only require self or parent directive name and get the controller
                //? 可选 ^查找parent controller
                transclude: true,////把directive 的内壳里面的元素(除开最外面的一层)放到ng-transclude元素里面
                //template:'<div></div>',
                //templateUrl: 'templates/alert.html',
                templateUrl: function (element, attrs) {
                    //should use this way
                    //element:<div alert></div>
                    //attrs:attrs in <div alert></div>
                    return attrs.templateUrl || 'templates/alert.html';
                },
                compile: function (tElement, tAttr) {
                    //you can operate dom here
                    console.log('run first');
                    var dialog = '<div>compile append</div>';
                    tElement.append(dialog);
                    return {
                        pre: function ($scope, element, attrs) {
                            console.log('run third');
                            //before post function
                            $scope.firstName = 'pre-Jackey';
                        },
                        post: function ($scope, element, attrs) {
                            console.log('run fourth');
                            //the same as link,compile dom here
                            $scope.firstName = 'post-Jackey';
                            $scope.lastName = 'zhou';

                            $scope.$on('$destroy', function () {

                            });
                        }
                    };
                },
                link: function (scope, element, attr, ctrls) {
                    console.log(ctrls[0]);//use myAppCtrl controller here
                }

                //执行顺序：compile ->controller ->pre ->post(link)
            };


        }]);
})(angular);