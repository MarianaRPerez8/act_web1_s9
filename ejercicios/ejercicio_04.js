// ejercicios/ejercicio_04.js

let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");
let boton = document.getElementById("boton");

titulo.textContent = "Título cambiado con textContent";

parrafo.innerHTML = "Este párrafo fue <b>modificado</b> con innerHTML.";

boton.addEventListener("click", function() {
  titulo.textContent = "Título cambiado al hacer clic";
  parrafo.innerHTML = "El contenido ahora tiene <i>nuevo formato</i> después de hacer clic.";
});
