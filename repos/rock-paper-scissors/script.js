let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return randomChoice = choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerInput(){
    let input = prompt("Choose Rock, Paper or Scissors:");
    while(input === null || input === ""){
        input = prompt("Must choose between Rock, Paper and Scissors:");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
        input = prompt("Must choose between Rock, Paper and Scissors:");
        while(input === null || input === ""){
            input = prompt("Must choose between Rock, Paper and Scissors:");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

const validateInput = (choice) => {
    return choices.includes(choice);
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
        const playerSelection = getPlayerInput();
        //prompt("Choose your weapon:").toLowerCase();
        console.log("player:", playerSelection); 
        console.log("computer:", computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore + " : " + computerScore);
    }
}

game();
