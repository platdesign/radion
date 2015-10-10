'use strict';

var angular = require('angular');


var mod = module.exports = angular.module('radion.directive.r-select', [

	require('../click-outside').name,

]);




mod.directive('rSelect', ['$compile', '$parse', function($compile, $parse) {

	return {
		restrict: 'E',
		require: ['rSelect', 'ngModel'],
		//template: require('./templates/select.jade'),
		//replace: true,
		// scope: {
		// 	model: '=ngModel'
		// },
		//transclude: true,
		template: function(el) {
			var template = '<div>' + require('./templates/select.jade') + '</div>';
			var newEl = $(template);

			newEl.attr('class', newEl.attr('class') + ' ' + el.attr('class'));

			var customValue = el.find('r-select-value');

			if(customValue.length) {
				newEl.find('.r-select-value-wrapper').html(customValue);
			}

			newEl.find('.r-select-options').html(el.find('r-select-option'));

			return newEl.html();
		},
		replace: true,
		scope: true,
		compile: function(el) {

			return function link(scope, el, attr, ctrls, transclude) {

				var rSelectCtrl = ctrls[0];
				var modelCtrl = rSelectCtrl.modelCtrl =  ctrls[1];

				rSelectCtrl.items = scope.items;

				scope.select = rSelectCtrl;

				modelCtrl.$render = function() {
					var value = modelCtrl.$viewValue;

					var items = $parse(attr.rSelectItems)(scope);

					angular.forEach(items, function(item) {

						if($parse(attr.rSelectValue)({ item:item }) === value) {
							rSelectCtrl.setValue(value, item);
						}

					});
				};

				rSelectCtrl.selectItem = function(itemName, _scope) {

					var item = $parse(itemName)(_scope);
					var value = $parse(attr.rSelectValue)({ item:item });

					this.setValue(value, item, itemName);

				};

			};
		},


		controller: ['$parse', '$scope', function($parse, $scope) {
			this.isOpen = false;



			this.close = function() {
				this.isOpen = false;
			};

			this.open = function() {
				this.isOpen = true;
			};


			this.toggle = function() {
				this.isOpen = !this.isOpen;
			};

			this.setValue = function(val, item, itemName) {
				console.log(val)
				this.modelCtrl.$setViewValue(val || item);
				this.value = val || item;
				this.item = item;
				this.isOpen = false;
			};




			this.matchItem = function(itemName, scope) {

				var value = $parse(itemName)(scope);


			};

		}]
	}
}]);




mod.directive('rSelectOption', ['$parse', function($parse) {
	return {
		restrict: 'E',
		scope: {},
		require: '^rSelect',
		template: require('./templates/select-option.jade'),
		replace: true,
		transclude: true,
		link: function(scope, el, attr, rSelectCtrl, transclude) {
			scope.selectCtrl = rSelectCtrl;

			var renderScope;

			transclude(function(clone, scope) {
				el.html(clone);
				renderScope = scope;
			});


			scope.selectItem = function() {
				rSelectCtrl.selectItem(attr.rSelect, renderScope);
			};

			rSelectCtrl.matchItem(attr.rSelect, renderScope);

		},

	}
}]);








mod.directive('rSelectValue', function() {
	return {
		restrict: 'E',
		scope: {
		},
		require: '^rSelect',
		template: require('./templates/select-value.jade'),
		replace: true,
		transclude: 'element',
		link: function(scope, el, attr, rSelectCtrl) {
			scope.selectCtrl = rSelectCtrl;

		},

	}
});
