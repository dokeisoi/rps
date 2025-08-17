function getComputerChoice () {
    let choiceSelector = Math.random();
    let cpuChoice = (choiceSelector <= 0.333)
        ? "Rock"
        : (choiceSelector >= 0.333 && choiceSelector <= 0.666)
        ? "Paper"
        : "Scissors"
    return cpuChoice;
}