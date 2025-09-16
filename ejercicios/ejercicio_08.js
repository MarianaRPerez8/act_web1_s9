// ejercicios/ejercicio_08.js

let titulo = document.getElementById("titulo");
let boton = document.getElementById("btnClick");
let caja = document.getElementById("caja");

boton.addEventListener("click", function() {
  titulo.textContent = "¡Hiciste clic en el botón!";
  titulo.style.color = "blue";
});

caja.addEventListener("mouseover", function() {
  caja.style.backgroundColor = "green";
  caja.textContent = "Mouse sobre la caja";
});

caja.addEventListener("mouseout", function() {
  caja.style.backgroundColor = "lightgray";
  caja.textContent = "Pasa el mouse aquí";
});
