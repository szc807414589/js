function sendAjax (params = {}) {
	const { url, method = 'GET', async = true, data = {}, successCb, errorCb } = params;
	params.type = (params.type || 'get').toUpperCase();
	//兼容ie6
	let xhr = XMLHttpRequest ?
		new XMLHttpRequest() :
		new ActiveXObject('Microsoft XMLHTTP');
	if (method === 'GET') {
		xhr.open(
			method,
			url + '?' + data,
			async
		);
		xhr.send();
	} else {
		xhr.open(type, url, async);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			successCb(xhr.responseText);
		} else {
			errorCb(xhr.responseText);
		}
	};
}