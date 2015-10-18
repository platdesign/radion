'use strict';

// Deps
var angular = require('angular');
var pFileReader = require('./lib/pFileReader');

// Angular module
var mod = module.exports = angular.module('radion.file-reader', []);

// register rFileReader service
mod.value('rFileReader', pFileReader);
