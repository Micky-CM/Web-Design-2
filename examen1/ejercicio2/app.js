document.getElementById('form').addEventListener('submit', (e)=>{
  e.preventDefault()
  let a = parseFloat(document.querySelector('#a').value)
  let b = parseFloat(document.querySelector('#b').value)
  let c = parseFloat(document.querySelector('#c').value)

  let resultado = determinarTriangulo(a, b, c)
  document.querySelector('#message').innerHTML = resultado
})

function determinarTriangulo(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        return 'Los lados forman un triángulo Equilátero'
    }
    else if (a === b || b === c || a === c) {
        return 'Los lados forman un triángulo Isósceles'
    }
    else {
        return 'Los lados forman un triángulo Escaleno'
    }
  } else {
    return 'Los lados no forman un triángulo'
  }
}