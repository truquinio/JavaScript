/*
Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.
*/

alert("Crear y cargar objeto libro, mostrar Attr");

// Creo un objeto libro con las propiedades especificadas
const libro = {
  ISBN: "",
  titulo: "",
  autor: "",
  numPaginas: 0,

  // Creo un método para cargar un libro
  cargarLibro: function () {
    this.ISBN = prompt("Ingrese el ISBN");
    this.titulo = prompt("Ingrese el título");
    this.autor = prompt("Ingrese el autor");
    this.numPaginas = parseInt(prompt("Ingrese el n° de páginas"));
  },

  // Creo un método para informar los datos del libro
  informarDatos: function () {
    console.log(`ISBN: ${this.ISBN}
    Título: ${this.titulo}
    Autor: ${this.autor}
    N° de páginas: ${this.numPaginas}`);
  }
};

// Llamo al método cargarLibro para que el usuario ingrese los datos del libro
libro.cargarLibro();

// Llamo al método informarDatos para que se muestren los datos del libro
libro.informarDatos();