'use strict';


var extend = require('../../core/extend-class');
var List = require('../list/list');




module.exports = extend(FocusList, List);




function FocusList() {

}


var proto = FocusList.prototype;


/**
 * Init
 * @param  {Array} items An array of items
 * @return {Object}      self
 */
proto.init = function(items) {
	this.__super.init.apply(this, arguments);

	if(items.length) {
		this.focus(items[0]);
	}
	return this;
};



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
	this.__super.removeItem.apply(this, arguments);

	if(this.focused === item) {
		this.focusPrev(item);
	}

	return this;
};



/**
 * Focus previous item
 * @param  {Object} item optional given item
 * @return {Object}      self
 */
proto.focusPrev = function(item) {
	item = item || this.focused;
	var index = this.items.indexOf(item);
	this.focusIndex(index - 1);
	return this;
};



/**
 * Focus next item
 * @param  {Object} item optional given item
 * @return {Object}      self
 */
proto.focusNext = function(item) {
	item = item || this.focused;
	var index = this.items.indexOf(item);
	this.focusIndex(index + 1);
	return this;
};

