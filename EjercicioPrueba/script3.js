var numeros = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(numeros);

console.log(JSON.stringify); // JSON.stringify = Convierte a String un JSON

console.log(numeros[0]); // Muestra el valor en la posición 0

var personas = [
  {
    nombre: "Lalo",
    apellido: "Landa"
  },
  {
    nombre: "Pachu",
    apellido: "Peña"
  },
  {
    nombre: "Bob",
    apellido: "Esponja"
  }
];

console.log(personas[1]); // Muestra el valor en la posición [X]
console.log(personas[personas.length-1]); // Muestra el valor en la última posición

personas.forEach( (e)=>console.log(`${e.nombre} : Persona`)); // Uso un forEach + un template String

numeros.filter((e)=> e%2==0); // Filtro por números pares (Filter genera nuevo array)

numeros.filter((e)=> e%2!=0); // Filtro por números impares (Filter genera nuevo array)

numeros.map((e)=> e*30); // Map = Modifica todos los elementos del array

personas.filter(function (e) { //Función anónima

  if(e.nombre=="Lalo")  //Si nombre de e = a "Lalo"
  return e;             //Retorna e
}
)

personas.filter(function (e) { //Función anónima

  if(e.nombre!="Lalo")  //Si nombre de e = a "Lalo"
  return e;             //Retorna e
}
)


var setNumeros = set(numeros); // Guardo en setNumeros un set de números NO repetidos

"aaasssddd".split(""); // .split = genera un array en base en la ruptura de un String (letra x letra)

set("aaasssddd".split("")); // Rompo el string con el .split y saco todos los repetidos con el Set


var mapa = new Map();

mapa.set(1,"Lito");
// Map(1) {1 => 'Lito'}

mapa.set(2,"Loto");
// Map(2) {1 => 'Lito', 2 => 'Loto'}

mapa.set(3,"Locho");
// Map(3) {1 => 'Lito', 2 => 'Loto', 3 => 'Locho'}