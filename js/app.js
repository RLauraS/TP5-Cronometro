/*Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar. */
let cronometro = document.getElementById('cronometro');
let btnIniciar = document.getElementById('btnIniciar');
let btnDetener = document.getElementById('btnDetener');
let btnReset = document.getElementById('btnReset');
let intervalo;
let segundos = 0, minutos = 0, horas = 0, milisegundos = 0;

function iniciarCronometro() {
  intervalo = setInterval(function(){
    milisegundos++;
    if(milisegundos === 1000) {
      milisegundos = 0;
      segundos++;
      if(segundos === 60) {
        segundos = 0;
        minutos++;
        if(minutos === 60) {
          minutos = 0;
          horas++;
        }
      }
    }
    cronometro.innerHTML = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}:${agregarCerosMilisegundos(milisegundos)}`;
  }, 1);
}

function detenerCronometro() {
  clearInterval(intervalo);
}

function resetCronometro(){
  clearInterval(intervalo);
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerHTML = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}:${agregarCerosMilisegundos(milisegundos)}`;
}

function agregarCeros(numero) {
  if(numero < 10) {
    return `0${numero}`;
  }
  return numero;
}

function agregarCerosMilisegundos(numero) {
  if(numero < 10) {
    return `00${numero}`;
  } else if(numero < 100) {
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

btnReset.onclick = function() {
  resetCronometro();
}

