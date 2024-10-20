class Persona {
  // Definir una propiedad privada con #
  #nombre
  #edad

  constructor(nombre, edad){
    this.#nombre = nombre
    this.#edad = edad
  }
  // Método público para acceder a la propiedad nombre
  getNombre() {
    return this.#nombre
  }
  // Método público para modificar a la propiedad nombre
  setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre
  }
  // Método público para acceder a la propiedad edad
  getEdad() {
    return this.#edad
  }
  // Método público para modificar a la propiedad edad
  setEdad(nuevaEdad) {
    if(nuevaEdad>=0) {
      this.#edad = nuevaEdad
    } else {
      console.log('La edad no puede ser negativa')
    }
  }
  // Método público para modificar a la propiedad edad
  mostrarInfo() {
    console.log(`Nombre: ${this.#nombre}, edad: ${this.#edad} años`)
  }
}

// Instanciar clase
const persona1 = new Persona('Juan', 30)
persona1.mostrarInfo()
persona1.setNombre('Carlos')
persona1.setEdad('35')
persona1.mostrarInfo()
