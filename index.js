'use strict';



var angular = require('angular');

var mod = module.exports = angular.module('radion', []);



mod.service('radion', require('./core/radionService.js'));



mod.run(['$rootScope', 'radion', function($rootScope, radion) {

	$rootScope.r = radion;

}]);
