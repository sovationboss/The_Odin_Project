const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose your weapon:").toLowerCase(); 
let playerCount = 0;
let computerCount = 0;

function getComputerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];
    return randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function oneGame (playerSelection, computerSelection){

    if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"){
            let result = "You win! " + playerSelection + " beats " + computerSelection + ".";
            playerCount =+1;   
            return result;
        } else if (
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock"){
            let result = "You lose! " + computerSelection + " beats " + playerSelection + ".";
            computerCount =+1;
            return result;
        } else {
            let result = "Tie!";
            return result;
        }
    }

console.log("Player selected:", playerSelection);
console.log("Computer selected:", computerSelection);
console.log(oneGame(playerSelection, computerSelection));
console.log(playerCount, computerCount);
