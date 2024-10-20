// Definición de la clase coche
class Coche{
  constructor(modelo, marca, año){
    this.modelo = modelo
    this.marca = marca
    this.año = año
    this._velocidad = 0
  }
  // Método público para acelerar
  acelerar(){
    this._velocidad += 10
    console.log(`El coche alelera. Velocidad: ${this._velocidad} Km/h`);
  }
  // Método público para frenar
  frenar(){
    this._velocidad -= 10
    if(this._velocidad < 0) this._velocidad = 0
    console.log(`El coche frena. Velocidad: ${this._velocidad} Km/h`);
  }
  // Método público para mostrar información del coche
  mostrarInfo(){
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Año: ${this.año}`);
  }
  // Método privado para mostrar información del coche
  _ajustarMotor(){
    console.log('El motor esta ajustado para la velocidad');
  }
}

// Uso de la clase coche
const miCoche = new Coche('Toyota', 'Corolla', 2024)
const miCoche2 = new Coche('Susuki', 'APV', 2020)

miCoche.mostrarInfo()
miCoche.acelerar()
miCoche.frenar()
