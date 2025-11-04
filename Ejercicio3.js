//Ejercicio 3: Sistema de productos electrónicos
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }
  descripcion() {
    return `${this.nombre} (${this.marca}) - $${this.precio}`;
  }
}
class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }
  descripcion() {
    return `${super.descripcion()}, ${this.almacenamiento}GB, ${this.ram}GB RAM`;
  }
}
class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }
  descripcion() {
    return `${super.descripcion()}, ${this.procesador}, ${this.pulgadas}"`;
  }
}
const tel = new Telefono("Hot 40 pro", 650000, "Infinix", 256, 12);
const lap = new Laptop("AMD Ryzen 7 5000", 2400000, "Janus", "M2", 13.6);
console.log(tel.descripcion());
console.log(lap.descripcion());
