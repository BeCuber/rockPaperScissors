/* #### juego 5 rondas de piedra, papel, tijeras contra la máquina ####*/

//Defino las variables de puntuación fuera del resto de funciones, para que puedan acceder a ellas
let playerScore = 0;
let computerScore = 0;

//defino la función de una ronda, con las funciones de selección de opción dentro, para que también se repitan a la hora de repetir la ronda
function playRound(playerSelection, computerSelection) {

    //se define cómo se genera la opción del PC de forma aleatoria de entre un array
    function getComputerChoice(){
        const options = ["paper", "rock", "scissors"]
        let n = Math.floor(Math.random()*options.length);
        return options[n];
    }
    //se define un prompt para pedir una opción al jugador
    function getPlayerChoice(){
        let playerAnswer = prompt("Choose your weapon: Rock, Paper or Scissors");
        if ((playerAnswer === "" || playerAnswer === null || playerAnswer === undefined)){
            alert("It's okay, we'll play later!");
        }else if (!(playerAnswer.toLowerCase() === "paper" || playerAnswer.toLowerCase() === "rock" || playerAnswer.toLowerCase() === "scissors")){
            alert("Reload and try again!");
        }else{
            return playerAnswer.toLowerCase();
        }
    }

    //se almacenan las elecciones en las variables que se le pasa a la función playRound()
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    
    //se definen las condiciones en que el jugador gana, y se le suma un punto
    if ((playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "paper")){
        alert(`${playerSelection} beats ${computerSelection}. You won this round!`);
        playerScore++;
    //si eligen lo mismo no se suma puntuación
    }else if (playerSelection === computerSelection){
        alert(`You and I choosed ${computerSelection}! We tied this round!`);       
    //si no cumple condiciones de empate o victoria es que pierde, se suma un punto al PC
    }else{
        alert(`${computerSelection} beats ${playerSelection}. You lost this round!`);
        computerScore++;
    }

    //se imprime en cada ronda lo que ha elegido cada uno y qué puntuación llevan
    console.log("Tu: " + playerSelection);
    console.log("Tu: " + playerScore);
    console.log("PC: " + computerSelection);
    console.log("PC: " + computerScore);
}

//se define la función principal que repetirá con un for 5 rondas de playRound()
function Game(){

    for (let i=0; i<5; i++){
        playRound();
    }
    //al final muestra la puntuación de cada uno
    console.log(`Your score is ${playerScore} and mine is ${computerScore}`);

    //muestra un mensaje declarando al vencedor
    if (playerScore > computerScore){
        console.log("You won!");
    }else if(playerScore === computerScore){
        console.log("We tied!");
    }else{
        console.log("You lost!");
    }
}

Game();



