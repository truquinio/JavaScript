/*
Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.
*/

alert("Calcular el área y el perímetro de un objeto Círculo con la propiedad radio");

// Creo un objeto Círculo
const circulo = {
  radio: 0,

  // Creo un método para calcular el área del círculo
  calcularArea: function () {
    return Math.PI * Math.pow(this.radio, 2);
  },

  // Creo un método para calcular el perímetro del círculo
  calcularPerimetro: function () {
    return 2 * Math.PI * this.radio;
  }
};

// Pido al usuario que ingrese el radio del círculo
circulo.radio = parseFloat(prompt("Ingrese el radio del círculo"));

// Llamo a los métodos para calcular el área y el perímetro
const area = circulo.calcularArea();
const perimetro = circulo.calcularPerimetro();

// Imprimo los resultados
console.log(`El área del círculo es: ${area}`);
console.log(`El perímetro del círculo es: ${perimetro}`);