/*
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.
*/

alert("Mostrar el máximo, el mínimo, y el promedio de todos los n° ingresados");

// Inicializo las variables que guardarán el mínimo, máximo y la suma total de los números ingresados
var min = Number.POSITIVE_INFINITY;
var max = Number.NEGATIVE_INFINITY;
var sum = 0;

// Inicializo la cantidad de números ingresados
var count = 0;

// Pido al usuario que ingrese un número
var num = parseInt(prompt("Ingrese un número entero (0 para finalizar):"));

// Repito el proceso mientras el usuario no haya ingresado 0
while (num !== 0) {

  // Incremento la cantidad de números ingresados
  count++;

  // Actualizo el mínimo y el máximo si es necesario
  min = Math.min(min, num);
  max = Math.max(max, num);

  // Sumo el número al total
  sum += num;

  // Pido al usuario que ingrese otro número
  num = parseInt(prompt("Ingrese un número entero (0 para finalizar):"));
}

// Muestro el mínimo, máximo y promedio
if (count > 0) {
  console.log("Mínimo: " + min);
  console.log("Máximo: " + max);
  console.log("Promedio: " + (sum / count));
  
} else {
  console.log("No se ingresaron números.");
}
