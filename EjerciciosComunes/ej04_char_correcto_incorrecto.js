/*
Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
*/

alert("validar caracter CORRECTO o INCORRECTO")

// Pido al usuario que ingrese un carácter
let char = prompt("Ingrese un carácter (S o N)").toUpperCase();

// Verifico si el carácter ingresado es 'S' o 'N' e imprimo msj según corresponda
console.log(char == 'S' | char == 'N' ? "CORRECTO" : "INCORRECTO");


// OTRA FORMA: Verifico si el carácter ingresado es 'S' o 'N'
if (char === 'S' || char === 'N') {

  // Imprimo un mensaje de que la entrada es correcta
  console.log("CORRECTO");

} else {

  // Imprimo un mensaje de que la entrada es incorrecta
  console.log("INCORRECTO");
}