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
    let userChoice = prompt("Choose: ");
    return userChoice;
}
