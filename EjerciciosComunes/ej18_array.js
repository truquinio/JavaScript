/*
A partir del siguiente array: var array = [true, 5, false, "hola", "adios", 2]:

a) Determinar cual de los dos elementos de texto es mayor

b) Utilizando exclusivamente los dos array booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false

c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos
*/

// Creo e imprimo el array
let array = [true, 5, false, "hola", "adios", 2];
console.log(array);

// Determino cual de los dos elementos de texto es mayor
if (array[3].length > array[4].length) {

  console.log("El texto mayor es: " + array[3]);

} else {
  
  console.log(array[4] + ", es el texto mayor");
}

// Utilizo los dos array booleanos para obtener un resultado true y otro false
let resultado1 = array[0] || array[2];
let resultado2 = array[0] && array[2];

// Imprimo los resultados
console.log(`Resultado 1: ${resultado1}
Resultado 2: ${resultado2}`);

// Realizo las cinco operaciones matemáticas con los dos elementos numéricos
let suma = array[1] + array[5];
let resta = array[1] - array[5];
let multiplicacion = array[1] * array[5];
let division = array[1] / array[5];
let modulo = array[1] % array[5];

// Imprimo los resultados
console.log(`Suma: ${suma}
Resta: ${resta}
Multiplicación: ${multiplicacion}
División: ${division}
Módulo: ${modulo}`);