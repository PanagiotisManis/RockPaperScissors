const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
let userScore = 0;
let computerScore = 0;

function playGame(e) {
  const userChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);
  displayResult(winner, userChoice, computerChoice);
  updateScore()
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
             userChoice === 'paper' && computerChoice === 'rock' ||
             userChoice === 'scissors' && computerChoice === 'paper') {
    return 'user';
  } else {
    return 'computer';
  }
}

function displayResult(winner, userChoice, computerChoice) {
  if (winner === 'tie') {
    result.innerHTML = `You both chose ${computerChoice}. It's a tie!`;
  } else if (winner === 'user') {
    userScore++;
    result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You win!`;
  } else {
    computerScore++;
    result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You lose!`;
  }
}

function updateScore() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
  }

choices.forEach(choice => choice.addEventListener('click', playGame));
