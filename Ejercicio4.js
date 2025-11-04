// Ejercicio 4: Sistema de figuras geométricas
class Figura {
  constructor(color) {
    this.color = color;
  }
  area() {
    return 0;
  }
}
class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }
  area() {
    return this.base * this.altura;
  }
}
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }
  area() {
    return Math.PI * this.radio ** 2;
  }
}
const rect = new Rectangulo("Rojo", 6, 14);
const circ = new Circulo("Azul", 13);
console.log(`Área rectángulo: ${rect.area()}`);
console.log(`Área círculo: ${circ.area().toFixed(3)}`);
