function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();
    if (player === "rock" && computer === "scissors") {
        return [1, "You Win! Rock beats Scissors"];
    } else if (player === "paper" && computer === "rock") {
        return [1, "You Win! Paper beats Rock"];
    } else if (player === "scissors" && computer === "paper") {
        return [1, "You Win! Scissors beats Paper"];
    } else if (player === "rock" && computer === "paper") {
        return [-1, "You Lose! Paper beats Rock"];
    } else if (player === "paper" && computer === "scissors") {
        return [-1, "You Lose! Scissors beats Paper"];
    } else if (player === "scissors" && computer === "rock") {
        return [-1, "You Lose! Rock beats Scissors"];
    } else if (player === "rock" && computer === "rock") {
        return [0, "You Tied!"];
    } else if (player === "paper" && computer === "paper") {
        return [0, "You Tied!"];
    } else if (player === "scissors" && computer === "scissors") {
        return [0, "You Tied!"];
    } 
}

function game() {
    var score = 0;
    for (var i = 0; i < 5; i++) {
        var computer = computerPlay();
        var player = prompt("Rock, Paper, or Scissors?:");
        var results = playRound(player, computer);
        score += results[0];
        console.log(results[1]);
    } 
    switch (true) {
        case (score < 0):
            console.log("Game Over. You Lost.");
            break;
        case (score > 0):
            console.log("Game Over. You Won!");
            break;
        default:
            console.log("Game Over. You Tied!");
            break;
    }
}

game();