function computerPlay(){
    choiceNum = Math.floor(Math.random() * (4 - 1 ) ) + 1;
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
function game(){
    let playerScore = 0;
    let compScore = 0;
    while(playerScore < 5 && compScore < 5){
        let compChoice = computerPlay();
        let playerChoice = prompt("Choose your weapon");
        let result = playRound(playerChoice, compChoice);
            console.log(result);
            if(result =="You Win"){
                playerScore = ++playerScore;
            }
            else if(result == "You Lose"){
                compScore = ++compScore;
            }
            console.log(playerScore + " " + compScore);
        }
            if (compScore > playerScore){
                return "Computer Wins";
            }
            else{
                return "Player Wins!"
            }
        
    }

console.log(game());





