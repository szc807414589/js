/*
* new 操作:
*
*   访问到 Person 构造函数里的属性
*   访问到 Person.prototype 中的属性
*
*   实现:
*           首先创建一个对象,
*           再把这个对象绑定到原型链上,
*           这个对象可以访问到构造函数原型上的属性,
*           return
*
* */
function _New(fn, ...args) {
	// let obj1 = {};
	// Object.setPrototypeOf(obj, fn.prototype);
	let obj = Object.create(fn.prototype);
	let ret = fn.apply(obj, args);
	return ret instanceof Object ? ret : obj;
}




function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.occupation = '学生';

Person.prototype.sayYourName = function () {
	console.log('我的名字是 ' + this.name);
};
let one = new Person('小明', 10);
console.log(one);  //{name: "小明", age: 10}
console.log(one.occupation); // 学生
console.log(one.sayYourName()); //我的名字是小明
console.log('---------------------------1---------------------------');



let two = _New(Person, '嘻嘻', 24);
console.log(two);
console.log(two.occupation);
console.log(two.sayYourName());
