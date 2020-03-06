/*
* call 是如何做到改变 this 的指向呢？
* 原理很简单，在方法调用模式下，this 总是指向调用它所在方法的对象，
* this 的指向与所在方法的调用位置有关，而与方法的声明位置无关（箭头函数特殊）
*
* 返回值是你调用的方法的返回值，若该方法没有返回值，则返回undefined
* */

Function.prototype.myCall = function (ctx = window) {
	//this指向调用myCall的内容
	if (typeof this !== 'function') {
		throw new Error('不是function不能用myCall');
	}
	//取参数,第一个是this 除外
	const args = [...arguments].slice(1);
	//传入参数 执行该函数 return执行结果
	ctx.fn = this;
	const ret = ctx.fn(...args);
	//删除属性
	delete ctx.fn;
	//返回执行结果
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

bar.myCall(foo, 'black', '18');
