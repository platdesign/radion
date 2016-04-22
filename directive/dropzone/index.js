'use strict';


/**
 * Angular-Module
 * Directive: r-dropzone
 * [Description]
 */
var mod = module.exports = angular.module('radion.directive.dropzone', [

]);


mod.directive('rDropzone', [function(){

	return {
		restrict: 'A',
		link: function(scope, el, attrs) {

			el.css({
				position: 'relative'
			});

			function processDragOverOrEnter(event) {
				if (event != null) {
					event.preventDefault();
				}
				event.originalEvent.dataTransfer.effectAllowed = 'copy';
				return false;
			};


			el.bind('dragover', processDragOverOrEnter);
			el.bind('dragenter', processDragOverOrEnter);

			el.bind('dragstart', function(event) {
				if (event != null) {
					event.preventDefault();
				}
				event.originalEvent.dataTransfer.effectAllowed = 'copy';
				return false;
			});


			el.bind('drop', function(event) {
				event.preventDefault();

				var file = event.originalEvent.dataTransfer.files[0];

				scope.$eval(attrs.rDropzoneDrop, { $file: file });

				return false;
			});

		}
	}


}]);
