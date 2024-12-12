function getHumanChoice() {
    let choice = "";

    while(true) {
        choice = prompt("Enter: Rock, Paper or Scissors").toLowerCase();

        switch(choice) {
            case "rock":
            case "paper":
            case "scissors":
                break;
            default:
                console.log("Invalid input");
                continue;
        }
        break;
    }
    return choice;
}

function getComputerChoice() {
    let choice = Math.floor((Math.random()*3))+1;
    if (choice === 1){
        return "rock";
    }else if (choice === 2) {
        return "paper";
    }else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice}. Computer: ${computerChoice}`);
    if (humanChoice === computerChoice){
        console.log("It's a tie! Go again.");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win!");
        return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win!");
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win!");
        return humanScore++;
    } else {
        console.log("The computer wins!");
        return computerScore++;
    }
}

function playGame (){
    while(roundCounter<6){
        console.log(`Round ${roundCounter}!`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const gameResult = playRound(humanSelection, computerSelection);
        roundCounter++;    
    }
    console.log(`Score: You = ${humanScore}, Computer = ${computerScore}`)
    if (humanScore === computerScore){
        alert("It's a tie!");
    } else if (humanScore > computerScore){
        alert("You win!");
    } else {
        alert("The Computer wins!");
    }
}


let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;
playGame();



