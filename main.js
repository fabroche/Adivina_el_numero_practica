function main() {

    // DOM elements
    const welcomeMsgElement = document.getElementById('welcomeMsg')
    const usernameElement = document.getElementById('username')
    const startButtonElement = document.getElementById('startButton')
    const displayedPlayerNumberElement = document.getElementById('displayedPlayerNumber')
    const displayedSecretNumberElement = document.getElementById('displayedSecretNumber')
    const boardElement = document.getElementById('board')
    const lifeCounterElement = document.getElementById('lifeCounter')

    //Register
    let username = prompt("Elige un nombre de usuario")
    // const username = 'Testing'

    // Validando username
    do {
        if (!username || username === null) {
            alert('Por favor introduce un nombre de usuario válido')
            username = prompt("Elige un nombre de usuario")
        }
    }
    while (!username || username === null);

    // imprimiendo username en mensaje de bienvenida
    welcomeMsgElement.style.display = 'block'
    usernameElement.innerText = `${username}`

    // Iniciando animacion del LifeCounter
    lifeCounterElement.classList.add('heartBeats')

    // Contador de vidas del jugador
    let lifeCounter = 2

    // Funcion para iniciar el juego
    function startGame() {

        // Mostrando el board
        boardElement.classList.remove('hidden')
        boardElement.classList.add('flex')

        // Modificando el boton Start => Restart
        startButtonElement.innerText = 'Restart 💫'
        startButtonElement.classList.add('startButton-Restart')

        // Algoritmo del juego
        // Start

        // Generando el numero secreto
        const numeroSecreto = Math.floor(Math.random() * 10 + 1)

        // Obteniendo el número del jugador
        let numeroJugador = prompt("Adivina el numero entre secreto entre el 1 al 10")

        // Validando numero del jugador
        do {
            if (numeroJugador < 1 || numeroJugador > 10) {
                alert('Tu Número está fuera de rango')
                numeroJugador = prompt("Adivina el numero entre secreto entre el 1 al 10")
            }
        }
        while (numeroJugador < 1 || numeroJugador > 10);

        // Convirtiendo a entero el numero del jugador
        numeroJugador = parseInt(numeroJugador)

        // Imprimiendo en pantalla el numero que elegio el jugador
        displayedPlayerNumberElement.innerText = `${numeroJugador}`

        // Imprimiendo en pantalla el numero secreto
        displayedSecretNumberElement.innerText = `${numeroSecreto}`

        // Actualizando las vidas
        lifeCounterFunc()

        setTimeout(gameOver, 300)

        setTimeout(gameWin, 300)


        // Mis funciones
        function lifeCounterFunc() {

            if (numeroJugador !== numeroSecreto && lifeCounter > -1) {

                lifeCounterElement.children[lifeCounter].classList.add('hidden')
                lifeCounter--

            }
        }

        function restartGame(isWinner) {

            isWinner
                ? alert('You Win Madafaka !!! 😎👉👉')
                : alert('Game over !!! 🥱')

            lifeCounter = 2

            // Reiniciando las vidas
            for (let child of lifeCounterElement.children) {
                child.classList.remove('hidden')
            }

            // Ocultando el board
            boardElement.classList.remove('flex')
            boardElement.classList.add('hidden')

            // Modificando el boton Restart => Start
            startButtonElement.innerText = 'Start 🚀'
            startButtonElement.classList.remove('startButton-Restart')
        }

        // Game Over
        function gameOver() {
            if (lifeCounter === -1) {
                restartGame(false)
            }
        }

        // Player Wins
        function gameWin() {
            if (numeroJugador === numeroSecreto) {
                restartGame(true)
            }
        }
    }


    // Agregando el EventListener al boton Start
    startButtonElement.addEventListener('click', startGame)

}

// Evento para ejecutar la app cuando se recargue la web
document.addEventListener('DOMContentLoaded', main)
