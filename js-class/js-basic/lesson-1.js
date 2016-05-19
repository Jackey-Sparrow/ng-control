/**
 * Created by lja on 2016-5-5.
 */
(function () {
	'use strict';

	//what new do when it is called

	var A = function () {
		//console.log('hi A');
		//console.log(this);//new => object: A{}
		//this.name = 'Jackey';//var a = A();报错
		return 'A';
	};

	//function A1() {
	//console.log('hi A1');
	//}

	//console.log(A);
	//console.log(A1);

	//point 1: new 的作用：
	//1 new a scope and put this to scope
	//2 excute the constructor
	//3 return this
	//no return no this
	//var a = A();//undefined
	//var aa = new A();//object

	//has return no this
	var a = A();//'A'
	var aa = new A();//object => this


	//============================================  ======================

	//this
	function B() {
		this.name = 'Jackey';
	}

	//var B = function () {
	//	this.name = 'Jackey';
	//};

	var b = new B();

	console.log(b);//be care of B prototype constructor


	//so

	function C() {
	}

	C.prototype = {
		//constructor: C,
		sayHi: function () {

		}
	};

	var c = new C();
	console.log(c);//c.__proto__ : object, no constructor


	//=============== prototype ============
	function D() {
		this.name = 'Jackey';
		this.mySkills = ['JS', 'H5', 'CSS3'];
	}

	D.prototype.getSkills = function () {
		return this.mySkills;
	};

	D.prototype.moreTest = [1, 2, 3];

	D.prototype.getMoreTest = function () {
		console.log(this.moreTest);
	};

	var d1 = new D();
	var d2 = new D();

	d1.mySkills.push('PHP');
	console.log(d2.getSkills());

	//是否共享原型测试
	d1.moreTest.push(4);
	d2.getMoreTest();

	var D3 = function () {
	};

	D3.prototype = new D();

	var d3 = new D3();
	var d4 = new D3();

	d3.mySkills.push('PHP');
	console.log(d4.getSkills());

	d3.mySkills = ['PHP'];
	console.log(d4.getSkills());


})();