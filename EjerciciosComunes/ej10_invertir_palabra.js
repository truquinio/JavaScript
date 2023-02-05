/*
Escribir una función flecha que reciba una palabra y la devuelva al revés.
*/

alert("Invertir palabra ingresada")

// Defino la función flecha que invertirá la palabra ingresada por el usuario
const invertirPalabra = () => {
  // Pido al usuario que ingrese una palabra
  let palabra = prompt("Ingrese una palabra:");
  
  // Inicializo una variable vacía que guardará la palabra invertida
  let palabraInvertida = "";
  
  // Recorro cada letra de la palabra desde el final hasta el inicio
  for (let i = palabra.length - 1; i >= 0; i--) {
    // Agrego la letra actual a la palabra invertida
    palabraInvertida += palabra[i];
  }
  
  // Muestro la palabra invertida
  console.log(palabraInvertida);
};

// Llamo a la función
invertirPalabra();
