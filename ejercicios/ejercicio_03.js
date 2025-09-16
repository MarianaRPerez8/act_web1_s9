// ejercicios/ejercicio_03.js

let elementos = document.getElementsByClassName("resaltado");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.color = "white";          
  elementos[i].style.backgroundColor = "blue"; 
  elementos[i].style.padding = "5px";
}

let cantidad = elementos.length;
console.log("Número de elementos con la clase 'resaltado': " + cantidad);

let contador = document.createElement("p");
contador.textContent = "Número de elementos con la clase 'resaltado': " + cantidad;
document.body.appendChild(contador);
