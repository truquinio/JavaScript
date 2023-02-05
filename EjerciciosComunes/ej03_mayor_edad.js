/*
Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de edad se debe mostrar un mensaje indicándolo.
*/

alert("Validar si es mayor de edad")

// Solicita la edad del usuario
var edad = parseInt(prompt("Ingrese su edad"));

// Verifica si el usuario es mayor de edad
if (edad >= 18) {
  // Si el usuario es mayor de edad, muestra el msj
  console.log("Usted es mayor de edad");
}