/*
* 会创建一个新函数。当这个新函数被调用时，
* bind() 的第一个参数将作为它运行时的 this，
* 之后的一序列参数将会在传递的实参前传入作为它的参数
*       特点:指定this,返回一个函数,传递参数并且柯理化
* */
Function.prototype.myBind = function (ctx) {
	if (typeof this !== 'function') {
		throw new Error('不是function不能用bind');
	}
	let fn = this;//保存原始函数
	//第一个是this,取剩下的
	let args = [...arguments].slice(1);

	let result = function () {
		return fn.apply(
			//当我们使用new操作符之后，this其实不是指向我们指定的对象，而是指向new出来的这个实例的构造函数
			//判断当前this
			//如果 this instanceof result 说明这是new出来的实例，指向这个实例，
			// 否则指向ctx
			this instanceof result ? this : ctx,
			args.concat(...arguments)
		);
	};

	function Temp() {
	}//需要声明一个空函数,用来继承原型
	Temp.prototype = this.prototype;
	result.prototype = new Temp();

	return result;
};

Function.prototype.bind2 = function (content) {
	if (typeof this != 'function') {
		throw Error('not a function');
	}
	// 若没问参数类型则从这开始写
	let fn = this;
	let args = [...arguments].slice(1);

	let resFn = function () {
		return fn.apply(
			this instanceof resFn ? this : content,
			args.concat(...arguments)
		);
	};

	function tmp() {
	}

	tmp.prototype = this.prototype;
	resFn.prototype = new tmp();

	return resFn;
};


const obj = {
	value: 'objqqq'
};

function Fn(name, age) {
	// console.log('我是fn接收到的name : ' + name);
	// console.log('我是fn接收到的age  : ' + age);
	// console.log('到底绑定obj没有呢  : ' + this.value);
	console.log(this);
	this.test = '我是测试数据';
}

Fn.prototype.pro = '原型数据';

// const bindFn = Fn.bind(obj, 'LJ', 25);
const bindFn = Fn.myBind(obj, 'LJ', 25);
// const bindFn = Fn.bind2(obj, 'LJ', 25);

const newBind = new bindFn();

console.log(newBind);
console.log(newBind.pro);
console.log(newBind.test);
console.log(newBind.value);

