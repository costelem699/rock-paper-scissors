function computerPlay(){
    choiceNum = Math.floor(Math.random() * (4 - 1 ) ) + 1;
    let result = "";
    if (choiceNum == 1){
        result = "rock";
    }else if (choiceNum == 2){
        result = "paper";
    }else {
        result = "scissors";
    }
    console.log(result);
    return result;
}
function playRound(playerSelection, compChoice){
    playerSelection = playerSelection.toLowerCase();
    let result = "";
    switch(playerSelection) {
        case "rock":
            if (compChoice == "rock"){
                result = "It's a Tie!";
            }else if (compChoice == "paper"){
                result = "You lose";
            }else{
                result = "You Win!!!";
            }
            break;
        case "paper":
            if (compChoice == "paper"){
                result = "It's a Tie!";
            }else if (compChoice == "scissors"){
                result = "You lose";
            }else{
                result = "You Win!!!";
            }
            break;
        case "scissors":
            if (compChoice == "scissors"){
                result = "It's a Tie!";
            }else if (compChoice == "rock"){
                result = "You lose";
            }else{
                result = "You Win!!!";
            }
            break;
    }
    console.log(result);
}
function game(){
    let playerScore = 0;
    let compScore = 0;
    let result = "";
        playRound("ROck", compChoice);
        switch(result){
            case "You Win!!!":
                playerScore += 1;
                break;
            case "You lose":
                compScore += 1;
                break;
            default:
                compScore = compScore;
            }
            if (playerScore > compScore){
                return "You Win!";
            }else{
                return "You Lose";
            }
            console.log(playerScore);
    }


let compChoice = computerPlay();





console.log(game());