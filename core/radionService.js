'use strict';




module.exports = [function() {


	this.bind = function(method, scope) {
		return method.bind(scope);
	};


}]
