'use strict';

var angular = require('angular');

var mod = module.exports = angular.module('radion.directive.click-confirm', []);



mod.directive('rClickConfirm', [function() {
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {
			el.bind('click', function() {
				var message = attrs.rClickConfirmMessage || 'Really?';
				if (message && confirm(message)) {
					scope.$apply(attrs.rClickConfirm);
				}
			});
		}
	};
}])
