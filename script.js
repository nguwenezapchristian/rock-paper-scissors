function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Rock") {
        return "Play again! your choices were the same";
    } else if(computerSelection === "Paper" && playerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "Scissors" && playerSelection)
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);