/*
Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado
*/

console.log("Eliminar los dos últimos elementos de un array");

// Creo un array con varios elementos
let miArray = [1, 2, 3, 4, 5, 6];

// Elimino los dos últimos elementos del array
miArray.splice(-2, 2);

// Imprimo el array resultante
console.log("Array resultante:", miArray);