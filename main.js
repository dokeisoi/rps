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

function playRound() {
    let userChoice = getUserChoice();
    let cpuChoice = getComputerChoice();
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
    cpuScore += (result === 0 ) ? 1
    : (result === 2) ? 0.5
    : 0 
    console.log((result === 1) ? "You win" : (result === 2) ? "Draw" : "You lose")
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Your score is ${userScore} and the CPU score is ${cpuScore}`)
    console.log((userScore > cpuScore) ? "You are the winner" : (userScore < cpuScore) ? "You lost. Try again next time!" : "Draw!")
}

playGame();
