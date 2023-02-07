/*
Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”
*/

alert("Mostrar la palabra más larga");

// Defino la función que encontrará la palabra más larga en una frase
const palabraMasLarga = () => {
    
    // Pido al usuario que ingrese una frase
    let frase = prompt("Ingrese una frase:");
    
    // Separo las palabras de la frase usando el método split y el espacio como separador
    let palabras = frase.split(" ");
    
    // Inicializo la variable que guardará la palabra más larga
    let palabraMasLarga = "";
    
    // Recorro cada una de las palabras
    for (let i = 0; i < palabras.length; i++) {

      // Si la longitud de la palabra actual es mayor a la longitud de la palabra más larga hasta el momento
      if (palabras[i].length > palabraMasLarga.length) {

        // Actualizo la palabra más larga
        palabraMasLarga = palabras[i];
      }
    }
    // Muestro la palabra más larga
    console.log(palabraMasLarga);
  };
  
  // Llamo a la función
  palabraMasLarga();
