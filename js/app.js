/*Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar. */
let cronometro = document.getElementById('cronometro');
let btnIniciar = document.getElementById('btnIniciar');
let btnDetener = document.getElementById('btnDetener');
let intervalo;
let segundos = 0, minutos = 0, horas = 0;

function iniciarCronometro() {
  intervalo = setInterval(function(){
    segundos++;
    if(segundos === 60) {
      segundos = 0;
      minutos++;
      if(minutos === 60) {
        minutos = 0;
        horas++;
      }
    }
    cronometro.innerHTML = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
  }, 1000);
}

function detenerCronometro() {
  clearInterval(intervalo);
}

function agregarCeros(numero) {
  if(numero < 10) {
    return `0${numero}`;
  }
  return numero;
}

btnIniciar.onclick = function() {
  iniciarCronometro();
}

btnDetener.onclick = function() {
  detenerCronometro();
}