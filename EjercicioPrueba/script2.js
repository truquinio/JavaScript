var persona = {

  // Key = Attr : Value = tipo de dato
  apellido: "Landa",
  nombre: "Lalo",
  nacimiento : new Date("03-04-1999"),
  dni: 12345678,

  mascotas : [
    {
    apodo: "Pichichus",
    numeroId: 654321,
    nacimiento: new Date("01-02-2000")
  }, {
    apodo: "Laika",
    numeroId: 456987,
    nacimiento: new Date("01-02-2002")
  }
]
};

// var mascota = {
//   apodo: "Apodo",
//   numeroId: 654321,
//   nacimiento: new Date("01-02-2000")
// };

console.log("Imprimo la persona completa" + persona);

console.log("El apellido de la persona es: " + persona.apellido);

console.log("Los apodos de las mascotas son: " + persona.mascotas.apodo);

console.log("El apodo de la mascota 1 es: " + persona.mascotas[0].apodo);

class Mascota {
  apodo;
  numeroId;
}

var m = new Mascota();

m.apodo = "Apodo3";
m.numeroId = 258456;

console.log/(m);



