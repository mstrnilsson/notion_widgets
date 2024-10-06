function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString(+'2');
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
