const r = "rock";
const p = "paper";
const s = "scissors";

let userScore = 0;
let cpuScore = 0;

function getComputerChoice() {
    let choiceSelector = Math.random();
    let cpuChoice = (choiceSelector <= 0.333)
        ? r
        : (choiceSelector >= 0.333 && choiceSelector <= 0.666)
        ? p
        : s
    return cpuChoice;
}

function getUserChoice() {
    let userChoice = prompt("Choose: ").toLowerCase();
    return userChoice;
}

function playRound() {
    let userChoice = getUserChoice();
    let cpuChoice = getComputerChoice();
    let result = (userChoice === cpuChoice) ? 0.5
    : (userChoice === r && cpuChoice === s) ||
    (userChoice === p && cpuChoice === r) ||
    (userChoice === s && cpuChoice === p) ? 1
    : 0
    
    userScore += (result === 1) ? 1
    : (result === 2 ) ? 0.5
    : 0
    
    cpuScore += (result === 0 ) ? 1
    : (result === 2) ? 0.5
    : 0 
    console.log((result === 1) ? "You win" : (result === 2) ? "Draw" : "You lose")
}