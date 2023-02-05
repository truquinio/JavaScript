/*
Realizar un programa en Javascript donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.
*/

console.log("Crear 2 arrays y combinarlos")

// Creo una función para generar números aleatorios y truncar la parte entera
function getRandomNumber() {
  return Math.trunc(Math.random()*10);
}

// Creo el arreglo A de 50 elementos con números aleatorios
let arrayA = Array.from({length: 50}, () => getRandomNumber());

// Muestro el arreglo A generado
console.log("Arreglo A: ", arrayA);

// Ordeno el arreglo A de menor a mayor
arrayA.sort((a, b) => a - b);

// Creo el arreglo B de 20 elementos
let arrayB = Array.from({length: 20}, () => 0);

// Copio los primeros 10 elementos ordenados de A a B
for (let i = 0; i < 10; i++) {
  arrayB[i] = arrayA[i];
}

// Relleno los 10 últimos elementos de B con el valor 0.5
for (let i = 10; i < 20; i++) {
  arrayB[i] = 0.5;
}

// Muestro el arreglo A ordenado
console.log("Arreglo A ordenado: ", arrayA);

// Muestro el arreglo B combinado
console.log("Arreglo B combinado: ", arrayB);