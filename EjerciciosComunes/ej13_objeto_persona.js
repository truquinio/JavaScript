/*
Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.
*/

alert("Crear objeto persona y mostrar Attr");

// Creo un objeto persona con las propiedades especificadas
const persona = {
  nombre: "Lalo",
  edad: 30,
  sexo: "H",
  peso: 75,
  altura: 1.75
};

// Muestro las propiedades del objeto persona
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Sexo: ${persona.sexo}`);
console.log(`Peso: ${persona.peso}`);
console.log(`Altura: ${persona.altura}`);