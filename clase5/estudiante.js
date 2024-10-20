document.getElementById('formulario').addEventListener('submit', ()=> {
  let nombre = document.getElementById('nombre').value
  let ci = document.getElementById('ci').value
  let cel = document.getElementById('cel').value
})
class Estudiante {
  #nombre
  #ci
  #cel

  constructor(nombre, ci, cel){
    this.#nombre = nombre
    this.#ci = ci
    this.#cel = cel
  }
  getNombre() {
    return this.#nombre
  }
  setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre
  }
  getCI() {
    return this.#ci
  }
  setCI(nuevoCI) {
      this.#ci = nuevoCI
  }
  getCel() {
    return this.#cel
  }
  setCel(nuevoCel) {
      this.#cel = nuevoCel
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.#nombre}, CI: ${this.#ci}, Celular: ${this.#cel}`)
  }
}

// Instanciar clase
const estudiante1 = new Estudiante('Juan', '12467', '78945612')
estudiante1.mostrarInfo()
estudiante1.setCI('1234567')
estudiante1.mostrarInfo()
