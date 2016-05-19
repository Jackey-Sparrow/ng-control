/**
 * Created by lja on 2016-5-5.
 */
(function () {
	//'use strict';

	//what is object

	var obj = {
		name: 'Jackey'
	};

	console.log(obj);

	//1  Object：prototype
	//obj.__proto__ point to object
	//__defineGetter__: __defineGetter__()
	//__defineSetter__: __defineSetter__()
	//__lookupGetter__: __lookupGetter__()
	//__lookupSetter__: __lookupSetter__()
	//constructor: Object()
	//hasOwnProperty: hasOwnProperty() useage: obj.hasOwnProperty('a');
	//isPrototypeOf: isPrototypeOf() check prototype
	//propertyIsEnumerable: propertyIsEnumerable() 是否能用for in
	//toLocaleString: toLocaleString()
	//toString: toString()
	//valueOf: valueOf()
	//get __proto__: get __proto__()
	//set __proto__: set __proto__()


	//2 property and fn

	var person = {};

	//property
	Object.defineProperty(person, 'name', {
		configurable: true,//是否能删除
		enumerable: true,//是否通过for in循环返回属性
		writable: true,//是否可以修改属性的值
		value: 'Jackey'//值
	});

	console.log(person.name);

	//extend
	var a = 1;
	delete a;

	b = 1;
	delete b;//y


	//event
	var book = {};

	Object.defineProperty(book, 'year', {
		get: function () {
			return this._year;
		},
		set: function (val) {
			this._year = val + 1;
		}
	});

	book.year = 2016;
	console.log(book.year);//2017

})();