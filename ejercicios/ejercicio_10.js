// ejercicios/ejercicio_10.js

let parrafo2 = document.getElementById("parrafo2");

let padre = parrafo2.parentElement;

let hijos = padre.children;

let siguienteHermano = parrafo2.nextElementSibling;

let info = document.getElementById("info");

info.innerHTML = `
  <p><strong>Elemento seleccionado:</strong> ${parrafo2.textContent}</p>
  <p><strong>Padre:</strong> ${padre.id}</p>
  <p><strong>Hijos del padre:</strong> ${hijos.length}</p>
  <p><strong>Siguiente hermano:</strong> ${siguienteHermano.textContent}</p>
`;
