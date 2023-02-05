/*
Resalte todas las palabras de más de 8 caracteres en el texto del párrafo 
(con un fondo amarillo).
*/

// Obtengo el elemento del párrafo
var parrafo = document.getElementById("texto");

// Separo las palabras en un array
var words = parrafo.innerHTML.split(" ");

// Recorro cada palabra y si tiene más de 8 caracteres la resalto
for (var i = 0; i < words.length; i++) {
  
  if (words[i].length > 8) {
    words[i] = "<span class='amarillo'>" + words[i] + "</span>";
  }
}

// Junto las palabras resaltadas en un nuevo string
parrafo.innerHTML = words.join(" ");