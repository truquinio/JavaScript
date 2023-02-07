/*
Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de edad se debe mostrar un mensaje indicándolo.
*/

alert("Validar si es mayor de edad")

// Solicita la edad del usuario
let edad = parseInt(prompt("Ingrese su edad"));

// Verifica si el usuario es mayor de edad y muestra el msj (op. ternario)
console.log(edad >= 18 ? "Usted es mayor" : "Usted es menor");




// OTRA FORMA verifica si el usuario es mayor de edad
if (edad >= 18) {

  // Si el usuario es mayor de edad, muestra el msj
  
  console.log("Usted es mayor de edad");
}