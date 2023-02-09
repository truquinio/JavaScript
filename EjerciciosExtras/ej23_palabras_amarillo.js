/*
Resalte todas las palabras de más de 8 caracteres en el texto del párrafo 
(con un fondo amarillo).
*/

// Obtengo el elemento del párrafo
let parrafo = document.getElementById("texto");

// Separo las palabras en un array
let palabras = parrafo.innerHTML.split(" ");

// Recorro cada palabra y si tiene más de 8 caracteres la resalto
for (var i = 0; i < palabras.length; i++) {
  
  if (palabras[i].length > 8) {
    palabras[i] = "<span class='amarillo'>" + palabras[i] + "</span>";
  }
}

// Junto las palabras resaltadas en un nuevo string
parrafo.innerHTML = palabras.join(" ");