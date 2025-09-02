const r = "Rock";
const p = "Paper";
const s = "Scissors";

let userScore = 0;
let cpuScore = 0;
let cpuChoice = '';

const userScoreDisplay = document.querySelector('#user-score');
const cpuScoreDisplay = document.querySelector('#cpu-score');
const cpuSelectionDisplay = document.querySelector('#cpu-selection');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', async () => {
    playRound('Rock');
    userScoreDisplay.textContent = `Your score: ${userScore}`;
    cpuScoreDisplay.textContent = `CPU score: ${cpuScore}`;
    cpuSelectionDisplay.textContent = `CPU chose ${cpuChoice}`;
    checkWinner();
});

paper.addEventListener('click', async () => {
    playRound('Paper');
    userScoreDisplay.textContent = `Your score: ${userScore}`;
    cpuScoreDisplay.textContent = `CPU score: ${cpuScore}`;
    cpuSelectionDisplay.textContent = `CPU chose ${cpuChoice}`;
    checkWinner();
});

scissors.addEventListener('click', async () => {
    playRound('Scissors');
    userScoreDisplay.textContent = `Your score: ${userScore}`;
    cpuScoreDisplay.textContent = `CPU score: ${cpuScore}`;
    cpuSelectionDisplay.textContent = `CPU chose ${cpuChoice}`;
    checkWinner();
});

function checkWinner() {
    if (userScore >= 2.5 && cpuScore >= 2.5) { 
        cpuSelectionDisplay.textContent = `DRAW`;
        userScore = 0;
        cpuScore = 0;
    } else if (userScore >= 2.5) {
        cpuSelectionDisplay.textContent = `You win! Yeay!`;
        userScore = 0;
        cpuScore = 0;
    } else if (cpuScore >= 2.5) {
        cpuSelectionDisplay.textContent = `You lose! Boo-hoo!`;
        userScore = 0;
        cpuScore = 0;
    }
}

function getComputerChoice() {
    let choiceSelector = Math.random();
    let cpuChoice = (choiceSelector <= 0.333)
        ? r
        : (choiceSelector >= 0.333 && choiceSelector <= 0.666)
        ? p
        : s
    return cpuChoice;
}

function playRound(input) {
    let userChoice = input;
    cpuChoice = getComputerChoice();
    let result = (userChoice === cpuChoice) ? 2
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

    console.log((result === 1) ? `You win. Computer chose ${cpuChoice}`
    : (result === 2) ? `Draw. Computer chose ${cpuChoice}`
    : `You lose. Computer chose ${cpuChoice}`)
}