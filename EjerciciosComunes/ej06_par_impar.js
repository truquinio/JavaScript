/*
Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.
*/

alert("Calcular num par o impar")

// Declaro una variable para almacenar el número ingresado
var num = prompt("Ingrese un número entero:");

// Verificamos si el número es 0
if (num == 0) {
  
  // Si es 0, muestro un mensaje que dice que no es ni par ni impar
  console.log("El número no es par ni impar");
} else {
  // Si no es 0, verificamos si es par o impar
  if (num % 2 == 0) {
    // Si el residuo de la división por 2 es 0, entonces es par
    console.log("El número es par");
  } else {
    // Si no es 0, entonces es impar
    console.log("El número es impar");
  }
}