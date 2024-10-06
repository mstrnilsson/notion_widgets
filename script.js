function showTime() {
	const now = new Date();
	document.getElementById('currentTime').innerHTML = now.toLocaleDateString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
