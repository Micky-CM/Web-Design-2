document.getElementById('form').addEventListener('submit', (e)=> {
  e.preventDefault()
  let costo1 = parseFloat(document.querySelector('#costo1').value)
  let costo2 = parseFloat(document.querySelector('#costo2').value)
  let costo3 = parseFloat(document.querySelector('#costo3').value)

  let suma = sumarCostos(costo1, costo2, costo3)
  let total = totalAPagar(suma)

  document.querySelector('#sum').innerHTML = `Total a pagar sin descuento: Bs. ${suma.toFixed(2)} <br>`
  document.querySelector('#total').innerHTML = `Costo total aplicando el 15% de descuento: Bs. ${total.toFixed(2)}`
})

function sumarCostos(costo1, costo2, costo3) {
  return costo1 + costo2 + costo3
}
function totalAPagar(suma) {
  let descuento = suma * 0.15
  return suma - descuento
}