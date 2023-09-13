let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];
    return randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function checkWinner(playerSelection, computerSelection){
    if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"){
            return "player";
        } else if (
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock"){
            return "computer";
        } else {
            return "tie"; 
        }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "player"){
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else if (result === "computer"){
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }else if (result === "tie")
        return "Tie!"
}

function game(){
    for(let i = 0; i <= 4; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose your weapon:").toLowerCase(); 
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore + " : " + computerScore);
    }
}

game();
