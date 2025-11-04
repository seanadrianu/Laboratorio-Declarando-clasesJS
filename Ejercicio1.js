//Ejercicio 1: Sistema básico de vehículos
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
}
class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
  }
}
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }
  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
  }
}
const coche1 = new Coche("Kia", "Picanto", 2021, 4);
const coche2 = new Coche("Chevrolet", "Onix", 2021, 4);
const moto1 = new Moto("AKT", "AK125 NKD EIII", 2022, 321);
const moto2 = new Moto("Yamaha", "NMAX 155", 2022, 321);
console.log(coche1.obtenerDetalles());
console.log(coche2.obtenerDetalles());
console.log(moto1.obtenerDetalles());
