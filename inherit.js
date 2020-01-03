function Phone(name) {
	this.name = name;
	this.label = ['全面屏', '5G'];
}

//原型链继承属性和方法
Phone.prototype.color = ['red', 'green', 'blue'];
Phone.prototype.takePhoto = function () {
	console.log('我是  Phone  原型上的方法---takePhoto---' + this.name);
};

function HuaWei(name, inch) {
	//继承构造函数中的属性
	Phone.call(this, name);//继承实例属性，第一次调用Phone()
	//子类自己构造函数中的属性
	this.inch = inch;
}

//继承父类的属性和方法
// HuaWei.prototype = new Phone();//继承父类方法,第二次调用Phone()

// 组合继承最大的问题就是无论什么情况下,都会调用两次父类构造函数:
// 一次是在创建子类型原型的时候, 另一次是在子类型构造函数内部.
// 寄生组合式继承就是为了降低调用父类构造函数的开销而出现的 .
//其背后的基本思路是: 不必为了指定子类型的原型而调用超类型的构造函数
function inherit(son, father) {
	//Object.create() 接收两个参数:
	// 1 一个用作新对象原型的对象
	// 2 (可选的)一个为新对象定义额外属性的对象
	let prototypeObj = Object.create(father.prototype);//创建对象
	prototypeObj.constructor = son;//增强对象
	son.prototype = prototypeObj;//指定对象
}

inherit(HuaWei, Phone);//继承父类方法,此处并不会第二次调用Father()

//添加子类自己的方法或属性
HuaWei.prototype.listenMusic = function () {
	console.log('我是  HuaWei  原型上的方法---listenMusic---' + this.inch);
};

// let A = new HuaWei('mate30', 9.0);//实例化
// A.label.push('人脸识别');//操作父类构造函数的属性
// console.log(A.color);
// console.log(A.label);
// A.takePhoto();//调用父类原型上的方法
// A.listenMusic();//调用子类添加在原型上的方法
//
// let B = new HuaWei('p30', 7.0);
// B.color.push('white');
// console.log(B.color);
// console.log(B.label);
// B.takePhoto();
// B.listenMusic();


function Father(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}

Father.prototype.sayName = function () {
	console.log(this.name);
};

function Son(name, age) {
	Father.call(this, name);//继承实例属性，第一次调用Father()
	this.age = age;
}

Son.prototype = new Father();//继承父类方法,第二次调用Father()
Son.prototype.sayAge = function () {
	console.log(this.age);
};
// let instance1 = new Son('louis', 5);
// instance1.colors.push('black');
// console.log(instance1.colors);//"red,blue,green,black"
// instance1.sayName();//louis
// instance1.sayAge();//5
// let instance2 = new Son('zhai', 10);
// console.log(instance2.colors);//"red,blue,green"
// instance2.sayName();//zhai
// instance2.sayAge();//10

class A {
	//构造函数，里面写上对象的属性
	constructor(name) {
		this.name = name || 'Unknown';
	}

	//方法写在后面
	eat() {//父类共有的方法
		console.log(this.name + ' will eat eat eat.');
	}

	Arr = [1, 2];
}

class B extends A {
	//props是继承过来的属性，color是自己的属性
	constructor(name, color) {
		super(name);//相当于获得父类的this指向
		this.color = color;//自己的私有属性
	}

	run() {
		console.log('我在B中 我是' + this.color);
	}
}

const a = new B('zz', 'blue');
console.log(a.eat());
console.log(a.run());
a.Arr.push(3);
console.log(a.Arr);
const v = new B('vv', 'cc');
console.log(v.eat());
console.log(v.run());
console.log(v.Arr);
