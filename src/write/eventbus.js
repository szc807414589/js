/*
*   创建一个对象(缓存列表)
*	on方法用来把回调函数fn都加到缓存列表中
*	emit方法取到arguments里第一个当做key，根据key值去执行对应缓存列表中的函数
*	remove方法可以根据key值取消订阅
* */
const Event = {
	list: {},
	//增加订阅者
	on: function (key, fn) {
		// 如果对象中没有对应的key值
		// 也就是说明没有订阅过
		// 那就给key创建个缓存列表
		if (!this.list[key]) this.list[key] = [];
		this.list[key].push(fn);
	},
	//发布消息
	emit: function () {
		// 第一个参数是对应的key值
		// 直接用数组的shift方法取出
		let key = [].shift.call(arguments);
		let fns = this.list[key];
		// 如果缓存列表里没有函数就返回false
		if (!fns || fns.length === 0) return false;
		// 遍历key值对应的缓存列表
		// 依次执行函数的方法
		fns.forEach(fn => {
			fn.apply(this, arguments);
		});
	},
	//删除消息
	remove: function (key, fn) {
		let fns = this.list[key];
		if (!fns) return false;
		if (!fn) {
			// 如果没有传对应函数的话
			// 就会将key值对应缓存列表中的函数都清空掉
			fns && (fns.length = 0);
		} else {
			// 遍历缓存列表，看看传入的fn与哪个函数相同
			// 如果相同就直接从缓存列表中删掉即可
			fns.forEach((cb, i) => {
				if (cb === fn) {
					fns.splice(i, 1);
				}
			});
		}
	}

};
Event.on('start', (name, age) => {
	console.log('我的name是:' + name);
	console.log('我的age是:' + age);
});
Event.on('end', (job) => {
	console.log('我的job是:' + job);
});

Event.emit('start', '嘻嘻', '18');
Event.emit('start', 'haha', '19');
Event.emit('end', 'js');