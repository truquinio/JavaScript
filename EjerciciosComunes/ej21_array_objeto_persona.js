/*
Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.
*/

console.log("Array con attr de objeto persona");

// Defino el objeto persona
let persona = {
  nombre: "Lalo",
  edad: 30,
  sexo: "H",
  peso: 80,
  altura: 1.75
};

// Creo una variable para almacenar las propiedades
let propiedades = [];

// Recorro las propiedades del objeto persona y las guardo en el array propiedades
for (propiedad in persona) {
  propiedades.push(propiedad);
}

// Imprimo resultado en consola
console.log(propiedades);