/*
Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.
*/

alert("Solicita n° hasta que suma supere límite inicial")

// Declaramos una variable para almacenar el límite
var limit = parseInt(prompt("Ingrese el límite positivo:"));

// Verifico si el límite es positivo
if (limit <= 0) {
  
  // Si no es positivo, muestro un mensaje de error
  console.log("El límite debe ser un número positivo");

} else {
  // Si es positivo, declaramos una variable para almacenar la suma de los números introducidos
  var sum = 0;

  // Repito el proceso hasta que la suma supere el límite
  while (sum <= limit) {

    // Solicito un número al usuario
    var num = parseInt(prompt("Ingrese un número:"));

    // Sumo el número introducido a la suma total
    sum += num;
  }

  // Muestro un mensaje que indica que se ha superado el límite
  console.log("La suma de los números introducidos ha superado el límite");
}
