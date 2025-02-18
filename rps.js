function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    if(n == 0){
        return "rock";
    }
    else if(n == 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let c = prompt("rock, paper, or scissors");
    if(c.toLowerCase() === "rock" || c.toLowerCase() === "paper" || c.toLowerCase() === "scissors"){
        return c.toLowerCase();
    }
    else{
        return "Invalid Choice";
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        if(humanSelection === "Invalid Choice"){
            console.log("Invalid Choice");
        }
        else if(humanSelection === computerSelection){
            console.log("Tie");
        }
        else if((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")){
            console.log("You Win! " + humanSelection + " beats " + computerSelection + ".");
            humanScore++;
        }
        else{
            console.log("You Lose! " + computerSelection + " beats " + humanSelection + ".");
            computerScore++;
        }   
    
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if(humanScore > computerScore){
        console.log("You Win!");
    }
    else if(humanScore === computerScore){
        console.log("You Tied");
    }
    else{
        console.log("You Lose!");
    }
}

playGame();