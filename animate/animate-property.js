/**
 * Created by Jackey Li on 15/9/9.
 */
(function (angular) {
    'use strict';

    angular.module('myApp.animate', [])

        .animation('.my-crazy-animation', function () {
            return {
                enter: function (element, done) {
                    //run the animation here and call done when the animation is complete
                    return function (cancelled) {
                        //this (optional) function will be called when the animation
                        //completes or when the animation is cancelled (the cancelled
                        //flag will be set to true if cancelled).
                    };
                },
                leave: function (element, done) {
                },
                move: function (element, done) {
                },

                //animation that can be triggered before the class is added
                beforeAddClass: function (element, className, done) {
                },

                //animation that can be triggered after the class is added
                addClass: function (element, className, done) {
                },

                //animation that can be triggered before the class is removed
                beforeRemoveClass: function (element, className, done) {
                },

                //animation that can be triggered after the class is removed
                removeClass: function (element, className, done) {
                }
            };
        })

        .animation('.fold-animate', ['$animateCss', function ($animateCss) {
            return {
                enter: function (element, doneFn) {
                    var height = element[0].offsetHeight;
                    return $animateCss(element, {
                        addClass: 'test',
                        easing: 'ease-out',
                        from: {height: '0px'},
                        to: {height: height + 'px'},
                        duration: 1
                    });
                }
            }
        }]);


})(angular);