document.getElementById('form').addEventListener('submit', (e)=> {
  e.preventDefault()
  let frase = document.querySelector('#phrase').value
  let letra = document.querySelector('#letter').value

  let resultado = contarLetras(frase, letra)
  document.querySelector('#message').innerHTML = `La letra "${letra}" aparece ${resultado} veces en la frase`
})

function contarLetras(frase, letra) {
  let contador = 0
  for(let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra.toLowerCase()) {
      contador++
    }
  }
  return contador
}