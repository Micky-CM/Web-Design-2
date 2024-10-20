document.getElementById('form').addEventListener('submit', (e)=> {
  e.preventDefault()
  let n = parseInt(document.querySelector('#num').value)

  let resultado = imprimirNumeros(n)
  document.querySelector('#message').innerHTML = resultado
})

function imprimirNumeros(n) {
  let numeros = []

  for (let i = 1; i <= n; i++) {
    if (i%2===0) {
      numeros.push(i)
    } else if (i%3===0) {
      numeros.push(i)
    } else if (i%5===0) {
      numeros.push(i)
    }
  }
  return numeros
}