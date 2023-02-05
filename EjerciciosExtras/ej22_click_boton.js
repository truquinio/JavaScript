/*
Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.
*/

// Obtengo el botón con id "boton"
let button = document.getElementById("boton");

// Asigno una función al evento de clic en el botón
button.addEventListener("click", function () {

  // Muestro el mensaje al hacer clic en el botón
  alert("¡Hola! Hiciste clic en el botón");
});