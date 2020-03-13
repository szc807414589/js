const obj = { 'hello': 0 };
const handler = {
	get: function () {
		console.log('get');
		return obj;
	},
	set: function (newVal) {
		console.log(`set 被调用了,参数是${newVal}`);
	}
};
Object.defineProperty(obj, 'hello', handler);

// console.log(obj.hello);
// obj.hello = '1';
const obj2 = { a: 1 };
const handlerProxy = {
	get: function (target, propKey, receiver) {
		console.log('get');
		// console.log(`get target -- ${target}`);
		// console.log(`get propKey -- ${propKey}`);
		// console.log(`get receiver -- ${receiver}`);
		return 'haha';
	},
	set: function (target, propKey, value, receiver) {
		console.log('set');
		// console.log(`set target -- ${target}`);
		// console.log(`set propKey -- ${propKey}`);
		// console.log(`set value -- ${value}`);
		// console.log(`set receiver -- ${receiver}`);
		return Reflect.set(target, propKey, value, receiver);
	}
};
let proxy = new Proxy(obj2, handlerProxy);
console.log(proxy.a);
// proxy.c = 'ww';
// console.log(proxy);
// ++proxy.a;