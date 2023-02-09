

// Declaro la función calcularRadio, en el ámbito global
window.calcularRadio = function calcularRadio() {

// Obtengo el valor del diámetro ingresado por el usuario
let diametro = document.getElementById("diametro").value;

// Calculo el radio dividiendo el diámetro entre 2
let radio = diametro / 2;

// Muestro el resultado en el elemento div
document.getElementById("resultado").innerHTML = "El radio es: " + radio;
}