function showTime() {
	const now = new Date();
	document.getElementById('currentTime').innerHTML = now.toLocaleString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
