/*
Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y
muestre el siguiente array [6, 9, 12, 15, 18].
*/

console.log("Pasar de matriz a array sumando 3 a cada elemento")

// Defino e imprimo la matriz original
let matriz = [[3], [6], [9], [12], [15]];
console.log("Matriz original: ", matriz);

// Creo una variable para almacenar el resultado
let resultado = [];

// Recorro cada elemento de la matriz original
for (let i = 0; i < matriz.length; i++) {

  // Sumo 3 a cada elemento y lo almaceno en el resultado
  resultado.push(matriz[i][0] + 3);
}

// Muestro el resultado en consola
console.log("Array resultante: ", resultado);