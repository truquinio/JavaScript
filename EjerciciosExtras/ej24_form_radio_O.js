

// Declaro la función calcularRadio, en el ámbito global
window.calcularRadio = function calcularRadio() {

// Obtengo el valor del diámetro ingresado por el usuario
var diametro = document.getElementById("diametro").value;

// Calculo el radio dividiendo el diámetro entre 2
var radio = diametro / 2;

// Muestro el resultado en el elemento div
document.getElementById("resultado").innerHTML = "El radio es: " + radio;
}