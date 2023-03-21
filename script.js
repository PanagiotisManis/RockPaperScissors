function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random()*3)
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase()
    const computerChoice = computerSelection.toLowerCase()

    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
               (playerChoice === "Paper" && computerChoice === "Rock") ||
               (playerChoice === "Scissors" && computerChoice === "Paper")){
                return `You win! ${playerChoice} beats ${computerChoice}`
               } else return `You lose! ${computerChoice} beats ${playerChoice}`
            
}

function game(){
    let playerScore = 0
    let computerScore = 0

    for (let i=0; i<5; i++){
        const playerSelection = prompt("Choose, Rock, Paper or Scissors :")
        const computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)
        console.log(result)

        if (result.includes("win")){
            playerScore = playerScore + 1
        } else if (result.includes("lose")){
            computerScore = computerScore + 1
        }
    }

    if (playerScore > computerScore){
        console.log(`You win, your score: ${playerScore}, computer score: ${computerScore}`)
    } else if (computerScore > playerScore){
        console.log(`You lose, your score: ${playerScore}, computer score: ${computerScore}`)
    } else {
        console.log(`It's a tie, your score: ${playerScore}, computer score: ${computerScore}`)
    }
}

game()