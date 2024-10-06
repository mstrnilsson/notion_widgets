function showTime() {
	document.getElementById('currentTime'+'2').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
