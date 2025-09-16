// ejercicios/ejercicio_05.js

let imagen = document.getElementById("imagen");
let enlace = document.getElementById("enlace");
let boton = document.getElementById("boton");

console.log("SRC actual de la imagen:", imagen.getAttribute("src"));
console.log("HREF actual del enlace:", enlace.getAttribute("href"));

boton.addEventListener("click", function() {

  imagen.setAttribute("src", "https://via.placeholder.com/300");
  imagen.setAttribute("alt", "Imagen modificada");

  enlace.setAttribute("href", "https://www.wikipedia.org");
  enlace.textContent = "Ir a Wikipedia";
});
