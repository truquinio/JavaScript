//console custom
const spacing = '10px';
const styles = `padding: ${spacing}; background-color: black; color:
yellow; font-style:
italic; border: 1px solid black; font-size: 2em;`;
console.log('%cEGG', styles);

//  VARIABLES EN JAVASCRIPT (VAR vs LET)
function varPrueba() {
  var x = 31;
  if (true) {
    var x = 71; // Misma variable!
    console.log(x); // Imprime el valor 71
  }
  console.log(x); // Imprime el valor 71
}
function letPrueba() {
  let x = 31;
  if (true) {
    let x = 71; // variable diferente
    console.log(x); // Imprime el valor 71
  }
  console.log(x); // Imprime el valor 31
}

//  CONST
const PI = 3.141592653589793;
PI = 3.14; // Esto dará un error
PI = PI + 10; // Esto también dará un error

//  TEMPLATE STRINGS
var nombre = 'Miguel Angel';
var apellidos = 'Alvarez'
var profesion = 'desarrollador';
var perfil = `<b>${nombre} ${apellidos}</b> es ${profesion}`;

var suma = `45 + 832 = ${45 + 832}`; 
// O bien algo como esto:
var operando1 = 7;
var operando2 = 98;

var multiplicacion = `La multiplicación entre ${operando1} y ${operando2}
equivale a ${operando1 * operando2}`;


//  SALTOS DE LÍNEA DENTRO DE CADENAS
var textoLargo = "esto es un texto\ncon varias líneas";

var textoLargo = `esto es un texto
con varias líneas`;