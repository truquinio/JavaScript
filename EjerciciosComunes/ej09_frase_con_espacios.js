/*
Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrará así: H o l a. Nota: recordar el
funcionamiento de la función Substring().
*/

alert("Espacio entre cada letra de frase ingresada. Ej: H o l a")

// Pido al usuario que ingrese una frase
let frase = prompt("Ingrese una frase:");

// Inicializo la variable que guardará la frase con espacios entre cada letra
let fraseEspaciada = "";

// Recorro cada letra de la frase
for (let i = 0; i < frase.length; i++) {

  // Agrego el caracter actual a la frase espaciada, seguido de un espacio
  fraseEspaciada += frase.charAt(i) + " ";
}

// Muestro la frase espaciada
console.log(fraseEspaciada);