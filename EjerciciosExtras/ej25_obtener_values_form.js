/*
Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Obtener nombre y apellido de form </title>
</head><body>
<form id="form1" onsubmit="getFormValores()">
Nombre: <input type="text" name="nombre" value="David"><br>
Apellido: <input type="text" name="apellido" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>
*/

// Declaro la función getFormValores
function getFormValores() {
  
  // Obtengo el formulario por su id
  let form = document.getElementById("form");

  // Obtengo los valores de nombre y apellido
  let nombre = form.elements.nombre.value;
  let apellido = form.elements.apellido.value;

  // Muestro los valores en una alerta
  alert("Nombre: " + nombre + "\n Apellido: " + apellido);
}