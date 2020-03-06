/*
* 防抖:动作绑定事件，动作发生后一定时间后触发事件，
      在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。

  节流:动作绑定事件，动作发生后一段时间后触发事件，
      在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。
* */

//防抖
const Debounce = function (fn, time) {
	let Timer = null;
	return () => {
		clearTimeout(Timer);
		Timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, time);
	};
};

//节流
const Throtte = function (fn, time) {
	let start = 0;
	return () => {
		let cur = Date.now();
		if (cur - start > time) {
			fn.apply(this, time);
			start = Date.now();
		}
	};
};

const test = () => {
	console.log(1);
};

const debounceTest = Debounce(test, 2000);
const throtteTest = Throtte(test, 2000);
debounceTest();
throtteTest();
