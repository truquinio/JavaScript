/*
Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:

area = PI * radio2
perimetro = 2 * PI * radio
*/

alert("Área y perímetro de ○")

// Constante que representa el número PI
const PI = 3.14159265358979323846;

// Solicita al usuario que ingrese el radio de una circunferencia
var radio = parseFloat(prompt("Ingrese el valor del radio de una circunferencia"));

// Calcula el área de la circunferencia
var area = PI * Math.pow(radio, 2); // Math.pow = potencia de un número

// Calcular el perímetro de la circunferencia
var perimetro = 2 * PI * radio;

// Mostrar los resultados por pantalla
console.log("El área de la circunferencia es: " + area);
console.log("El perímetro de la circunferencia es: " + perimetro);
