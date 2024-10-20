class Animal {
  hacerSonido() {
    console.log('El animal hace un sonido')
  }
}
class Perro extends Animal {
  hacerSonido() {
    console.log('El perro ladra: ¡Guau!')
  }
}
class Gato extends Animal {
  hacerSonido() {
    console.log('El gato maulla: ¡Miau!')
  }
}
function hacerSonidoAnimal(animal) {
  animal.hacerSonido()
}

const miPerro = new Perro()
const miGato = new Gato()

// Invocar el mismo metodo con diferentes comportamientos
hacerSonidoAnimal(miPerro)
hacerSonidoAnimal(miGato)