// ejercicios/ejercicio_01.js

let titulo = document.title;
let url = document.URL;

let divInfo = document.getElementById("info");

divInfo.innerHTML = `
  <p><strong>Título de la página:</strong> ${titulo}</p>
  <p><strong>URL actual:</strong> ${url}</p>
`;
