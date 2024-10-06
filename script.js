function showTime() {
	document.getElementById('currentTime').innerHTML = new date.toLocaleString(); //Date().toUTCString()
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
