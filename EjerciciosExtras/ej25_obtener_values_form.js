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
  var form = document.getElementById("form1");

  // Obtengo los valores de nombre y apellido
  var nombre = form.elements.nombre.value;
  var apellido = form.elements.apellido.value;

  // Muestro los valores en una alerta
  alert("Nombre: " + nombre + "\nApellido: " + apellido);
}