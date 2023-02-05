/*
A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:

a) Determinar cual de los dos elementos de texto es mayor

b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false

c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos
*/

// Creo e imprimo el array
let valores = [true, 5, false, "hola", "adios", 2];
console.log(valores);

// Determino cual de los dos elementos de texto es mayor
if (valores[3].length > valores[4].length) {

  console.log("El texto mayor es: " + valores[3]);

} else {
  
  console.log(valores[4] + ", es el texto mayor");
}

// Utilizo los dos valores booleanos para obtener un resultado true y otro false
let resultado1 = valores[0] || valores[2];
let resultado2 = valores[0] && valores[2];

// Imprimo los resultados
console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);

// Realizo las cinco operaciones matemáticas con los dos elementos numéricos
let suma = valores[1] + valores[5];
let resta = valores[1] - valores[5];
let multiplicacion = valores[1] * valores[5];
let division = valores[1] / valores[5];
let modulo = valores[1] % valores[5];

// Imprimo los resultados
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);