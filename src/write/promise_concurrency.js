class LimitPromise {
	constructor(max) {
		this._max = max;//并发上线
		this._count = 0;//当前正在执行的任务数量
		this._taskQueue = [];//等待执行的任务队列
	}

	/*
	* 请求时调用函数
	* fn 异步函数,必须是async或者Promise函数
	* args 异步函数的参数
	* return 一个Promise
	* */
	caller(fn, ...args) {
		return new Promise((resolve, reject) => {
			const task = this._createFn(fn, args, resolve, reject);
			if (this._count >= this._max) {
				this._taskQueue.push(task);
			} else {
				task();
			}
		});
	}

	/*
	* 任务函数创建
	* fn 实际执行的函数
	* args 执行函数的参数
	* resolve
	* reject
	* return 一个任务函数
	* private
	* */
	_createFn(fn, args, resolve, reject) {
		return () => {
			//调用require
			fn(...args)
				.then(resolve)
				.catch(reject)
				.finally(() => {
					//再finally中,异步函数任务结束之后,取出下一个任务执行
					this._count--;
					if (this._taskQueue.length) {
						let task = this._taskQueue.shift();
						task();
					} else {
						console.log(this._count);
					}
				});
			this._count++;
		};
	}
}
