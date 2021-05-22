function computerPlay() {
    const moves = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * moves.length);
    console.log(random, moves[random]);
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase;
    const computer = computerSelection.toLowerCase;
    if (player === "rock" && computer === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (player === "paper" && computer === "rock") {
        return "You Win! Paper beats Rock";
    } else if (player === "scissors" && computer === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (player === "rock" && computer === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (player === "paper" && computer === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (player === "scissors" && computer === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (player === "rock" && computer === "rock") {
        return "You Tied!";
    } else if (player === "paper" && computer === "paper") {
        return "You Tied!";
    } else if (player === "scissors" && computer === "scissors") {
        return "You Tied!";
    } 
}