/**
 * Created by lja on 2016-5-18.
 */
(function () {
	window.a = 'out a';

	var obj = {
		a: 'inside a',
		sayA: function () {
			console.log(this.a);
		}
	};

	obj.sayA();//inside a

	var test1 = obj.sayA;
	test1();//out a

	test1.apply(obj);//inside a

	String.prototype.addFamilyName = function (name) {
		return this + ' ' + name;
	};

	function proxy(fn, context) {
		return function () {
			fn.apply(context);
		};
	}
})();