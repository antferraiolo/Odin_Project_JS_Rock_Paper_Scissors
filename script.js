let opt1 = "Rock";
let opt2 = "Paper";
let opt3 = "Scissors";
let wins_by_player = 0; 
let wins_by_computer = 0;
let playerchoice = "nothing";
let playinggame = false;
let wasplayerchoicemade = false;

function moe(){
    playerchoice = opt1;
    console.log("moe");
    wasplayerchoicemade = true;
    playerchoiceconfirmation();
}
function larry(){
    playerchoice = opt2;
    console.log("larry");
    wasplayerchoicemade = true;
    playerchoiceconfirmation();
}
function curly(){
    playerchoice = opt3;
    console.log("curly");
    wasplayerchoicemade = true;
    playerchoiceconfirmation();
}

function playerchoiceconfirmation(){
    if (wasplayerchoicemade == true){
        console.log("start");
        playRound();
    }
}



function playgameclicked(){
    wins_by_player = 0; 
    wins_by_computer = 0;
    document.getElementById("numberOfPlayerWins").innerHTML = "0"+wins_by_player;
    document.getElementById("numberOfComputerWins").innerHTML = "0"+wins_by_computer;
    document.getElementById("winnerbox").innerHTML = "";
    document.getElementById("winnerbox2").innerHTML = "";
}



function playRound(playerSelection,computerSelection){
    // GET COMPUTER SELECTION
    computerSelection = getComputerChoice();
   
    playerSelection = playerchoice;
    // TEXT TO SEE COMPUTER SELECTION
    console.log("Computer Selects " + computerSelection + "!");
    console.log("Player Selects " + playerSelection + "!");

    switch (true){
        //Case with player selecting rock
        case ((computerSelection == opt1 && playerSelection == opt1)):
            console.log("Tie!");
            document.getElementById("winnerbox").innerHTML = "Tie!";
            document.getElementById("winnerbox2").innerHTML = "Try harder!";
            break;
        case ((computerSelection == opt3 && playerSelection == opt1)):
            console.log("Player Wins!");
            document.getElementById("winnerbox").innerHTML = "Player Wins Round!";
            document.getElementById("winnerbox2").innerHTML = "Woo!";
            wins_by_player++;
            break;
        case ((computerSelection == opt2 && playerSelection == opt1)):
            console.log("Computer Wins!");
            document.getElementById("winnerbox").innerHTML = "Computer Wins Round!";
            document.getElementById("winnerbox2").innerHTML = "Boo!";
            wins_by_computer++;
            break;
        //Cases with player selecting scissors
        case ((computerSelection == opt1 && playerSelection == opt3)):
            console.log("Computer Wins!");
            document.getElementById("winnerbox").innerHTML = "Computer Wins Round!";
            document.getElementById("winnerbox2").innerHTML = "Boo!";
            wins_by_computer++;
            break;
        case ((computerSelection == opt3 && playerSelection == opt3)):
            console.log("Tie!");
            document.getElementById("winnerbox").innerHTML = "Tie!";
            document.getElementById("winnerbox2").innerHTML = "Try harder!";
            break;
        case ((computerSelection == opt2 && playerSelection == opt3)):
            console.log("Player Wins!");
            document.getElementById("winnerbox").innerHTML = "Player Wins Round!";
            document.getElementById("winnerbox2").innerHTML = "Woo!";
            wins_by_player++;
            break;
        //Cases with player selecting paper
        case ((computerSelection == opt1 && playerSelection == opt2)):
            console.log("Player Wins!");
            document.getElementById("winnerbox").innerHTML = "Player Wins Round!";
            document.getElementById("winnerbox2").innerHTML = "Woo!";
            wins_by_player++;
            break;
        case ((computerSelection == opt3 && playerSelection == opt2)):
            console.log("Computer Wins!");
            document.getElementById("winnerbox").innerHTML = "Computer Wins Round!";
            document.getElementById("winnerbox2").innerHTML = "Boo!";
            wins_by_computer++;
            break;
        case ((computerSelection == opt2 && playerSelection == opt2)):
            console.log("Tie!");
            document.getElementById("winnerbox").innerHTML = "Tie!";
            document.getElementById("winnerbox2").innerHTML = "Try harder!";
            break;
    }
    // Reset was player selection made
    wasplayerchoicemade = false;
    playerchoice = "nothing";

    // Console log the wins by player and computer
    console.log("Wins by player: " + wins_by_player);
    console.log("Wins by computer: " + wins_by_computer);

    document.getElementById("numberOfPlayerWins").innerHTML = "0"+wins_by_player;
    document.getElementById("numberOfComputerWins").innerHTML = "0"+wins_by_computer;
    // is game over function
    gameStatus(wins_by_computer,wins_by_player);
    
}


function gameStatus(wins_by_computer,wins_by_player){
    if(wins_by_computer == 5){
        console.log("Computer wins the Game!");
        document.getElementById("winnerbox").innerHTML = "Computer Wins the Game!";
        document.getElementById("winnerbox2").innerHTML = "Better Luck!";
        setTimeout(playgameclicked(),10000);
    }
    else if(wins_by_player == 5){
        console.log("Player wins the Game!");
        document.getElementById("winnerbox").innerHTML = "Player Wins the Game!";
        document.getElementById("winnerbox2").innerHTML = "What a hit!";
        setTimeout(playgameclicked(),10000);
    }
    else{
        console.log("Continue!");
    }

};


function getComputerChoice() {
    let options = [opt1, opt2, opt3];
    //Selects number for array
    let compselectionindex = Math.floor(Math.random() * 3);
    let compselection = options[compselectionindex];
    console.log(compselection);
    return compselection;
}

// document.getElementById("numberOfPlayerWins").innerHTML = wins_by_player ;
// document.getElementById("numberOfComputerWins").innerHTML = wins_by_computer ;
