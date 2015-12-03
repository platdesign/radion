'use strict';

var angular = require('angular');


var mod = module.exports = angular.module('radion.directive.r-select', [

	require('../click-outside').name,

]);


mod.directive('rSelect', ['$parse', function($parse) {
	return {
		restrict: 'E',
    template: function(el) {
    	var itemTmpl = el.html();
    	var template = $('<div>' + require('./template.jade') + '</div>');

    	template.find('.r-select-value').append(itemTmpl);
    	template.find('.r-select-option').html(itemTmpl);

    	template.addClass(el.attr('class'));

    	return template.html();
		},
		replace: true,
		scope: {
			items:'=rSelectItems',
			model: '=ngModel',
			placeholder: '@'
		},
		require: 'ngModel',
		link: function(scope, el, attr, modelCtrl) {


			var valueFn = attr.rSelectValuePath ? $parse(attr.rSelectValuePath) : function(item) { return item; }

			modelCtrl.$render = function() {
				var items = [];

				angular.forEach(scope.items, function(item){
					items.push(item);
				});

				 var item = items.filter(function(item){
				 	return angular.equals(valueFn(item), modelCtrl.$viewValue);
				})[0];

				scope.selectItem(item);
			};

			scope.selectItem = function(item) {
				scope.item = item;
				setModelValue(item);
			};

			function setModelValue(item) {
        var value;
				if(attr.rSelectValuePath) {
					value = $parse(attr.rSelectValuePath)(item);
				} else {
					value = item;
				}

				modelCtrl.$setViewValue(value);
			}



			scope.dropdownVisible = false;
			scope.toggleDropdown = function() {
				scope.dropdownVisible = true;
			};

			scope.hideDropdown = function() {
				scope.dropdownVisible = false;
			};
		}
	};
}]);
