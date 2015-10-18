'use strict';


/**
 * Promise FileReader service
 *
 * Usage: [files] is an array of files selected by a html file form
 * var promise = pFileReader.readAsDataURL(files[0]);
 * -> resolves with requested file format
 */

var pFileReader = {};

function promisifyMethod(methodName) {
	return function(file) {

		return new Promise(function(resolve, reject) {
			var reader = new FileReader();

			reader.onload = function(e) {
				resolve(e.target.result);
			};

			reader[methodName].call(reader, file);
		});

	};
};

pFileReader.readAsDataURL 			= promisifyMethod('readAsDataURL');
pFileReader.readAsText 					= promisifyMethod('readAsText');
pFileReader.readAsArrayBuffer 	= promisifyMethod('readAsArrayBuffer');
pFileReader.readAsBinaryString 	= promisifyMethod('readAsBinaryString');


module.exports = pFileReader;
