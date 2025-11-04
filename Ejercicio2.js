// Ejercicio 2: Sistema de empleado
class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }
  calcularSalario() {
    return this.salarioBase;
  }
}
class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }
  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}
class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }
  calcularSalario() {
    return this.salarioBase;
  }
}
const gerente = new Gerente("Richard", 43, 3000000, 3000000);
const dev = new Desarrollador("Sean", 25, 3000000, "JavaScript");
console.log(`${gerente.nombre}: $${gerente.calcularSalario()}`);
console.log(`${dev.nombre}: $${dev.calcularSalario()}`);
