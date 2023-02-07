/*
Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.
*/

console.log("Rellenar 2 vectores con 5 valores aleatorios");

// Creo los dos vectores vacíos
let vector1 = [];
let vector2 = [];

// Itero para rellenar los vectores con 5 valores aleatorios
for (let i = 0; i < 5; i++) {
  
  vector1[i] = Math.trunc(Math.random()*10);
  vector2[i] = Math.trunc(Math.random()*10);
}

// Imprimo los vectores
console.log(`Vector 1: ${vector1}
Vector 2: ${vector2}`);