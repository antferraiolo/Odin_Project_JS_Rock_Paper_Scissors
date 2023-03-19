let opt1 = "Rock";
let opt2 = "Paper";
let opt3 = "Scissors";
let wins_by_player = 0; 
let wins_by_computer = 0;


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
    console.log("Computer Selects " + computerSelection + "!");

    switch (true){
        //Case with player selecting rock
        case ((computerSelection == opt1 && playerSelection == opt1)):
            console.log("Tie!");
            break;
        case ((computerSelection == opt3 && playerSelection == opt1)):
            console.log("Player Wins!");
            wins_by_player++;
            break;
        case ((computerSelection == opt2 && playerSelection == opt1)):
            console.log("Computer Wins!");
            wins_by_computer++;
            break;
        //Cases with player selecting scissors
        case ((computerSelection == opt1 && playerSelection == opt3)):
            console.log("Computer Wins!");
            wins_by_computer++;
            break;
        case ((computerSelection == opt3 && playerSelection == opt3)):
            console.log("Tie!");
            break;
        case ((computerSelection == opt2 && playerSelection == opt3)):
            console.log("Player Wins!");
            wins_by_player++;
            break;
        //Cases with player selecting paper
        case ((computerSelection == opt1 && playerSelection == opt2)):
            console.log("Player Wins!");
            wins_by_player++;
            break;
        case ((computerSelection == opt3 && playerSelection == opt2)):
            console.log("Computer Wins!");
            wins_by_computer++;
            break;
        case ((computerSelection == opt2 && playerSelection == opt2)):
            console.log("Tie!");
            break;

    }
    console.log("Wins by player: " + wins_by_player);
    console.log("Wins by computer: " + wins_by_computer);

}

function game(){
    // Want to call the play round function
    // Until either computer or player reaches 5 wins
    while ( wins_by_computer < 5 && wins_by_player < 5){
        playRound();
        if(wins_by_computer == 5){
            console.log("Computer wins the game!")
        }
        else{
            console.log("Player wins the game!")
        }

    }
    wins_by_computer = 0;
    wins_by_player = 0;
}


document.getElementById("wins_player").innerHTML = wins_by_player;
