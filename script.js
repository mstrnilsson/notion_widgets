function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString(+2);
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
