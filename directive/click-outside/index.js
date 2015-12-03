'use strict';

var angular = require('angular');

var mod = module.exports = angular.module('radion.directive.click-outside', []);


console.log('click-outside');


mod.directive('rClickOutside', ['$window', '$parse', '$timeout', function ($window, $parse, $timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {

			element.on('click', function(event) {
				//event.stopPropagation();
			});

			var t = angular.element($window).on('click', function (event) {
				var clickOutHandler = $parse(attrs.rClickOutside);
				if (element[0].contains(event.target)) return;
				clickOutHandler(scope, {$event: event});

				$timeout(function() {
					scope.$apply();
				});

			});

		}
	};
}]);
