
//the game will play several times if you click play game as it adds several event listeners to the same button

let playerScore = 0;
let computerScore = 0;

let startGame = document.querySelector('#start-game');
let humanScoreDisplay = document.querySelector('#human-score');
let machineScoreDisplay = document.querySelector('#machine-score');
let gameResultDisplay = document.querySelector('#game-result-display');
let playAgainBtn = document.querySelector('#play-again');

startGame.addEventListener('click', gamePlay);

//updates the score after each game in view
function updateScore (computerScore, playerScore) {

    if ( playerScore === 5 ) {
        
        gameResultDisplay.textContent = 'Congrats, you won!!!';
        humanScoreDisplay.textContent = playerScore;
        playAgainBtn.style.display = 'block';
        
    } else if (computerScore === 5) {
        gameResultDisplay.textContent = 'Sorry, computer one this time :(';
        machineScoreDisplay.textContent = computerScore;
        playAgainBtn.style.display = 'block';
        
    } else {

        humanScoreDisplay.textContent = playerScore;
        machineScoreDisplay.textContent = computerScore;

    }

}

//computerselects rock, paper, or scissors
function computerSelection() {
    let computerOptions = ['rock', 'paper','scissors'];
    return computerOptions[Math.floor(Math.random() * (3 - 0) + 0)];
}

//user chooses rock, paper, or scissors and then initates a game play to see who wins

let buttons = document.querySelectorAll('.button-select');



function gamePlay() { 
    startGame.style.display = 'none';
    buttons.forEach((button) => {
        button.addEventListener('click',e => {
        // console.log(e);
        let playerPick = e.target.attributes[2].value;
        document.querySelector('#image-update').src=`images/movie-${playerPick}.png`;
        let computerPick = computerSelection();
        // console.log(`${playerPick} + ${computerPick}`);
        playGame(playerPick, computerPick);
        
        }); 

    });

}


//this function provides logic for who wins + updates score for win and loss
   function playGame(playerSelection, computerSelection) {

       switch(playerSelection){
        case 'rock':
          if (computerSelection === 'scissors' ) {
            alert('You Win');
            playerScore++;
        
        } else if (computerSelection === playerSelection){
            alert('Draw');
        } else  {
            alert('You lose');
            computerScore++
        }
        break;
        case 'scissors':
          if (computerSelection === 'paper' ) {
            alert('You Win');
            playerScore++;
        } else if (computerSelection === playerSelection){
            alert('Draw');
        } else  {
            alert('You lose');
            computerScore++;
        }
        break;

        case 'paper':
          if (computerSelection === 'rock' ) {
            alert('You Win');
            playerScore++;
        } else if (computerSelection === playerSelection){
            alert('Draw');
        } else  {
            alert('You lose');
            computerScore++;
        }
        break;
        default:
            alert ('error');

    }
    updateScore(computerScore, playerScore);

}


//allows player to reset game and start with scores back at 0
playAgainBtn.addEventListener('click', resetGame);


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = playerScore;
    machineScoreDisplay.textContent = computerScore;
    playAgainBtn.style.display = 'none';
    gameResultDisplay.textContent ='';

}

