'use strict';

/**
 * Directive: rDropdownContent
 */

var angular = require('angular');

var mod = module.exports = angular.module('radion.directive.dropdown-content', []);


mod.directive('rDropdownContent', [function() {
	return {
		restrict: 'E',

		template: require('./template.jade'),
		replace: true,
		transclude: true,
		require: '^rDropdown',
		scope: {},
		link: function(scope, el, attr, ctrl) {
			scope.$dropdown = ctrl;

			ctrl.contentEl = el;
		},
	}
}]);
