'use strict';


module.exports = List;



function List() {

	this.items = [];

}

List.$inject = [];





var proto = List.prototype;


/**
 * Init
 * @param  {Array} items An array of items
 * @return {Object}      self
 */
proto.init = function(items) {
	this.items = items;
	return this;
};


/**
 * Remove an item
 * @param  {Object} item Item which should be removed
 * @return {Object}      self
 */
proto.removeItem = function(item) {
	var index = this.items.indexOf(item);
	if(index > -1) {
		this.items.splice(index, 1);
	}
	return this;
};


/**
 * Add an item to list instance
 * @param {Object} item item to add
 */
proto.addItem = function(item) {
	this.items.push(item);
};


/**
 * Remove item by Index
 * @param  {Number} index index of item to remove
 * @return {Object}       self
 */
proto.removeIndex = function(index) {
	if(this.items[index]) {
		this.removeItem(this.items[index]);
	}
}

