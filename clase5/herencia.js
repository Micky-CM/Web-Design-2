class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }
  mover() {
    console.log(`${this.nombre} se mueve`)
  }
}

// Clase derivada o hija
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre)
    this.raza = raza
  }
  mover(){
    console.log(`${this.nombre} corre`)
  }
}

// Instanciar
const perro1 = new Animal('Boby', 'Terrier')
perro1.mover()