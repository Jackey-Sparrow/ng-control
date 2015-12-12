/**
 * Created by Jackey Li on 2015/12/12.
 */
(function (angular) {
	'use strict';

	angular.module(globals.appName).controller('myTestController',
		['$scope', '$platformLoading',
		 function ($scope, $platformLoading) {
			 $scope.openLoading = function () {
				 $platformLoading.show();
			 };
		 }]);
})(angular);