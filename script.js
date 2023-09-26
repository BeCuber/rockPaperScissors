/* #### juego 5 rondas de piedra, papel, tijeras contra la máquina ####*/

//Defino las variables de puntuación fuera del resto de funciones, para que puedan acceder a ellas
let playerScore = 0;
let computerScore = 0;
result.textContent = "Get 5 points to beat the machine"

//Selecciona los botones de las opciones
let playerOptions = document.querySelectorAll("#weapons button");

//Añade listener al click e inicia el juego
for (let i=0; i<playerOptions.length;i++){
    playerOptions[i].addEventListener("click", playGame);
};

//Definición de función juego
function playGame(e){
    getPlayerChoice(e);
    getComputerChoice();
    checkWinner(playerSelection, computerSelection);
};


//Opción que escoge el jugador

let playerSelection;
function getPlayerChoice(e){

    //segun el id del botón que pincha
    playerSelection = e.target.getAttribute("id");

    //muestra el icono elegido en su ficha
    imgSel(playerSelection, imgPlayer);
    outputPlayerSel.appendChild(imgPlayer);
};

//Función que selecciona la opción del PC de forma aleatoria:

let computerSelection;
function getComputerChoice(){

    //declara un array con las opciones 
    const options = ["paper", "rock", "scissors"]
    //calcula un entero aleatorio entre 0 y 2
    let n = Math.floor(Math.random()*options.length);
    //se almacena la opcion con el índice calculado
    computerSelection = options[n];

    //muestra el icono calculado en su ficha
    imgSel(computerSelection, imgComputer);
    outputPCSel.appendChild(imgComputer);
};

//Imagen de la opción escogida
//1ª variable la selección del jugador, 2ª dónde lo almacena

let imgPlayer = document.createElement("img");
let imgComputer = document.createElement("img");

function imgSel(sel, img){
    img.src = "";
    if (sel === "rock"){
        img.src = "/images/piedra.png";
        img.alt = "rock";
    }else if (sel === "paper"){
        img.src = "/images/papel.png";
        img.alt = "paper";
    }else if (sel === "scissors"){
        img.src = "/images/tijera.png";
        img.alt = "scissors";
    };
    return img;
};


//Acceso a las fichas de los jugadores
let outputPCScore = document.getElementById("computerScore");
let outputPlayerScore = document.getElementById("playerScore");
let outputPCSel = document.getElementById("computerSel");
let outputPlayerSel = document.getElementById("playerSel");


//Condiciones en que el jugador gana
function checkWinner(){

    //Hasta que alguno llegue a 5 puntos
    while (playerScore < 5 && computerScore < 5){

        //condiciones en que player gana
        if ((playerSelection === "paper" && computerSelection === "rock")
            || (playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "paper")){
            result.textContent = `You won this round!`;
            //se le añade un punto
            playerScore++;

        //empate, no se suma
        }else if (playerSelection === computerSelection){
            result.textContent = `We tied this round!`;

        //si no gana o empata
        }else{
            result.textContent = `You lost this round!`;
            //se suma un punto al PC
            computerScore++;
        };

        //Se añade la puntuación como texto a sus fichas
        outputPCScore.textContent = `${computerScore}`;
        outputPlayerScore.textContent = `${playerScore}`;      

        //sale del bucle para dejar elegir otra vez
        break;
    };

    if(playerScore == 5 || computerScore == 5){
        if (playerScore == 5){
            result.textContent = "YOU DEFEATED THE MACHINES"
            outputPlayerSel.style.background = "lightgreen";
            outputPCSel.style.background = "palevioletred";
        }else{
            result.textContent = "MACHINES BEATS HUMANS";
            outputPlayerSel.style.background = "palevioletred";
            outputPCSel.style.background = "lightgreen";
        };
        restart();
    }
    
};


//reinicio de variables
function restart(){
    playerScore = 0;
    computerScore = 0;
    imgPlayer.remove();
    imgComputer.remove();
}






