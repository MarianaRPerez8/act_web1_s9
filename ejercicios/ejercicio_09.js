// ejercicios/ejercicio_09.js

let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // 

  let valorNombre = nombre.value.trim();
  let valorEmail = email.value.trim();

  if (valorNombre === "" || valorEmail === "") {
    mensaje.textContent = "Todos los campos son obligatorios.";
    mensaje.className = "error";
  } else {
    mensaje.textContent = "Formulario enviado con éxito.";
    mensaje.className = "exito";
    
    formulario.reset();
  }
});
