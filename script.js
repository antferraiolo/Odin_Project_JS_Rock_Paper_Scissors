let opt1 = "Rock";
let opt2 = "Paper";
let opt3 = "Scissors";

function getComputerChoice(){
    let options = [opt1, opt2, opt3];
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
    if (convertedchoice == opt3 || convertedchoice == opt2|| convertedchoice == opt1){
        return convertedchoice;
    }
    else{
        getPlayerChoice();
    }
}

function playRound(playerSelection,computerSelection){
    // CODE
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log("Computer Selects " + computerSelection + "!")

    switch (true){
        //Case with player selecting rock
        case ((computerSelection == opt1 && playerSelection == opt1)):
            console.log("Tie!");
            break;
        case ((computerSelection == opt3 && playerSelection == opt1)):
            console.log("Player Wins!");
            break;
        case ((computerSelection == opt2 && playerSelection == opt1)):
            console.log("Computer Wins!");
            break;
        //Cases with player selecting scissors
        case ((computerSelection == opt1 && playerSelection == opt3)):
            console.log("Computer Wins!");
            break;
        case ((computerSelection == opt3 && playerSelection == opt3)):
            console.log("Tie!");
            break;
        case ((computerSelection == opt2 && playerSelection == opt3)):
            console.log("Player Wins!");
            break;
        //Cases with player selecting paper
        case ((computerSelection == opt1 && playerSelection == opt2)):
            console.log("Player Wins!");
            break;
        case ((computerSelection == opt3 && playerSelection == opt2)):
            console.log("Computer Wins!");
            break;
        case ((computerSelection == opt2 && playerSelection == opt2)):
            console.log("Tie!");
            break;

    }

    }
