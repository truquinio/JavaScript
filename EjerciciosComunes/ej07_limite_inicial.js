/*
Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.
*/

alert("Solicita n° hasta que suma supere límite inicial")

do {
  // Declaramos una variable para almacenar el límite
  let limite = parseInt(prompt("Ingrese el límite positivo:"));

  // Verifico si el límite es positivo
} while (limite < 0);

let suma = 0;

do {
  // Solicito un número al usuario
  let num = parseInt(prompt("Ingrese un número:"));

  // Sumo el número introducido a la suma total
  suma += num;

  // Repito el proceso hasta que la suma supere el límite
} while (suma <= limite);

// Muestro un mensaje que indica que se ha superado el límite
console.log("La suma de los números introducidos ha superado el límite");