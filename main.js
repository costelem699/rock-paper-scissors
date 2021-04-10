function computerPlay(){
    choiceNum = Math.floor(Math.random() * (4 - 1 ) ) + 1;
    console.log(choiceNum);
    return choiceNum;
}
function playRound(playerSelection, compChoice){
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case "rock":
            if (compChoice == 1){
                return "Tie";
            }else if(compChoice == 2){
                return "You Lose";
            }else{
                return "You Win";
            }
            break;
        case "paper":
            if (compChoice == 1){
                return "You Win";
            }else if(compChoice == 2){
                return "Tie";
            }else{
                return "You Lose";
            }
            break;
        case "scissors":
            if (compChoice == 1){
                return "You Lose";
            }else if(compChoice == 2){
                return "You Win";
            }else{
                return "Tie";
            }
            break;
    }
        
}



let compChoice = computerPlay();

console.log(playRound("rock", compChoice));
