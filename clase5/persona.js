class Persona {
  constructor(nombre='', edad=0, dni=''){
    this._nombre = nombre
    this._edad = edad
    this._dni = dni
  }
  get nombre() {
    return this._nombre
  }
  set nombre(nombre) {
    if(typeof nombre==='string' && nombre.trim().lenghy>0) {
      this._nombre = nombre
    } else {
      console.log('Nombre no válido. Debe ser una cadena no vacía')
    }
  }
  get edad() {
    return this._edad
  }
  set edad(edad) {
    if(Number.isInteger(edad) && edad>=0) {
      this._edad = edad
    } else {
      console.log('Edad no válida. Debe ser un número entero positivo')
    }
  }
  get dni() {
    return this._dni
  }
  set dni(dni) {
    if(typeof dni==='string' && dni.trim().lenghy>0) {
      this._dni
    } else {
      console.log('DNI no válido. Debe ser una cadena no vacía')
    }
  }
  mostrarInfo() {
    console.log(`Nombre: ${this._nombre}, Edad: ${this._edad} años, DNI: ${this._dni}`)
  }
  mayorDeEdad(){
    if(this._edad>=18) {
      console.log(`${this._nombre} es mayor de edad`)
    } else {
      console.log(`${this._nombre} es menor de edad`);
    }
  }
}

// Instanciar clase
const persona1 = new Persona()
persona1.nombre = 'Juan'
persona1.edad = 27
persona1.dni = '6549'

persona1.mostrarInfo()
persona1.mayorDeEdad()
persona1.dni('654987')
persona1.edad('17')
persona1.mostrarInfo()
persona1.mayorDeEdad()

const persona2 = new Persona('Ana', 32 , '456123')
persona2.mostrarInfo()
persona2.mayorDeEdad()

