'use strict';


/**
 * Angular-Module
 * Directive: r-dropdown
 * [Description]
 */
var mod = module.exports = angular.module('radion.directive-module.dropdown', [
	require('./directives/dropdown').name,
	require('./directives/dropdown-content').name,
	require('./directives/dropdown-handle').name,
]);
