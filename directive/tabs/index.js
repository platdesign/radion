'use strict';


var angular = require('angular');


var mod = module.exports = angular.module('radion.directive.r-tabs', []);




mod.directive('rTabs', [function() {

	return {
		restrict: 'E',
		template: '<div class="r-tabs" ng-transclude></div>',
		replace: true,
		transclude: true,
		link: function(scope, el, attr) {

		}
	}

}]);



mod.directive('rTab', [function() {

	return {
		restrict: 'E',
		template: '<div class="r-tab" ng-transclude></div>',
		replace: true,
		transclude: true,
		link: function(scope, el, attr) {

		}
	}

}]);
