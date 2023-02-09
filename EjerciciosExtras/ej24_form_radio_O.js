/*
Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.
*/

// Declaro la función calcularRadio
calcularRadio = function calcularRadio() {

// Obtengo el valor del diámetro ingresado por usuario
let diametro = document.getElementById("diametro").value;

// Calculo el radio dividiendo el diámetro entre 2
let radio = diametro / 2;

// Muestro el resultado en el elemento div
document.getElementById("resultado").innerHTML = "El radio es: " + radio;
}