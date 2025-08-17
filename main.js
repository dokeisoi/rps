function getComputerChoice() {
    let choiceSelector = Math.random();
    let cpuChoice = (choiceSelector <= 0.333)
        ? "rock"
        : (choiceSelector >= 0.333 && choiceSelector <= 0.666)
        ? "paper"
        : "scissors"
    return cpuChoice;
}

function getUserChoice() {
    let userChoice = prompt("Choose: ").toLowerCase();
    return userChoice;
}

let userScore = 0;
let cpuScore = 0;

const userSelection = getUserChoice();
const cpuSelection = getComputerChoice();

function playRound(userChoice, cpuChoice) {
    let result = (userChoice === "rock" && cpuChoice === "paper") ? 0
    : (userChoice === "paper" && cpuChoice === "scissors") ? 0
    : (userChoice === "scissors" && cpuChoice === "rock") ? 0
    : (userChoice === "rock" && cpuChoice === "scissors") ? 1
    : (userChoice === "paper" && cpuChoice === "rock") ? 1
    : (userChoice === "scissors" && cpuChoice === "paper") ? 1
    : 2
    userScore += (result === 1) ? 1
    : (result === 2 ) ? 0.5
    : 0
    console.log((result === 1) ? "You win" : (result === 2) ? "Draw" : "You lose")
}

playRound(userSelection, cpuSelection);