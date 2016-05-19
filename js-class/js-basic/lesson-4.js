/**
 * Created by lja on 2016-5-19.
 */
(function () {

	var i = 0, arr = [];
	for (; i < 10; i++) {
		arr[i] = function () {
			return i;
		};
	}

	console.log(arr[9]());//10
	console.log(arr[0]());//10

	//var i = 0, arr = [];
	//for (; i < 10; i++) {
	//	arr[i] = function () {
	//		return i;
	//	};
	//
	//	arr[i] = function (item) {
	//		return function () {
	//			return item
	//		}
	//	}(i);
	//}
	//
	//console.log(arr[0]());//0
	//console.log(arr[9]());//9
	//
	//
	//var mobility = function () {
	//
	//	var members = ['Jeremy', 'Tommy'];
	//
	//	function addMember(member) {
	//		members.push(member);
	//	}
	//
	//	return {
	//		addMember: addMember,
	//		getMembers: function () {
	//			return members;
	//		}
	//	}
	//}
	//
	//var m = mobility();
	//
	//console.log(m.getMembers());
	//m.addMember('Roy')
	//console.log(m.getMembers());

})();