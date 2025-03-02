function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    if(n == 0){
        return "rock";
    }
    else if(n == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
let humanScore = 0;
let computerScore = 0;
const results = document.createElement("div");
results.textContent = "Click to Play!"
document.body.appendChild(results);
const score = document.createElement("div");
score.textContent = humanScore + " to " + computerScore;
document.body.appendChild(score);

function playRound(humanSelection){
    const computerSelection = getComputerChoice();

    if(humanSelection === computerSelection){
        results.textContent = "Tie"
    }
    else if((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")){
        results.textContent = "You Win! " + humanSelection + " beats " + computerSelection + ".";
        humanScore++;
    }
    else{
        results.textContent = "You Lose! " + computerSelection + " beats " + humanSelection + ".";
        computerScore++;
    }   

    score.textContent = humanScore + " to " + computerScore;

    if(humanScore == 5){
        score.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0;
        results.textContent = "Click to Play Again!"
    }
    else if(computerScore == 5){
        score.textContent = "You Lose!";
        humanScore = 0;
        computerScore = 0;
        results.textContent = "Click to Play Again!"
    }

}




const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");
rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissors";
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);



rock.addEventListener("click", () => {
    playRound("rock");
});
paper.addEventListener("click", () => {
    playRound("paper");
});
scissor.addEventListener("click", () => {
    playRound("scissors");
});


