/*
* 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
* 并且返回接受余下的参数且返回结果的新函数的技术。
*
* 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
*
*
*   延迟计算 （用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，开始执行函数）
	动态创建函数 （参数不够时会返回接受剩下参数的函数）
	参数复用（每个参数可以多次复用）
	*
	* 需求:
	*       add(1, 2, 3) // 6
	*       add(1, 2)(3) // 6
	*       add(1)(2)(3) // 6
* */
// function add(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		};
// 	};
// }
//
// console.log(add(1)(2)(3));

function curry1(fn) {
	let args = [...arguments].slice(1);
	return function (...innerArgs) {
		let newArgs = [...args, ...innerArgs];
		return fn.apply(this, newArgs);
	};
}

function add(a, b, c, d) {
	return [a, b, c, d];
}

// const addCurry = curry1(add, 1, 2);
// addCurry(); // 3
// //或者
// const addCurry1 = curry1(add, 1);
// addCurry1(2); // 3
// //或者
// const addCurry2 = curry1(add);
// addCurry2(1, 2); // 3


// 柯里化函数的运行过程其实是一个参数的收集过程
// 我们先声明一个变量来接受这个参数，
// 当没有参数传入的时候表示已经收集完成了，
// 就执行我们的add方法

function currying1(fn, length) {
	length = length || fn.length;
	return function (...args) {
		return args.length >= length
			? fn.apply(this, args)
			: currying1(fn.bind(this, ...args), length - args.length);
	};
}


/* 通用柯理化函数
*   函数 currying 的实现中，使用了 fn.length 来表示函数参数的个数，
*   那 fn.length 表示函数的所有参数个数吗？并不是。
	函数的 length 属性获取的是形参的个数，但是形参的数量不包括剩余参数个数，
	* 而且仅包括第一个具有默认值之前的参数个数
*
* */
function currying(fn) {
	// 第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
	let length = fn.length;
	// currying 包裹之后返回一个新函数，接收参数为 ...args
	return function (...args) {
		// 新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
		return args.length >= length
			// 如果大于fn函数的参数长度，就执行 fn 函数，传入新函数的参数
			? fn.apply(this, args)
			// 如果，递归 currying 函数，
			// 新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），
			// 新的 length 为 fn 剩余参数的长度
			: currying(fn.bind(this, ...args));
	};
}

function _curry(fn) {
	let length = fn.length;
	console.log(length);
	// let newArgs = args || [];
	// 	console.log(arguments);
	return function (newArgs) {
		if (newArgs.length < length) {
			return curry.call(this, fn, newArgs);
		} else {
			return fn.apply(this, newArgs);
		}
	};
}


const curry = fn =>
	(judge = (...args) =>
		args.length === fn.length
			? fn(...args)
			: (...arg) => judge(...args, ...arg));
const curryA = fn => {
	return Jud = (...args) => {
		return	args.length === fn.length ?
			fn(...args) :
			(...innerArgs) => Jud(...args, ...innerArgs);
	};
};

const curry11 = (fn, arr = []) =>
	(...args) => (
		arg =>
			arg.length === fn.length ? fn(...arg) : curry(fn, arg)
	)([...arr, ...args]);


const A = currying(add);
console.log(A(1)(4)(3)(5));
console.log(A(1, 4, 3, 5));
console.log(A(1)(4, 3)(5));
console.log(A(1)(4, 3, 5));
console.log(A(1)()(4, 3, 5));
