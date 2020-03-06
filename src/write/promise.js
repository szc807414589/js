/*
*   三种状态pending| fulfilled(resolved) | rejected
	当处于pending状态的时候，可以转移到fulfilled(resolved)或者rejected状态
	当处于fulfilled(resolved)状态或者rejected状态的时候，就不可变。
	* 必须有一个then异步执行方法，then接受两个参数且必须返回一个promise：
* */// 判断变量否为function
const isFunction = variable => typeof variable === 'function';
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECT = 'reject';

class MyPromise {
	constructor(fn) {
		if (!isFunction(fn)) {
			throw new Error('MyPromise 必须是一个 function');
		}
		//状态
		this.status = PENDING;
		this.value = undefined;
		//队列 .then时候用到 一个成功一个失败
		this._resolveQueues = [];
		this._rejectedQueues = [];
		//  进入执行fn
		//  fn方法可能会抛出异常，需要捕获
		try{
			//将resolve和reject函数给使用者
			fn(this.resolve.bind(this), this.reject.bind(this));
		} catch (e){
			//如果在函数中抛出异常则将它注入reject中
			this.reject(e);
		}
	}

	resolve(resolve) {
		if (this.status !== PENDING) return;
		const run = () => {
			this.status = RESOLVED;//把状态改成 resolve
			// 依次执行成功队列中的函数，并清空队列
			const runResolved = (data) => {
				let cb;
				while (cb = this._resolveQueues.shift()) {
					cb(data);
				}
			};
			// 依次执行失败队列中的函数，并清空队列
			const runRejected = (err) => {
				let cb;
				while (cb = this._resolveQueues.shift()) {
					cb(err);
				}
			};
			/*
			  * 如果resolve的参数为MyPromise对象，
			  * 则必须等待该MyPromise对象状态改变后当前MyPromise的状态才会改变
			  * 且状态取决于参数MyPromise对象的状态
			  */
			if (resolve instanceof MyPromise) {
				resolve.then(res => {
					this.value = res;
					runResolved(res);
				}, err => {
					this.value = err;
					runRejected(err);
				});
			} else {
				this.value = resolve;
				runResolved(resolve);
			}
		};
		setTimeout(run, 0);
	}

	reject(reject) {
		if (this.status !== PENDING) return;
		// 依次执行失败队列中的函数，并清空队列
		const run = () => {
			this.value = reject;
			this.status = REJECT;
			let cb;
			while (cb = this._rejectedQueues.shift()) {
				cb(reject);
			}
		};
		setTimeout(run, 0);
	}

	static resolve(value) {
		// 如果参数是MyPromise实例，直接返回这个实例
		if (value instanceof MyPromise) return value;
		return new MyPromise(resolve => resolve(value));
	}

	static reject(value) {
		if (value instanceof MyPromise) return value;
		return new MyPromise((resolve, reject) => reject(value));
	}

	static all(arr) {
		return new MyPromise((resolve, reject) => {
			let values = [];
			let count = 0;
			for (let [i, k] of arr.fn){
				this.resolve(k).then(res => {
					values[i] = res;
					count++;
					//当所有状态都变成 resolve 之后 整个MyPromise的状态才变成 resolve
					if (count === arr.length) resolve(values);
				}, err => {
					//有一个 reject 了,整个MyPromise的状态就变成 reject
					reject(err);
				});
			}
		});
	}

	static race(arr) {
		return new MyPromise((resolve, reject) => {
			for (let m of arr){
				// 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
				this.resolve(m).then(res => {
					resolve(res);
				}, err => {
					reject(err);
				});

			}
		});
	}

	finally(cb) {
		// 不管promise最后的状态，
		// 在执行完then或catch指定的回调函数以后，
		// 都会执行finally方法指定的回调函数
		return this.then(
			value => MyPromise.resolve(cb()).then(() => value),
			err => MyPromise.resolve(cb()).then(() => throw err)
		);
	}

	then(_onResolve, _onReject) {
		const {value, status} = this;
		// .then的时候回return一个新的promise
		return new MyPromise((onResolvedNext, onRejectNext) => {
			//成功
			const resolved = value => {
				try{
					if (!isFunction(_onResolve)) {
						onResolvedNext(value);
					} else {
						const res = _onResolve(value);
						if (res instanceof MyPromise) {
							//如果当前cb返回MyPromise对象,必须等待他的状态改变之后再执行
							res.then(onResolvedNext, onRejectNext);
						} else {
							// 否则会将返回结果直接作为参数，
							// 传入下一个then的回调函数，
							// 并立即执行下一个then的回调函数
							onResolvedNext(res);
						}
					}
				} catch (e){
					// 如果函数执行出错，新的Promise对象的状态为失败
					onRejectNext(e);
				}
			};
			//失败  逻辑和resolve一样,只是执行函数不同
			const reject = error => {
				try{
					if (!isFunction(_onReject)) {
						onRejectNext(error);
					} else {
						const res = onRejectNext(error);
						if (res instanceof MyPromise) {
							res.then(onResolvedNext, onRejectNext);
						} else {
							onRejectNext(error);
						}
					}
				} catch (e){
					onRejectNext(e);
				}

			};
			//判断状态
			switch (status){
				// 当状态为pending时，将then方法回调函数加入执行队列等待执行
				case PENDING:
					this._resolveQueues.push(resolved);
					this._rejectedQueues.push(reject);
					break;
				// 当状态已经改变时，立即执行对应的回调函数
				case RESOLVED:
					resolved(value);
					break;
				case REJECT:
					reject(value);
					break;
			}

		});
	}

	catch(onRejected) {
		return this.then(undefined, onRejected);
	}
}

new MyPromise((resolve, reject) => {
	console.log('in MyPromise');
	resolve('这是第一个 resolve 值');
})
	.then((data) => {
		console.log('第一个 then'); //会打印'这是第一个 resolve 值'
		console.log(data); //会打印'这是第一个 resolve 值'
		return '这是第二个 resolve 值';
	})
	.then(data => {
		console.log('第二个 then');
		console.log(data);
	});
// 	.catch((err) => {
// 		console.log(err);
// 	});
