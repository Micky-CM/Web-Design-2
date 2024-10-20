const juego = document.getElementById('juego')
const jugador = document.getElementById('jugador')
const recompensa = document.getElementById('recompensa')
const oponente = document.getElementById('oponente')
const puntaje = document.getElementById('puntaje')
const bienvenidaModal = document.getElementById('bienvenida')
const finJuegoModal = document.getElementById('fin-juego')
const iniciarJuegoBtn = document.getElementById('iniciarJuego')
const reiniciarJuegoBtn = document.getElementById('reiniciarJuego')

let puntos = 0
let juegoTerminado = true

// Función para iniciar el juego
function iniciarJuego() {
  bienvenidaModal.classList.add('hidden')
  juegoTerminado = false
  puntos = 0
  puntaje.textContent = puntos
  moverObjetivo()
  moverOponente()
}

// Función para reiniciar el juego
function reiniciarJuego() {
  finJuegoModal.classList.add('hidden')
  juegoTerminado = false
  puntos = 0
  puntaje.textContent = puntos
  moverObjetivo()
  moverOponente()
}

function moverJugador(event) {
  if(juegoTerminado) return // Si el juego termina no se realiza ninguna acción
  // Obteniendo el tamaño y la posición del contenedor
  const rect = juego.getBoundingClientRect()
  // Calculando la posición del jugador según la posición del mouse
  let x = event.clientX - rect.left - jugador.offsetWidth / 2
  let y = event.clientY - rect.top - jugador.offsetHeight / 2
 // Restringe la posición para que el jugador no salga del juego
  x = Math.max(0, Math.min(juego.clientWidth - jugador.clientWidth, x))
  y = Math.max(0, Math.min(juego.clientHeight - jugador.clientHeight, y))

  // Actualizando la posición del jugador en la pantalla
  jugador.style.left = `${x}px`
  jugador.style.top = `${y}px`

  verificarColision()
  verificarColisionOponente()
}

function moverObjetivo() {
  // Calcular una posición horizontal y vertical aleatoria
  const x = Math.floor(Math.random()*(juego.offsetWidth-recompensa.clientWidth))
  const y = Math.floor(Math.random()*(juego.offsetHeight-recompensa.clientHeight))
  // Actualizar la posición del recompensa
  recompensa.style.left = `${x}px`
  recompensa.style.top = `${y}px`
}

function moverOponente() {
  // Calcular una posición horizontal y vertical aleatoria
  const x = Math.floor(Math.random()*(juego.offsetWidth-40))
  const y = Math.floor(Math.random()*(juego.offsetHeight-35))
  // Actualizar la posición del oponente
  oponente.style.left = `${x}px`
  oponente.style.top = `${y}px`
}

function verificarColision() {
  // Obteniendo el área de colisión del jugador y recompensa
  const jugadorRect = jugador.getBoundingClientRect()
  const objetivoRect = recompensa.getBoundingClientRect()

  // Comprobar si las áreas del jugador y el recompensa se superponen
  if(
    jugadorRect.left < objetivoRect.left + objetivoRect.width &&
    jugadorRect.left + jugadorRect.width > objetivoRect.left &&
    jugadorRect.top < objetivoRect.top + objetivoRect.height &&
    jugadorRect.top + jugadorRect.height > objetivoRect.top
  ) {
    puntos++
    puntaje.textContent = puntos
    moverObjetivo()
    moverOponente()
  }
}
function verificarColisionOponente() {
  const jugadorRect = jugador.getBoundingClientRect()
  const oponenteRect = oponente.getBoundingClientRect()

  if(
    jugadorRect.left < oponenteRect.left + oponenteRect.width &&
    jugadorRect.left + jugadorRect.width > oponenteRect.left &&
    jugadorRect.top < oponenteRect.top + oponenteRect.height &&
    jugadorRect.top + jugadorRect.height > oponenteRect.top
  ) {
    juegoTerminado = true
    finJuegoModal.classList.remove('hidden')
  }
}

juego.addEventListener('mousemove', moverJugador)
iniciarJuegoBtn.addEventListener('click', iniciarJuego)
reiniciarJuegoBtn.addEventListener('click', reiniciarJuego)

// Al cargar la página, mostrar el modal de bienvenida
window.onload = () => {
  bienvenidaModal.classList.remove('hidden')
}