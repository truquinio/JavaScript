/*
Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.
*/

alert("Mostrar clima");

// 1. Solicita al usuario que ingrese estado de clima
var estadoClima = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");

// Muestra alerta del estado del clima
console.log("El día de hoy está " + estadoClima);