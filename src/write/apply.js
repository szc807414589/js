/*
* apply 和 call 功能相同,只是第二个参数不同
* */

Function.prototype.myApply = function (ctx = window) {
	//this指向调用myCall的内容
	if (typeof this !== 'function') {
		throw new Error('不是function不能用myCall');
	}
	ctx.fn = this;
	let ret;
	if (arguments[1]) {
		ret = ctx.fn(...arguments[1]);
	} else {
		ret = ctx.fn();
	}
	delete ctx.fn;
	return ret;
};
let foo = {
	value: 1
};

function bar(name, age) {
	console.log(name);
	console.log(age);
	console.log(this.value);
}

bar.myApply(foo, ['black', '18']);
