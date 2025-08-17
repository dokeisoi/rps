let cpuChoice = Math.random();

if (cpuChoice <= 0.33) {
    console.log("Rock");
} else if (cpuChoice >= 0.33 && cpuChoice <= 0.66) {
    console.log("Paper");
} else {
    console.log("Scissors");
}
