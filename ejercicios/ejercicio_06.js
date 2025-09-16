// ejercicios/ejercicio_06.js

let titulo = document.getElementById("titulo");

let btnAgregar = document.getElementById("btnAgregar");
let btnQuitar = document.getElementById("btnQuitar");
let btnToggle = document.getElementById("btnToggle");

btnAgregar.addEventListener("click", function() {
  titulo.classList.add("resaltado");
});

btnQuitar.addEventListener("click", function() {
  titulo.classList.remove("resaltado");
});

btnToggle.addEventListener("click", function() {
  titulo.classList.toggle("oculto");
});
