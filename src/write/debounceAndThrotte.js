/*
* 防抖:动作绑定事件，动作发生后一定时间后触发事件，
      在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
* */

function Debounce(fn, time) {
	let Timer = null;
	return () => {
		clearTimeout(Timer);
		Timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, time);
	};
}

