function computerSelection() {
    const moves = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playerSelection(e) {
    button = e.target;
    if (!button) return;
    return button.getAttribute('class');
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    var computer = computerSelection().toLowerCase();
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

function keepScore(num) {
    if (num > 0) playerScore += 1;
    if (num < 0) computerScore += 1;
    scoreNum.textContent = `You: ${playerScore} Machine: ${computerScore}`;
    if (playerScore === 5) {
        scoreNum.textContent = 'Congrats! You beat the Machine!';   
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        scoreNum.textContent = 'Sorry, You\'ve been out played. Try again?';   
        playerScore = 0
        computerScore = 0
    }
}





const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const result = document.createElement('div');
const score = document.createElement('div');
const resultText = document.createElement('p');
const scoreNum = document.createElement('p');
result.classList.add('result');
score.classList.add('score');
result.appendChild(resultText);
score.appendChild(scoreNum);
body.appendChild(result);
body.appendChild(score);


let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let result = playRound(playerSelection(e), computerSelection);
        resultText.textContent = result[1];
        keepScore(result[0]);
    });
});
