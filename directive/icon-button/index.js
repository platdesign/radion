'use strict';

var angular = require('angular');


var mod = module.exports = angular.module('radion.directive.icon-button', []);




mod.directive('rIconButton', function() {
	return {
		restrict: 'E',
		template: '<button class="r-icon-button r-icon-button-theme-{{theme}}"><span class="r-icon-button-icon {{iconClass}}"></span></button>',
		scope: {
			iconClass: '@rIconButtonIcon',
			theme: '@rIconButtonTheme',
		},
		link: function(scope) {
			scope.theme = scope.theme || 'default';
		}
	}
});
