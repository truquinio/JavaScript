/*
Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.
*/

alert("Retornar el tipo de dato ingresado");

// Defino una función flecha que recibe un argumento
const tipoDeDato = (arg) => {
  
  // Utilizo la función typeof para obtener el tipo de dato del argumento
  let dataType = typeof arg;
  
  // Retorno el tipo de dato obtenido
  return dataType;
};

// Pido al usuario que ingrese un argumento
let arg = prompt("Ingrese un argumento");

// Llamo a la función typeOfData y le paso el argumento ingresado por el usuario
let result = tipoDeDato(arg);

// Muestro el resultado
console.log(`El tipo de dato es: ${result}`);