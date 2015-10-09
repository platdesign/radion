'use strict';


var extend = require('radion/core/extendClass');
var List = require('radion/controller/List/List');




module.exports = extend(FocusList, List);




function FocusList() {

}


var proto = FocusList.prototype;


/**
 * Focus an item
 * @param  {Object} item item
 * @return {Object}      self
 */
proto.focus = function(item) {
	this.focused = item;
	return this;
};


/**
 * Focus an item by index
 * @param  {Number} index index of item
 * @return {Object}       self
 */
proto.focusIndex = function(index) {

	if(!this.items[index]) {
		index = 0;
	}

	this.focus(this.items[index]);

	return this;
};


/**
 * Remove item and focus previous one
 * @param  {Object} item item to remove
 * @return {Object}      self
 */
proto.removeItem = function(item) {
	var index = this.items.indexOf(item);

	this.__super.removeItem.apply(this, arguments);

	this.focusIndex(index - 1);

	return this;
};

