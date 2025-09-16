// ejercicios/ejercicio_07.js

let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");

let contador = 1;

btnAgregar.addEventListener("click", function() {
  
  let nuevoElemento = document.createElement("li");

  nuevoElemento.textContent = "Elemento " + contador;

  lista.appendChild(nuevoElemento);

  contador++;
});
