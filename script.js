let computerChoices = ["rock", "paper", "scissor"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(computerChoices) {
    let randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}
const paperBtn = document.querySelector("#paper-btn");
const scissorBtn = document.querySelector("#scissor-btn");
const rockBtn = document.querySelector("#rock-btn");
const player = document.querySelector("#player-score");
const pc = document.querySelector("#computer-score");
const displayInfo = document.querySelector("#display-info");
const displayWinnerOnScreen = document.querySelector("#display-winner");

function displayWinner(winner) {
    if (winner === "player") {
        displayWinnerOnScreen.textContent = "Congratulations! You won the game!🦾";
    } else if (winner === "computer") {
        displayWinnerOnScreen.textContent = "Oops! Computer won the game!🙃";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayInfo.textContent = "PLAY AGAIN!";
    // displayWinnerOnScreen.textContent = "";
    updateScores();
}

function updateScores() {
    player.textContent = playerScore;
    pc.textContent = computerScore;

    if (playerScore === 5) {
        displayWinner("player");
        resetGame();
    } else if (computerScore === 5) {
        displayWinner("computer");
        resetGame();
    }
}

paperBtn.addEventListener('click', () => {
    switch(getComputerChoice(computerChoices)) {
        case "rock":
            playerScore++;
            displayInfo.textContent = "😀 Paper beats Rock";
            break;
        case "paper":
            displayInfo.textContent = "Play again! Your choices were the same";
            break;
        case "scissor":
            computerScore++;
            displayInfo.textContent = "😞 Scissor beats Paper";
            break;
        default:
            console.log("Try Again");
    }
    updateScores();
});

scissorBtn.addEventListener('click', () => {
    switch(getComputerChoice(computerChoices)) {
        case "rock":
            computerScore++;
            displayInfo.textContent = "😞 Rock beats Scissor";
            break;
        case "paper":
            playerScore++;
            displayInfo.textContent = "😀 Paper beats Scissor";
            break;
        case "scissor":
            displayInfo.textContent = "Play again! Your choices were the same";
            break;
        default:
            console.log("Try Again");
    }
    updateScores();
});
rockBtn.addEventListener('click', () => {
    switch(getComputerChoice(computerChoices)) {
        case "rock":
            displayInfo.textContent = "Play again! Your choices were the same";
            break;
        case "paper":
            computerScore++;
            displayInfo.textContent = "😞 Rock beats Scissor";
            break;
        case "scissor":
            playerScore++;
            displayInfo.textContent = "😀 Paper beats Rock";
            break;
        default:
            console.log("Try Again");
    }
    updateScores();
});

