'use strict';

/**
 * Directive: uiDropdownHandle
 */


var angular = require('angular');

var mod = module.exports = angular.module('radion.directive.dropdown-handle', []);

mod.directive('rDropdownHandle', [function() {
	return {
		restrict: 'E',
		template: require('./template.jade'),
		replace: true,
		transclude: true,
		require: '^rDropdown',

		link: function(scope, el, attrs, dropdownCtrl) {
			scope.$dropdown = dropdownCtrl;

			dropdownCtrl.handleEl = el;
		},
		controller: ['$scope', function($scope) {

		}]
	}
}]);
