'use strict';

/**
 * Directive: r-dropdown
 */

var angular = require('angular');

var mod = module.exports = angular.module('radion.directive.dropdown', []);



mod.directive('rDropdown', ['$timeout', function($timeout) {
	return {
		restrict: 'E',
		template: require('./template.jade'),
		replace: true,
		transclude: true,
		require: 'rDropdown',
		scope: true,
		link: function(scope, el, attrs, ctrl) {
			ctrl.viewportEl = el.parents().filter(function() {
				return $(this).css('overflow') === 'hidden';
			}).first();
		},
		controller: ['$scope', function($scope) {
			$scope.$dropdown = this;

			this.isOpen = false;

			this.toggle = function() {


				this.isOpen = !this.isOpen;


					var viewport = {
						width: this.viewportEl.innerWidth(),
						height: this.viewportEl.innerHeight()
					};

					var contentOffset = this.contentEl.offset();
					var content = {
						left: contentOffset.left,
						top: contentOffset.top,
						width: this.contentEl.outerWidth(),
						height: this.contentEl.outerHeight()
					};

					var handleOffset = this.handleEl.offset();
					var handle = {
						left: handleOffset.left,
						top: handleOffset.top,
						width: this.handleEl.outerWidth(),
						height: this.handleEl.outerHeight()
					};

					var pos = {
						left: handle.left + handle.width/2,
						top: handle.top + handle.height
					};

					this.contentClass = 'center';



					if(pos.left + content.width/2 > viewport.width) {
						this.contentClass = 'left';
					} else if(pos.left - content.width/2 < 0) {
						this.contentClass = 'right';
					}


			};



			var closeTimer;
			this.triggerDeferredClose = function() {
				if(this.isOpen) {
					this.cancelDeferredClose();
					closeTimer = $timeout(function() {
						this.isOpen = false;
						this.isVisible = false;
					}.bind(this), 200);
				}
			};

			this.cancelDeferredClose = function() {
				$timeout.cancel(closeTimer);
			};

		}]
	}
}]);
