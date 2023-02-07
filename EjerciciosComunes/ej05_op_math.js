/*
Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
*/

alert("Operaciones aritméticas básicas (+ - * /)")

// Solicita al usuario que ingrese los dos valores numéricos enteros
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

// Solicita al usuario que especifique la operación que desea realizar
let opcion = prompt("Ingrese la operación que desea realizar (S/R/M/D)").toLowerCase();

let resultado;

// Realiza la operación según la opción elegida por el usuario
switch (opcion) {
  case "s":
    resultado = num1 + num2;
    break;
  case "r":
    resultado = num1 - num2;
    break;
  case "m":
    resultado = num1 * num2;
    break;
  case "d":
    resultado = num1 / num2;
    break;
  default:
    alert("Operación inválida");
    break;
}

// Si la operación fue válida, muestra el resultado por pantalla
if (resultado !== undefined) {
  console.log("El resultado es: " + resultado);
}