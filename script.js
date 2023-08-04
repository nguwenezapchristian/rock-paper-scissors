let computerChoice = ["Rock", "Paper", "Scissors"];
let score = 0;

function getComputerChoice(computerChoice) {
    let randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let playerSelection1 = playerSelection.toLowerCase();
    let computerSelection1 = computerSelection.toLowerCase();
    
    if (computerSelection1 === "rock" && playerSelection1 === "rock") {
        return "Play again! Your choices were the same";
    } else if (computerSelection1 === "paper" && playerSelection1 === "rock") {
        score--;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection1 === "scissors" && playerSelection1 === "rock") {
        score++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return "Invalid choice! Please choose either Rock, Paper, or Scissors.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your choice?").trim();
        const computerSelection = getComputerChoice(computerChoice);
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (score > 0) {
        console.log(`You Won! with a score of ${score}`);
    } else if (score < 0) {
        console.log(`You Lose! with a score of ${score}`);
    } else {
        console.log("It's a tie! No one wins.");
    }
}

game();
