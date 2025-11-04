// Ejercicio 5: Sistema de animales
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {
    return "...";
  }
}
class Perro extends Animal {

  emitirSonido() {
    return "¡Guau guau!";
  }
}
class Gato extends Animal {
  emitirSonido() {
    return "¡Miau!, ¡Mew!";
  }
}
const perro = new Perro("Paco", 6);
const gato = new Gato("Link", 3);
console.log(`${perro.nombre}: ${perro.emitirSonido()}`);
console.log(`${gato.nombre}: ${gato.emitirSonido()}`);
