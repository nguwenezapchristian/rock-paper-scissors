let computerChoice = ["Rock", "Paper", "Scissors"];
function getComputerChoice(computerChoice) {
    let randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}
function playRound(playerSelection, computerSelection) {
    let playerSelection1 = playerSelection.toLowerCase();
    let computerSelection1 = computerSelection.toLowerCase();
    if (computerSelection1 === "rock" && playerSelection1 === "rock") {
        return "Play again! your choices were the same";
    } else if(computerSelection1 === "paper" && playerSelection1 === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection1 === "scissors" && playerSelection1 === "rock") {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
}
const playerSelection = prompt("What's your choice?");
const computerSelection = getComputerChoice(computerChoice);

function game() {
   let score = 0;
   for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
   } 
}