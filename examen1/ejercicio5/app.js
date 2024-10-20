document.getElementById('form').addEventListener('submit', (e)=> {
  e.preventDefault()
  let n = parseInt(document.querySelector('#num').value)

  let resultado = serieFibonacci(n)
  document.querySelector('#message').innerHTML = resultado.join(', ')
})

function serieFibonacci(n) {
  let fibonacci = [0, 1]

  if (n === 1) {
    return [0]
  }
  if (n === 2) {
    return fibonacci
  }

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
  }
  return fibonacci
}
