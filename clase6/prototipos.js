// Clase base: Animal
function Animal(nombre){
  this.nombre = nombre
}

Animal.prototype.sonido = function() {
  console.log(`${this.nombre} hace un sonido`)
}

// Clase derivada: Perro
function Perro(nombre, raza) {
  Animal.call(this, nombre) //Llama al constructor de Animal
  this.raza = raza
}

// Establecer herecia mediante prototipo
Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro

Perro.prototype.sonido = function() {
  console.log(`${this.nombre} ladra`)
}

// Metodo adicional
Perro.prototype.obtenerRaza = function(){
  console.log(`La raza de ${this.nombre} es ${this.raza}`)
}

// Creacion de instancias
let miAnimal = new Animal('Mamifero')
miAnimal.sonido()

let miPerro = new Perro('Boby', 'Pitbull')
miPerro.obtenerRaza()
miPerro.sonido()