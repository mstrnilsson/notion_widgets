function showTime() {
  var fecha = new Date();
  var hora = new Date();
  fecha = fecha.toLocaleDateString("es-ES", { weekday:'long', day:'numeric', month:'long', year:'numeric'});
  hora = hora.toLocaleTimeString();
  document.getElementById('currentTime').innerHTML = fecha + " " + hora;
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
