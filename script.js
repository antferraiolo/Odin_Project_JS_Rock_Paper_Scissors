function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    
    //Selects number for array
    let compselectionindex = Math.floor(Math.random() * 3);
    let compselection = options[compselectionindex];
    return compselection;
}

function getPlayerChoice(){
    //Get Player Choice through textbox
    let playerchoice = prompt("Rock, Paper or Scissors!", "Rock");

    // Convert Player choice into either "Rock", "Paper", or "Scissors"
    convertedchoice = playerchoice[0].toUpperCase() + playerchoice.slice(1);
    // Confirm Choice is Rock, Paper, or Scissors
    if (convertedchoice == "Scissors" || convertedchoice == "Paper" || convertedchoice == "Rock"){
        return convertedchoice;
    }
    else{
        console.log("Bad Selection!") 
        getPlayerChoice();
    }
    // If not, reask for Player Choice, if correct store and return selection

}

function playRound(playerSelection,computerSelection){
    // CODE
}